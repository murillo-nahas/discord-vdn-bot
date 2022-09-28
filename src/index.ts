import {
  joinVoiceChannel,
  entersState,
  VoiceConnectionStatus
} from '@discordjs/voice'
import { Client, IntentsBitField, GatewayIntentBits } from 'discord.js'
import dotenv from 'dotenv';

import { VoiceCommands } from './commands/voiceCommands';
import { Utils } from './utils';

dotenv.config();

const client = new Client({ intents: [
	IntentsBitField.Flags.GuildMessages,
	IntentsBitField.Flags.MessageContent,
	IntentsBitField.Flags.GuildVoiceStates,
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent,
	GatewayIntentBits.GuildVoiceStates
] });

client.on('ready', () => {
  console.log('All right man! What do you need, an?');
});

client.on('messageCreate', async (msg) => {
  if (msg.author.bot) return;

  if (!msg.content.startsWith(process.env.PREFIX!)) return;

	const { channel } = msg.member!.voice;

	if (!channel) {
		msg.channel.send('Você deve estar em um canal de voz!');
		return;
	}

	msg.content = msg.content.toLowerCase();

	const connection = joinVoiceChannel({
		channelId: channel.id,
		guildId: channel.guild.id,
		adapterCreator: channel.guild.voiceAdapterCreator,
	});

	// 30s to connect - otherwise connection rejected
	entersState(connection, VoiceConnectionStatus.Ready, 30e3);

	// need refactor
	for (let i = 0; i < VoiceCommands.length; i++) {
		const command = VoiceCommands[i];

		if (msg.content.startsWith(process.env.PREFIX! + command.id)) {
			if (Utils.hasOptions(command)) {
				// get the option - example: ;;p 1 -> will catch the '1'
				const option = /(?![a-z]\s)[0-9]/;

				if (option.test(msg.content)) {
					const optionSelected = Number(option.exec(msg.content)?.[0]);

					const op = command?.options?.filter((op) => op.id === optionSelected);

					if (op)
						op[0].action(connection)
					else {
						msg.channel.send('Essa opção não existe. Digite ;;help para ves as opções');
						return;
					}
				}
			} else {
				if (command.action)
					command.action(msg, connection);
			}
		}
	}
});

client.login(process.env.TOKEN).catch((err) => console.log(err));
