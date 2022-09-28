import { VoiceConnection } from "@discordjs/voice";
import { Message } from "discord.js";

export type VoiceCommand = {
	id: number;
	name: string;
	description: string;
	action: (msg: Message<boolean>, con: VoiceConnection) => void
}
