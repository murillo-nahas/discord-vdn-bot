import { VoiceCommand } from './types/voiceCommand.type';
import { VoiceCommands } from './commands/voiceCommands';

type CustomMessage = {
	title: string;
	fields: OptionCustomMessage[];
}

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

	static getCommandsAsMessages(): CustomMessage[] {
		const commands: CustomMessage[] = [];

		VoiceCommands.map((com) => {
			commands.push({
				title: com.name,
				...(this.hasOptions(com) ? {
					fields: this.getOptions(com)
				}: {
					fields: [
						{
							name: '-----------',
							value: com.description,
							inline: false
						}
					]
				})
			});
		});

		return commands;
	}
}
