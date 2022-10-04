import { Message } from "discord.js";
import { BaseCommand } from "./baseCommand.type";

export class TextCommand extends BaseCommand {
  action = (msg: Message<boolean>) => {};

  constructor(props: TextCommand) {
    super();
    Object.assign(this, props);
  }
}
