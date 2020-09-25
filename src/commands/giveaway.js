function giveaway(message) {
  const { author } = message;
  const user = message.guild.members.resolve(author.id);
  const userRoles = user._roles;
  const adminRole = process.env.ADMIN_ROLE;
  if (!userRoles.includes(adminRole)) {
    message.channel.send("Sorry, you can't run this command!");
    return;
  }
  const members = message.guild.members.cache.array();
  const index = Math.floor(Math.random() * members.length);
  const winner = members[index];
  message.channel.send(`💰 Congratulations on winning the giveaway, ${winner.toString()}! 💰`);
}

module.exports = giveaway;
