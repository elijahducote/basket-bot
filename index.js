const Discord = require('discord.js');
const client = new Discord.Client();

bot.on('message', function(message) {
    if (message.content === "<@450035391307710495>") { 
        var interval = setInterval (function () {
            client.channels.get('465065121287372814').send('<@226906826061512704>');
        }, 1 * 300); 
    }
});

client.login(process.env.BOT_TOKEN);
