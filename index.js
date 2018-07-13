const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  
  setInterval(mention, 300);
  function mention() {
    client.channels.get('433451627282956292').send('<@226906826061512704>');
  }

});

client.login(process.env.BOT_TOKEN);
