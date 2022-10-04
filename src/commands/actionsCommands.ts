import { player } from '../player';
import { ActionsCommand } from "../models/actionsCommand.type";

export const ActionsCommands: ActionsCommand[] = [
	// new ActionsCommand({
	// 	id: 'stop',
	// 	name: 'stop',
	// 	description: 'Pausa o aúdio.',
	// 	action: (con) => {
	// 		player.pause();
	// 	}
	// }),
	// new ActionsCommand({
	// 	id: 'resume',
	// 	name: 'resume',
	// 	description: 'Despausa a música.',
	// 	action: (con) => {
	// 		player.unpause();
	// 	}
	// }),
	new ActionsCommand({
		id: 'disconnect',
		name: 'disconnect',
		description: 'Desconecta o bot.',
		action: (con) => {
			con.disconnect();
			con.destroy();
		}
	}),
];
