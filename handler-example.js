const { Client, Message, MessageEmbed } = require("discord.js");
const color = require("../../config.json").color;

module.exports = {
  name: "cmd name",
  description: `cmd description`,
  aliases: ["cmd alises"],
  emoji: "cmd emoji",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
   //code
  },
};
