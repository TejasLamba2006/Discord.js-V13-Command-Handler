const client = require("../index");
const config = require("../config.json");
// const prefix = require("../config.json");
const mongoose = require("mongoose");

const statuses = ["Activty1", "Activty2", "Activty3", "Activty4", "Activty5"];

client.on("ready", () => {
  client.user.setActivity(`${config.prefix}help`);
  console.log(`Logged on as ${client.user.username}`);
});

//mongo DB conection
mongoose
    .connect(config.mongoString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(
      console.log(
        chalk.bgGreenBright.black(
          ` ${client.user.username} connecting to Mongo DB `
        )
      )
    )
    .catch((err) =>
      console.log(
        chalk.bgRedBright.black(
          ` ${client.user.username} could not connect to mongo DB `
        )
      )
    );
