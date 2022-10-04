import { VoiceCommand, VoiceOption } from "../types/voiceCommand.type";
import { player } from '../player';
import { createAudioResource } from "@discordjs/voice";
import { Utils } from '../utils';
import { catchphrasesSet } from '../consts/messageConst';

import path from 'path';
import { createReadStream } from "fs";

const createOptionFromAssets = (): VoiceOption[] => {
	const options: VoiceOption[] = [];

	Utils.getAllAssets().forEach((op, index) => {
		const name = op.split('.')[0];

		options.push({
			id: index + 1,
			name,
			description: name, // should remove description
			action: (con) => {
				const resource = createAudioResource(createReadStream(path.join(__dirname + `/../assets/${name}.mp3`)));
				player.play(resource);
				con.subscribe(player);
			}
		});
	});

	return options;
};

export const VoiceCommands: VoiceCommand[] = [
	{
		id: 'play',
		name: 'play',
		description: 'Toca algum som do Vai dar Namoro!',
		options: createOptionFromAssets()
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
