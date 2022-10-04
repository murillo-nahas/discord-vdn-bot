import { catchphrasesSet } from "../constants/messageConst";
import { VoiceCommand } from "../types/voiceCommand.type";
import { Utils } from "../utils";

export const TextCommands: VoiceCommand[] = [
	{
		id: 'random',
		name: 'random',
		description: 'Sorteia um dos bordões no chat',
		action: (msg, con) => {
			const randomElement = catchphrasesSet[Math.floor(Math.random() * catchphrasesSet.length)]
			msg.channel.send(randomElement)
		}
	},
	{
		id: 'help',
		name: 'help',
		description: 'Lista todos os comandos',
		action: (msg, con) => {
			msg.channel.send({
				embeds: Utils.getCommandsAsMessages()
			})
		}
	}
];
