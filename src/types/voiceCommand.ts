import { Message } from "discord.js";

export type VoiceCommand = {
	id: number;
	name: string;
	description: string;
	action: (msg: Message<boolean>) => void
}
