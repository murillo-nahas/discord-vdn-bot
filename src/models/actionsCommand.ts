import { VoiceConnection } from "@discordjs/voice";
import { BaseCommand } from "./baseCommand";

export class ActionsCommand extends BaseCommand {
  action = (con: VoiceConnection) => {};

  constructor(props: ActionsCommand) {
    super();
    Object.assign(this, props);
  }
}
