import { VoiceCommands } from './voiceCommands';
import { TextCommands } from './textCommands';
import { ActionsCommands } from './actionsCommands';
import { Command } from '../types/command.type';

export const Commands: Command<'voice' | 'text'>[] = [
	...VoiceCommands,
	...TextCommands,
	...ActionsCommands
];
