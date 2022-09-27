import {
  joinVoiceChannel,
  entersState,
  VoiceConnectionStatus,
  createAudioPlayer,
  NoSubscriberBehavior,
  createAudioResource
} from '@discordjs/voice'
import { Client, IntentsBitField } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({ intents: [IntentsBitField.Flags.GuildMessages, IntentsBitField.Flags.GuildVoiceStates] });

client.on("ready", () => {
  console.log("All right man! What do you need, an?");
});

client.on("messageCreate", (msg) => {
  if (msg.author.bot) return;

  if (!msg.content.startsWith(process.env.PREFIX!)) return;

  if (msg.content === "hello") {
    msg.reply({
      content: "world",
    });
  }
});

client.login(process.env.TOKEN).catch((err) => console.log(err));
