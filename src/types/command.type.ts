import { ActionsCommand } from "./actionsCommand.type";
import { TextCommand } from "./textCommand.type";
import { VoiceCommand } from "./voiceCommand.type";

export interface Command<A> {
	id: string;
	name: string;
	description: string;
	type: A;
}
