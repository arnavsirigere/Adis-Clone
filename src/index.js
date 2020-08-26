require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const commandHandler = require('./commands/index');

// Keeping the bot alive
const keepAlive = require('../server');
keepAlive();

client.login(process.env.BOT_TOKEN);

client.on('ready', () => console.log('Discord Bot is starting!'));

client.on('guildMemberAdd', (member) => {
  const channel = member.guild.channels.cache.find((ch) => ch.id === process.env.WELCOME_CHANNEL_ID);
  if (channel) {
    channel.send(`Greetings, ${member}🙋‍♂️! Welcome to the server! Please read the code of conduct in #📜instructions! Also, the community would love to know more about you! Introduce yourself with the template in #💖introductions if you feel comfortable doing so`);
  }
});

client.on('message', commandHandler);
