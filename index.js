const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

  function test() {
    client.channels.get('465065121287372814').send('test');
  }
  setInterval(test, 0);

});

client.login(process.env.BOT_TOKEN);
