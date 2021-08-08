const client = require("../index");
const antilinkData = require("../models/antilink.js");
const prefixModel = require("../models/prefix.js");

client.on("messageCreate", async (message) => {
  if (
    message.author.bot ||
    !message.guild ||
    !message.content.toLowerCase().startsWith(client.config.prefix)
  )
    return;
  //anti link
  const antilink = await antilinkData.findOne({
    GuildID: message.guild.id,
  });
  if (antilink) {
    if (
      message.content.match("https://") ||
      message.content.match("discord.gg") ||
      message.content.match("www.")
    ) {
      message.delete();
      message.channel
        .send("No links allowed while anti-link is active!")
        .then((msg) => {
          let time = "2s";
          setTimeout(function () {
            msg.delete();
          }, ms(time));
        });
    }
  }
  //custom prefix
  const cprefix = await prefixModel.findOne(
    {
      GuildID: message.guild.id,
    },
    (error) => {
      if (error) {
        console.log(error);
      }
    }
  );
  
  let PREFIX = cprefix ? cprefix.Prefix : client.config.prefix;
   if (!message.guild.me.permissionsIn(message.channel).has("SEND_MESSAGES"))
    return;
  //cmd run
  const [cmd, ...args] = message.content
    .slice(PREFIX.length)
    .trim()
    .split(" ");

  const command = client.commands.get(cmd.toLowerCase());

  if (!command) return;
  await command.run(client, message, args);
});
