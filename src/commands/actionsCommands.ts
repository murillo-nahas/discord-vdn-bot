import { ActionsCommand } from "../models/actionsCommand";

export const ActionsCommands: ActionsCommand[] = [
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
