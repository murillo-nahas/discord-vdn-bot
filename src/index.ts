import {
  joinVoiceChannel,
  entersState,
  VoiceConnectionStatus,
	VoiceConnection
} from '@discordjs/voice'
import { Client, IntentsBitField, GatewayIntentBits } from 'discord.js'
import dotenv from 'dotenv';

import { Commands } from './commands';
import { ActionsCommand } from './models/actionsCommand';
import { TextCommand } from './models/textCommand';
import { VoiceCommand } from './models/voiceCommand';

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

let connection: VoiceConnection | undefined;

client.on('messageCreate', async (msg: any) => {
  if (msg.author.bot) return;

  if (!msg.content.startsWith(prefix)) return;

	const message = msg.content.replace(prefix, '').toLowerCase();

	const command = Commands.filter(c => message.startsWith(c.id))[0];

	if (!command) {
		msg.channel.send('Essa opção não existe. Digite ;;help para ves as opções');
		return;
	}

	if (command instanceof VoiceCommand) {
		const { channel } = msg.member!.voice;

		if (!channel) {
			msg.channel.send('Você deve estar em um canal de voz!');
			return;
		}

		connection = joinVoiceChannel({
			channelId: channel.id,
			guildId: channel.guild.id,
			adapterCreator: channel.guild.voiceAdapterCreator,
		});

		// 30s to connect - otherwise connection rejected
		entersState(connection, VoiceConnectionStatus.Ready, 30e3);

		const option = Number(message.split(' ')[1]);

		if (isNaN(option)) {
			msg.channel.send('Digite uma opção valida para este comando!');
			return;
		}

		const selected = command.options.filter(o => o.id === option)[0];
		selected.action(connection);
	}

	if (command instanceof TextCommand) {
		command.action(msg);
	}

	if (command instanceof ActionsCommand) {
		if (connection !== undefined)
			command.action(connection);
	}
});

client.login(process.env.TOKEN).catch((err: any) => console.log(err));
