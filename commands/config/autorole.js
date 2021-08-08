const model = require("../../models/autorole.js");
const { Client, Message, MessageEmbed } = require("discord.js");
const color = require("../../config.json").color;
const prefix = require("../../config.json").prefix;

module.exports = {
  name: "autorole",
  description: `Change autorole per server!`,
  aliases: ["ar", "joinrole"],
  emoji: "🖥️",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    if (!args[0]) {
      return message.channel.send(`\`Usage: ${prefix}autorole <@role|off>\``)
    }
    if (message.mentions.roles.first()) {
      const data = await model.findOne({
        GuildID: message.guild.id
      });

      if (data) {
        await model.findOneAndRemove({
          GuildID: message.guild.id
        });

        message.channel.send(`Autorole is active and role set to ${message.mentions.roles.first()}`);

        let newData = new model({
          Role: message.mentions.roles.first().id,
          GuildID: message.guild.id
        });
        newData.save();
      } else if (!data) {
        message.channel.send(`Autorole is active and role set to ${message.mentions.roles.first()}`);

        let newData = new model({
          Role: message.mentions.roles.first().id,
          GuildID: message.guild.id
        });
        newData.save();
      }
    } else if (args[0] === "off") {
      const data2 = await model.findOne({
        GuildID: message.guild.id
      });

      if (data2) {
        await model.findOneAndRemove({
          GuildID: message.guild.id
        });

        return message.channel.send(`Autorole has been turned off!`);

      } else if (!data2) {
        return message.channel.send(`Autorole isn't setup!`)
      }
    }
  },
};
