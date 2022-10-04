import { Message } from "discord.js";
import { Command } from "./command.type";

export interface TextCommand extends Command<'text'> {
	action: (msg: Message<boolean>) => void;
}
