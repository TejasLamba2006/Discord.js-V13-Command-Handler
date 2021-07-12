const { mongoString } = require("../config.json");
const mongoose = require("mongoose");

module.exports = () => {
  if (!mongoString)
    return console.log(
      "please provide mongodb connection string watch this video for more info => https://youtube.com/pritu"
    );

  mongoose.connect(mongoString, {
    useFindAndModify: true,
    useUnifiedTopology: true,
  });
};
