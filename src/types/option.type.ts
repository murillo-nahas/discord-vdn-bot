import { VoiceConnection } from "@discordjs/voice";

export type Option = {
	id: number;
	name: string;
	description: string;
	action: (con: VoiceConnection) => void;
}
