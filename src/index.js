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
  const welcomeChannel = member.guild.channels.cache.get(process.env.WELCOME_CHANNEL_ID);
  if (welcomeChannel) {
    const instructions = member.guild.channels.cache.get(process.env.INSTRUCTIONS_CHANNEL_ID);
    const introductions = member.guild.channels.cache.get(process.env.INTRODUCTIONS_CHANNEL_ID);
    welcomeChannel.send(`Greetings, ${member}🙋‍♂️! Welcome to the server! Please read the code of conduct in ${instructions.toString()}! Also, the community would love to know more about you! Introduce yourself with the template in ${introductions.toString()} if you feel comfortable doing so`);
  }
});

client.on('message', commandHandler);
