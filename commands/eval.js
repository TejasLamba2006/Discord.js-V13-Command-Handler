const { Client, Message, MessageEmbed } = require("discord.js");
const color = require("../../config.json").color;
const owner = require("../../config.json").owner;


module.exports = {
  name: "eval",
  description: `Just eval!`,
  aliases: ["e"],
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
      const code = args.join(" ");
      if (!code) {
        return message.channel.send("What do you want to evaluate?");
      }
      let evaled = eval(code);

      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

      let embed = new MessageEmbed()
        .setAuthor("Eval", message.author.avatarURL())
        .addField("Input", `\`\`\`${code}\`\`\``)
        .addField("Output", `\`\`\`${evaled}\`\`\``)
        .setColor("GREEN");

      message.channel.send({ embeds: [embed] });
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
    }


  },
};
