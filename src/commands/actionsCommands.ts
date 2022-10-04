import { player } from '../player';
import { VoiceCommand } from "../types/voiceCommand.type";

export const ActionsCommands: VoiceCommand[] = [
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
];
