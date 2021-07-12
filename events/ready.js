const client = require("../index");
const config = require("../config.json");
// const prefix = require("../config.json");

const statuses = ["Activty1", "Activty2", "Activty3", "Activty4", "Activty5"];

client.on("ready", () => {
  client.user.setActivity(`${config.prefix}help`);
  console.log(`Logged on as ${client.user.username}`);
});
