const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
  approveemoji,
  denyemoji 
} = require(`../config.json`);

module.exports = {
  name: `info`,
  description: `Gives you info about a command`,
  aliases: ["i"],
  cooldown: 3,
  edesc: "Type info <COMMANDNAME> to get extended information about the command!",

  
  execute(message,args,client) {
    //react with approve emoji
    message.react("✅");
     //delete the Command
    message.delete({ timeout: 300 })


    
     
    let commands = message.client.commands.array();
    let arg = message.content.split(" ");
    var err = "error";

    if(!arg[1] == "")
    {
      

     //specific command help
commands.forEach((cmd) => {
  
    if(cmd.name == arg[1].toLowerCase()) {
    
         let helpEmbed1 = new MessageEmbed()
    .setTitle("COMMAND INFO 🔰 ")
    .addField(`Command info is given Below `,`Hope it helps`)
    .setFooter( `>> Type: ${PREFIX}help <Command>  for more information!`)
      .setColor("#F0EAD6");


        helpEmbed1.addField(
          `**${message.client.prefix}${cmd.name}**`,          `\`\`\`fix\n${cmd.edesc}\n\`\`\`\n\`${cmd.description}\``
        );
        helpEmbed1.addField(
          `**:notes: Aliases:**`,
          `\`${cmd.aliases}\``
        );
        helpEmbed1.addField(
          `**:wrench: Cooldown:**`,
          `\`${cmd.cooldown}\``
        );
        if(!message.guild) return message.channel.send(helpEmbed1).then(msg => {
    setTimeout(() => msg.delete(), 20000)});
          message.channel.send(helpEmbed1);
      err = "null"
       
    }
    })   
      
      if(err != "null")
     {
       message.channel.send("```404 Not Found !```");
     }
      
  }else message.channel.send("```INVALID USE : Plz provide the command whose info u need !```");
  }
    
           
}
