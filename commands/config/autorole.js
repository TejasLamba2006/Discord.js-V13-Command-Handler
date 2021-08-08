const model = require("../../models/autorole.js");
const { Client, Message, MessageEmbed } = require("discord.js");
const color = require("../../config.json").color;
const prefix = require("../../config.json").prefix;

module.exports = {
  name: "autorole",
  description: `Change autorole per server!`,
  aliases: ["ar"],
  emoji: "🖥️",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    if (!args[0]) {
      return message.channel.send(
        `Usage: \`${prefix}antilink <on|off>\``
      );
    }
    if (args[0] === "On" || args[0] === "on") {
      const data = await model.findOne({
        GuildID: message.guild.id,
      });

      if (data) {
        await model.findOneAndRemove({
          GuildID: message.guild.id,
        });

        message.channel.send(`Antilink is now active!`);

        let newData = new model({
          GuildID: message.guild.id,
        });
        newData.save();
      } else if (!data) {
        message.channel.send(`Antilink is now active`);

        let newData = new model({
          GuildID: message.guild.id,
        });
        newData.save();
      }
    } else if (args[0] === "off" || args[0] === "Off") {
      const data2 = await model.findOne({
        GuildID: message.guild.id,
      });

      if (data2) {
        await model.findOneAndRemove({
          GuildID: message.guild.id,
        });

        return message.channel.send(`Antilink has been turned off!`);
      } else if (!data2) {
        return message.channel.send(`Antilink isn't setup!`);
      }
    }
  },
};
