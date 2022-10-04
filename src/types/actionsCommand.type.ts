import { VoiceConnection } from "@discordjs/voice";
import { Command } from "./command.type";

export interface ActionsCommand extends Command<'text'> {
	action: (con: VoiceConnection) => void;
}
