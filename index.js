const { Client, Collection } = require("discord.js");

const client = new Client({
  intents: [
    "GUILDS",
    "GUILD_MEMBERS",
    "GUILD_BANS",
    "GUILD_EMOJIS",
    "GUILD_MESSAGE_REACTIONS",
    "GUILD_MESSAGES",
  ],
});
module.exports = client;
client.commands = new Collection();
client.config = require("./config.json");

require("./handler")(client);

client.login(client.config.token);
