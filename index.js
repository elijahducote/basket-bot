const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  
function resetBot() {
     client.channels.get('433451627282956292').send('<@226906826061512704>');
    .then(() => client.destroy())
    .then(() => client.login(process.env.BOT_TOKEN));
}

resetBot();

});

client.login(process.env.BOT_TOKEN);
