import { VoiceConnection } from "@discordjs/voice";
import { Message } from "discord.js";

export type VoiceCommand = {
	id: string;
	name: string;
	description: string;
	options?: VoiceOption[];
	action?: (msg: Message<boolean>, con: VoiceConnection) => void;
}

export type VoiceOption = {
	id: number;
	name: string;
	description: string;
	action: (con: VoiceConnection) => void;
}
