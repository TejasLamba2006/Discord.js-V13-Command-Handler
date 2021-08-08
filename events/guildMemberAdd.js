const model = require("../models/autorole.js");

module.exports = async (member) => {
  const data = await model
    .findOne({
      GuildID: member.guild.id,
    })
    .catch((err) => console.log(err));

  if (data) {
    let role = data.Role;
    let arole = member.guild.roles.cache.get(role);
    if (role) {
      member.roles.add(arole);
    } else if (!role) {
      return;
    }
  } else if (!data) {
    return;
  }
};
