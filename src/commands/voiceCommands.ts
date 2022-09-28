import { VoiceCommand } from "../types/voiceCommand.type";
import { player } from '../player';
import ytdl from "ytdl-core";
import { createAudioResource } from "@discordjs/voice";

export const VoiceCommands: VoiceCommand[] = [
	{
		id: 'p',
		name: 'play',
		description: 'toca algum som do programa vai dar namoro',
		options: [
			{
				id: 1,
				name: 'Dança gatinho',
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
				action: (con) => {
					console.log('id: 2, gostou leva pra casa');
				}
			}
		]
	},
	{
		id: 'stop',
		name: 'stop',
		description: 'pausa a música',
		action: (con) => {
			player.pause();
		}
	},
	{
		id: 'resume',
		name: 'resume',
		description: 'despausa a música',
		action: (con) => {
			player.unpause();
		}
	}
];
