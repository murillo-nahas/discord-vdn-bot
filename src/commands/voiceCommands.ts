import { VoiceCommand } from "../types/voiceCommand";

export const VoiceCommands: VoiceCommand[] = [
	{
		id: 1,
		name: 'Dança Gatinho, Dança!',
		description: 'Entra no chat de voz e toca dança gatinho',
		action: () => {
			console.log('id: 1, dança gatinho');
		}
	},
	{
		id: 2,
		name: 'Gostou? Então leva pra casa!',
		description: 'Entra no chat de voz e começa a tocar gostou então leva pra casa',
		action: () => {
			console.log('id: 2, gostou leva pra casa');
		}
	}
];
