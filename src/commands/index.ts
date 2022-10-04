import { VoiceCommands } from './voiceCommands';
import { TextCommands } from './textCommands';
import { ActionsCommands } from './actionsCommands';

export const Commands = () => {
	return [
		...VoiceCommands,
		...TextCommands,
		...ActionsCommands
	]
};
