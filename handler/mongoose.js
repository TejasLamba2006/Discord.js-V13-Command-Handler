const { mongoString } = require("../config.json");
const mongoose = require("mongoose");

module.exports = () => {
  if (!mongoString)
    return console.log(
      "please provide mongodb connection string"
    );
  
  mongoose.connect(mongoString, {
    useFindAndModify: true,
    useUnifiedTopology: true,
  });
};
