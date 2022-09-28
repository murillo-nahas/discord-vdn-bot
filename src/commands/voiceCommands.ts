import { VoiceCommand } from "../types/voiceCommand.type";
import { player } from '../player';
import ytdl from "ytdl-core";
import { createAudioResource } from "@discordjs/voice";

export const VoiceCommands: VoiceCommand[] = [
	{
		id: 'p',
		name: 'play',
		description: 'Lista de comandos: \n • ;;p é utilizado para tocar algum som do Vai dar Namoro!',
		options: [
			{
				id: 1,
				name: 'Dança gatinho, dança!',
				description: '• ;;p 1 roda: Dança gatinho, dança!',
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
				description: '• ;;p 2 roda: Gostou? Então leva pra casa.',
				action: (con) => {
					console.log('id: 2, gostou leva pra casa');
				}
			}
		]
	},
	{
		id: 'stop',
		name: 'stop',
		description: '• Pausa o aúdio.',
		action: (msg, con) => {
			player.pause();
		}
	},
	{
		id: 'resume',
		name: 'resume',
		description: '• Despausa a música.',
		action: (msg, con) => {
			player.unpause();
		}
	},
	{
		id: 'disconnect',
		name: 'disconnect',
		description: '• Desconecta o bot.',
		action: (msg, con) => {
			con.disconnect();
			con.destroy();
		}
	},
	{
		id: 'help',
		name: 'help',
		description: '-----------------------------------------------',
		action: (msg, con) => {
			VoiceCommands.map((el) => {

				msg.channel.send(el.description);

				if(el.options) {
					el.options.map((res) => {
						msg.channel.send(res.description)
					})	
				}
				//return el.id === 'p';
			})
			// filterCommand[0].options?.map((res) => {
			// 	msg.channel.send(res.description);
			// });
		}
	}
];
