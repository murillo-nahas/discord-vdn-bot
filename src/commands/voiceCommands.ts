import { VoiceCommand } from "../types/voiceCommand.type";
import { player } from '../player';
import { createAudioResource } from "@discordjs/voice";
import { Utils } from '../utils';
import { catchphrasesSet } from '../consts/messageConst';

import path from 'path';
import { createReadStream } from "fs";

export const VoiceCommands: VoiceCommand[] = [
	{
		id: 'play',
		name: 'play',
		description: 'Toca algum som do Vai dar Namoro!',
		options: [
			{
				id: 1,
				name: 'Dança gatinho, dança!',
				description: '• Dança gatinho, dança!',
				action: (con) => {
					const resource = createAudioResource(createReadStream(path.join(__dirname + '/../assets/DancaGatinho.mp3')));

					player.play(resource);
					con.subscribe(player);
				},
			},
			{
				id: 2,
				name: 'Gostou? Então leva pra casa!',
				description: '• Gostou? Então leva pra casa.',
				action: (con) => {
					// TODO: add the song
				}
			}
		]
	},
	{
		id: 'stop',
		name: 'stop',
		description: 'Pausa o aúdio.',
		action: (msg, con) => {
			player.pause();
		}
	},
	{
		id: 'resume',
		name: 'resume',
		description: 'Despausa a música.',
		action: (msg, con) => {
			player.unpause();
		}
	},
	{
		id: 'disconnect',
		name: 'disconnect',
		description: 'Desconecta o bot.',
		action: (msg, con) => {
			con.disconnect();
			con.destroy();
		}
	},
	{
		id: 'random',
		name: 'random',
		description: 'Sorteia um dos bordões no chat',
		action: (msg, con) => {
			const randomElement = catchphrasesSet[Math.floor(Math.random() * catchphrasesSet.length)]
			msg.channel.send(randomElement)
		}
	},
	{
		id: 'help',
		name: 'help',
		description: 'Lista todos os comandos',
		action: (msg, con) => {
			msg.channel.send({
				embeds: Utils.getCommandsAsMessages()
			})
		}
	}
];
