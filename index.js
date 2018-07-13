const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', async () => {
  client.channels.get('465065121287372814').send('<@226906826061512704>');
});

client.login(process.env.BOT_TOKEN);
