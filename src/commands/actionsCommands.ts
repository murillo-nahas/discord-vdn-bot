import { player } from '../player';
import { ActionsCommand } from "../types/actionsCommand.type";

export const ActionsCommands: ActionsCommand[] = [
	{
		id: 'stop',
		name: 'stop',
		description: 'Pausa o aúdio.',
		action: (con) => {
			player.pause();
		},
		type: 'text'
	},
	{
		id: 'resume',
		name: 'resume',
		description: 'Despausa a música.',
		action: (con) => {
			player.unpause();
		},
		type: 'text'
	},
	{
		id: 'disconnect',
		name: 'disconnect',
		description: 'Desconecta o bot.',
		action: (con) => {
			con.disconnect();
			con.destroy();
		},
		type: 'text'
	},
];
