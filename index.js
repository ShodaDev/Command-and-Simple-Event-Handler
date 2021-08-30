//require some modules
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const config = require("./config.json");
const colors = require("colors");

//login in to the bot
client.login(config.token);

//clear Collections
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync("./cmds");

//import the events/modules
const events = fs.readdirSync("./events/");
events.forEach(eventfile => { 
  require(`./events/${eventfile}`)(client);
});
console.log("All events/modules loaded!".green)

//import the handler
client.handler = ["command"];

//require the handler
client.handler.forEach(hand => {
require(`./handler/${hand}`)(client);
});

//if the bot is online, log smth
client.on("ready", () => {
    const readytext = `The Client: ${client.user.tag} is now online!`
    console.log(readytext.green);
})


/** 
@EVERYONE

THIS COMMAND HANDLER IS COMPLETLY MADE BY Shoda#1966

ALL RIGHTS GO TO HIM AND CRIME DEVELOPMENT

IF YOU REMOVE THIS TEXT, YOUR CODE WHOULD BE ILLEGAL!

@EVERYONE
**/