
// Discord.js
var Discord = require("discord.js");

// autoReconnect is enabed
var client = new Discord.Client({autoReconnect: true});


// Here we are adding config file
const config = require("./settings/config.json");


// Set the prefix
let prefix = config.prefix;

// Ready? Set? Go!aha
client.on('ready', () => {

    // set status
  client.user.setStatus("online"," Your Game Here ") // ("status","game","url twitch")
   console.log('Initialization of statue \n')


  console.log("Newston ! The Bot is Online!");
});


client.on("message", msg => {

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
client.login(config.token); // Find your token > https://discordapp.com/developers/applications/me
