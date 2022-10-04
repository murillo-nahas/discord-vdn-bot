import {
  joinVoiceChannel,
  entersState,
  VoiceConnectionStatus
} from '@discordjs/voice'
import { Client, IntentsBitField, GatewayIntentBits } from 'discord.js'
import dotenv from 'dotenv';

import { Commands } from './commands';
import { ActionsCommand } from './models/actionsCommand.type';
import { TextCommand } from './models/textCommand.type';
import { VoiceCommand } from './models/voiceCommand.type';

dotenv.config();

const prefix = process.env.PREFIX!;

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

  if (!msg.content.startsWith(prefix)) return;

	const message = msg.content.replace(prefix, '').toLowerCase();

	let command = Commands.filter(c => message.startsWith(c.id))[0];

	if (command !== undefined) {
		if (command.type === 'voice') {
			command = command as VoiceCommand;

			const { channel } = msg.member!.voice;

			if (!channel) {
				msg.channel.send('Você deve estar em um canal de voz!');
				return;
			}

			const connection = joinVoiceChannel({
				channelId: channel.id,
				guildId: channel.guild.id,
				adapterCreator: channel.guild.voiceAdapterCreator,
			});

			// 30s to connect - otherwise connection rejected
			entersState(connection, VoiceConnectionStatus.Ready, 30e3);

			// check if has options
			// if (command.options && command.options.length > 0) {
			// 	const option = Number(message.split(' ')[1]);

			// 	if (isNaN(option)) {
			// 		msg.channel.send('Digite uma opção valida para este comando!');
			// 		return;
			// 	}

			// 	const selected = command.options.filter(o => o.id === option)[0];
			// 	selected.action(connection);
			// }
		} else {
			command = command as TextCommand | ActionsCommand;
		}
	} else {
		msg.channel.send('Essa opção não existe. Digite ;;help para ves as opções');
		return;
	}
});

client.login(process.env.TOKEN).catch((err) => console.log(err));
