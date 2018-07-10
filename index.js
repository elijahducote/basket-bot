const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', async () => {

  client.channels.get('433451627282956292').send('<@226906826061512704>');

});

client.login(process.env.BOT_TOKEN);
