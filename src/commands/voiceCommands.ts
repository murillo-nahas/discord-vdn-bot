import { VoiceCommand } from "../types/voiceCommand.type";
import { player } from '../player';
import ytdl from "ytdl-core";
import { createAudioResource } from "@discordjs/voice";

export const VoiceCommands: VoiceCommand[] = [
	{
		id: 1,
		name: 'Dança Gatinho, Dança!',
		description: 'Entra no chat de voz e toca dança gatinho',
		action: (msg, con) => {
			const stream = ytdl('https://www.youtube.com/watch?v=zBh0stt0ayI', { filter : 'audioonly' });

			const resource = createAudioResource(stream);

			player.play(resource);

			con.subscribe(player);
		}
	},
	{
		id: 2,
		name: 'Gostou? Então leva pra casa!',
		description: 'Entra no chat de voz e começa a tocar gostou então leva pra casa',
		action: (msg, con) => {
			console.log('id: 2, gostou leva pra casa');
		}
	}
];
