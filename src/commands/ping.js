async function ping(message) {
  const ping = await message.channel.send('Pong!');
  message.react('🏓');
  ping.edit(`Pong! Latency is \`${ping.createdTimestamp - message.createdTimestamp}ms\`. 💓`);
}

module.exports = ping;
