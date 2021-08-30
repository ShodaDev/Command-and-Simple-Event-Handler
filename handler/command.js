const fs = require("fs");
const ascii = require("ascii-table");
let table = new ascii("Cmds");
console.log("This is the offical Command and Module/Event Handler made by Kiro Development / Shoda#1966!".bgBrightCyan.blue);
module.exports = (client) => {
  table.setHeading("  Cmd-Name    ", "    Load    ");
  try{
    fs.readdirSync("./cmds/").forEach((dir) => {
        const commands = fs.readdirSync(`./cmds/${dir}/`).filter( file => file.endsWith(".js"));

        for (let file of commands) {
            let pullfile = require(`../cmds/${dir}/${file}`);

            if (pullfile.name) {
                client.commands.set(pullfile.name, pullfile);
                table.addRow(file, "Ready");
            }

            if (pullfile.aliases && Array.isArray(pullfile.aliases)) pullfile.aliases.forEach(alias => client.aliases.set(alias, pullfile.name));
        }
    });
    console.log(table.toString().rainbow);
    
  }catch (e){
  console.log(e.red);
  }
};

/** 
@EVERYONE

THIS COMMAND HANDLER IS COMPLETLY MADE BY Shoda#1966

ALL RIGHTS GO TO HIM AND CRIME DEVELOPMENT

IF YOU REMOVE THIS TEXT, YOUR CODE WHOULD BE ILLEGAL!

@EVERYONE
**/