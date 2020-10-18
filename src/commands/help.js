const { MessageEmbed } = require('discord.js');

async function help(message) {
  const embed = new MessageEmbed()
    .setColor('#2DD881')
    .setTitle('Here are the commands you can use  - ')
    .addField('`' + '#ping' + '`', 'Pong!')
    .addField('`' + '#invite' + '`', 'To get a invite link to the server')
    .addField('`' + '#help' + '`', 'Well, what you just used!')
    .addField('`' + '#giveaway' + '`', 'To randomly pick a member from the server for the giveaway prize! [Admin only]');

  await message.channel.send(embed);
}

module.exports = help;
