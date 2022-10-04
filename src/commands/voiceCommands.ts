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
				name: 'AAAAAI',
				description: '• AAAAAI',
				action: (con) => {
					const resource = createAudioResource(createReadStream(path.join(__dirname + '/../assets/Ai.mp3')));

					player.play(resource);
					con.subscribe(player);
				}
			},
			{
				id: 3,
				name: 'AiAiAi',
				description: '• AiAiAi',
				action: (con) => {
					const resource = createAudioResource(createReadStream(path.join(__dirname + '/../assets/AiAiAi.mp3')));

					player.play(resource);
					con.subscribe(player);
				}
			},
			{
				id: 4,
				name: 'Ai Gostei',
				description: '• Aai gostei',
				action: (con) => {
					const resource = createAudioResource(createReadStream(path.join(__dirname + '/../assets/AiGostei.mp3')));

					player.play(resource);
					con.subscribe(player);
				}
			},
			{
				id: 5,
				name: 'Ai Mamae',
				description: '• Aai mamae',
				action: (con) => {
					const resource = createAudioResource(createReadStream(path.join(__dirname + '/../assets/AiMamae.mp3')));

					player.play(resource);
					con.subscribe(player);
				}
			},
			{
				id: 6,
				name: 'AOOOOO Potencia',
				description: '• AOOOOO Potencia',
				action: (con) => {
					const resource = createAudioResource(createReadStream(path.join(__dirname + '/../assets/AoPotencia.mp3')));

					player.play(resource);
					con.subscribe(player);
				}
			},
			{
				id: 7,
				name: 'Atumalaca',
				description: '• Atumalaca',
				action: (con) => {
					const resource = createAudioResource(createReadStream(path.join(__dirname + '/../assets/Atumalaca.mp3')));

					player.play(resource);
					con.subscribe(player);
				}
			},
			{
				id: 8,
				name: 'CAVALO',
				description: '• CAVALO',
				action: (con) => {
					const resource = createAudioResource(createReadStream(path.join(__dirname + '/../assets/Cavalo.mp3')));

					player.play(resource);
					con.subscribe(player);
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
