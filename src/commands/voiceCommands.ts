import { VoiceCommand } from "../types/voiceCommand.type";
import { player } from '../player';
import ytdl from "ytdl-core";
import { createAudioResource } from "@discordjs/voice";
import { Utils } from '../utils';

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
					const stream = ytdl('https://www.youtube.com/watch?v=zBh0stt0ayI', { filter : 'audioonly' });

					const resource = createAudioResource(stream);

					player.play(resource);
					con.subscribe(player);
				},
			},
			{
				id: 2,
				name: 'Gostou? Então leva pra casa!',
				description: '• Gostou? Então leva pra casa.',
				action: (con) => {
					console.log('id: 2, gostou leva pra casa');
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
