const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./settings/config.json");

// Set the prefix
let prefix = config.prefix;

client.on('ready', () => {

    // set status
  client.user.setStatus("online",´${config.game}´) // Change from settings/config.json
   console.log('Your Bot is Online')
});
  
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }
});

//Login to your bot edit the config file on settings folder
client.login(config.token); // Find your token > https://discordapp.com/developers/applications/me
