
// Discord.js
var Discord = require("discord.js");


// Here we are adding config file
const config = require("./settings/config.json");

// autoReconnect is enabed
var bot = new Discord.Client({autoReconnect: true});


// Set the prefix
let prefix = config.prefix;

// Ready? Set? Go!aha
bot.on('ready', () => {

    // set status
  bot.user.setStatus("online"," Your Game Here ") // ("status","game","url twitch")
   console.log('Initialization of statue \n')


  console.log("Newston ! The Bot is Online!");
});


bot.on("message", msg => {

      // Command /help
     if (msg.content.startsWith(prefix + "help")) {
      msg.channel.sendMessage("```List of commands : \n\n /version  | Version  \n /help | All Commands  \n    ```");
    }
    // Command /version
    if (msg.content.startsWith(prefix + "version")) {
      msg.channel.sendMessage("Bot Discord Basic - Version 1.0")
    }

});




//Login to your bot edit the config file on settings folder
bot.login(config.token); // Find your token > https://discordapp.com/developers/applications/me
