import { VoiceConnection } from "@discordjs/voice";
import { Message } from "discord.js";

export type VoiceCommand = {
	id: string;
	name: string;
	description: string;
	options?: VoiceOption[];
	action?: (con: VoiceConnection) => void;
}

export type VoiceOption = {
	id: number;
	name: string;
	action: (con: VoiceConnection) => void;
}
