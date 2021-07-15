const { Client, Message, MessageEmbed } = require("discord.js");
const color = require("../../config.json").color;
const owner = require("../../config.json").owner;


module.exports = {
  name: "leave",
  description: `Just leave a server!`,
  aliases: ["leave-s"],
  emoji: "👮",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
     if (message.author.id != owner) {
      return message.channel.send("Limited to the bot owner only!");
    }
    try {
      let id = args[0];
	if (!id) id = message.guild.id;
	const lguild = client.guilds.cache.get(id);
	lguild.leave()
		.then(g => console.log(`Left ${g}`));
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
    }


  },
};
