import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on("ready", () => {
  console.log("All right man! What do you need, an?");
});

client.on("messageCreate", (msg) => {
  if (msg.content === "hello") {
    msg.reply({
      content: "world",
    });
  }
});

client.login(process.env.TOKEN).catch((err: any) => console.log(err));
