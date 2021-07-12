const { Client, Message, MessageEmbed } = require("discord.js");
const color = require("../../config.json").color;

module.exports = {
  name: "ping",
  description: `Check client's ping!`,
  aliases: [""],
  emoji: "🏓",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const msg = new MessageEmbed()
      .setDescription(`Client Latency: ${client.ws.ping}ws`)
      .setColor(`${color}`)
      .setTitle("Pinged Successfully 🏓");
    message.channel.send({ embeds: [msg] });
  },
};
