import { BaseCommand } from './baseCommand';
import { Option } from '../types/option.type';

export class VoiceCommand extends BaseCommand {
  options: Option[] = [];

  constructor(props: VoiceCommand) {
    super();
    Object.assign(this, props);
  }
}

