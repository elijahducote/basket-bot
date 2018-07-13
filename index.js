const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  
  setInterval(mention, 300);
  function mention() {
    client.channels.get('433451627282956292').send('<@226906826061512704>');
  }
  setInterval(test, 300);
  function test() {
    client.channels.get('465065121287372814').send('test');
  }

});

client.login(process.env.BOT_TOKEN);
