import { VoiceConnection } from "@discordjs/voice";
import { Command } from "./command.type";

export interface VoiceCommand extends Command<'voice'> {
	options: VoiceOption[];
}

export type VoiceOption = {
	id: number;
	name: string;
	description: string;
	action: (con: VoiceConnection) => void;
}
