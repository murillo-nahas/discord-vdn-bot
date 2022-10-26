import { VoiceCommands } from './voiceCommands';
import { TextCommands } from './textCommands';
import { ActionsCommands } from './actionsCommands';
import { BaseCommand } from '../models/baseCommand';

export const Commands: BaseCommand[] = [
	...VoiceCommands,
	...TextCommands,
	...ActionsCommands
];
