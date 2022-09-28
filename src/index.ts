import {
  joinVoiceChannel,
  entersState,
  VoiceConnectionStatus,
  createAudioResource
} from '@discordjs/voice'
import { Client, IntentsBitField, GatewayIntentBits } from 'discord.js'
import dotenv from 'dotenv';
import ytdl from 'ytdl-core';

import { VoiceCommands } from './commands/voiceCommands';
// import { player } from './player';

dotenv.config();

const client = new Client({ intents: [
	IntentsBitField.Flags.GuildMessages,
	IntentsBitField.Flags.MessageContent,
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent
] });

client.on('ready', () => {
  console.log('All right man! What do you need, an?');
});

client.on('messageCreate', msg => {
  if (msg.author.bot) return;

  if (!msg.content.startsWith(process.env.PREFIX!)) return;

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

	// connection.disconnect();
	// connection.destroy();
	// return;

	// 30s to connect - otherwise connection rejected
	entersState(connection, VoiceConnectionStatus.Ready, 30e3);

	for (let i = 0; i < VoiceCommands.length; i++) {
		const command = VoiceCommands[i];

		if (msg.content.startsWith(process.env.PREFIX! + 'p ' + command.id))
			command.action(msg, connection);
		else
			msg.channel.send('Comando não encontrado!');

		break;
	}
});

client.login(process.env.TOKEN).catch((err) => console.log(err));
