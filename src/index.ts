import {
  joinVoiceChannel,
  entersState,
  VoiceConnectionStatus,
  createAudioPlayer,
  NoSubscriberBehavior,
  createAudioResource
} from '@discordjs/voice'
import { Client, Intents } from 'discord.js'
import dotenv from 'dotenv';

import { VoiceCommands } from './commands/voiceCommands';

dotenv.config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });

client.on('ready', () => {
  console.log('All right man! What do you need, an?');
});

client.on('messageCreate', (msg: any) => {
	console.log(msg);
  if (msg.author.bot) return;

  if (!msg.content.startsWith(process.env.PREFIX!)) return;

	const { channel } = msg.member!.voice;

	console.log(msg.member);

	if (!channel) {
		msg.channel.send('Você deve estar em um canal de voz!');
		return;
	}

	VoiceCommands.map((command) => {
		if (msg.content.startsWith(process.env.PREFIX! + 'p ' + command.id))
			command.action();
	});
});

client.login(process.env.TOKEN).catch((err) => console.log(err));
