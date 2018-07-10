const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  
var interval = setInterval (function () {
            client.channels.get('433451627282956292').send('<@226906826061512704>');
            .catch(console.error);
}, 1 * 100); 

});

client.login(process.env.BOT_TOKEN);
