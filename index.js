const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

  guildObj.defaultChannel.send("<@226906826061512704>");

});

client.login(process.env.BOT_TOKEN);
