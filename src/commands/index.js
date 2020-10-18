const ping = require('./ping');
const help = require('./help');
const giveaway = require('./giveaway');

const prefix = '#';

async function commandHandler(message) {
  let content = message.content;
  if (content.startsWith(prefix)) {
    let command = content.slice(1, content.length);
    if (command == 'ping') {
      ping(message);
    } else if (command == 'invite') {
      await message.channel.send('https://discord.gg/akEfvH9');
    } else if (command == 'help') {
      help(message);
    } else if (command == 'giveaway') {
      giveaway(message);
    } else {
      await message.reply('That command doesnt exist, yet!');
    }
  }
}

module.exports = commandHandler;
