const model = require("../../models/prefix.js");
const { Client, Message, MessageEmbed } = require("discord.js");
const color = require("../../config.json").color;
const prefix = require("../../config.json").prefix;

module.exports = {
  name: "setprefix",
  description: `Change prefix per server!`,
  aliases: ["sp"],
  emoji: "🖥️",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const data = await model.findOne({
      GuildID: message.guild.id,
    });

    if (!args[0])
      return message.channel.send("You must provide a **new prefix**!");

    if (args[0].length > 5)
      return message.channel.send(
        "Your new prefix must be under `5` characters!"
      );

    if (data) {
      await model.findOneAndRemove({
        GuildID: message.guild.id,
      });

      message.channel.send(`The new prefix is now **\`${args[0]}\`**`);

      let newData = new model({
        Prefix: args[0],
        GuildID: message.guild.id,
      });
      newData.save();
    } else if (!data) {
      message.channel.send(`The new prefix is now **\`${args[0]}\`**`);

      let newData = new model({
        Prefix: args[0],
        GuildID: message.guild.id,
      });
      newData.save();
    }
  },
};
