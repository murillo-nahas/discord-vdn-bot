import { VoiceCommand, VoiceOption } from './types/voiceCommand.type';
import { VoiceCommands } from './commands/voiceCommands';

type OptionCustomMessage = {
	name: string;
	value: string;
	inline: boolean;
}

export class Utils {
	static getOptions(command: VoiceCommand): OptionCustomMessage[] {
		const commands = VoiceCommands.filter((c) => c === command);

		const options: OptionCustomMessage[] = [];

		if (this.hasOptions(commands[0])) {
			commands[0].options?.map((el) => {
				options.push({
					name: `${el.id} - ${el.name}`,
					value: el.description,
					inline: false
				});
			});
		}

		return options;
	}

	static hasOptions(command: VoiceCommand): boolean {
		const com = VoiceCommands.filter((c) => c === command)
		return com[0]?.options !== undefined;
	}
}
