import { catchphrasesSet } from "../constants/messageConst";
import { TextCommand } from "../models/textCommand.type";
import { Utils } from "../utils";

export const TextCommands: TextCommand[] = [
	new TextCommand({
		id: 'random',
		name: 'random',
		description: 'Sorteia um dos bordões no chat',
		action: (msg) => {
			const randomElement = catchphrasesSet[Math.floor(Math.random() * catchphrasesSet.length)]
			msg.channel.send(randomElement)
		}
	}),
	new TextCommand({
		id: 'help',
		name: 'help',
		description: 'Lista todos os comandos',
		action: (msg) => {
			msg.channel.send({
				embeds: Utils.getCommandsAsMessages()
			})
		}
	})
];
