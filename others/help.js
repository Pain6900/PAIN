const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
  approveemoji,
  denyemoji 
} = require(`../config.json`);

module.exports = {
  name: `help`,
  description: `Gives you a list of all help Commands`,
  aliases: ["h","commands"],
  cooldown: 3,
  edesc: "Type help to get a short preview of all Commands, Type help <COMMANDNAME> to get extended information about this one command!",

  
  execute(message,args,client) {
    //react with approve emoji
    message.react("✅");
     //delete the Command
    message.delete({ timeout: 300 })


    
     
    let commands = message.client.commands.array();
    let arg = message.content.split(" ");
    

    
 
    let helpEmbed = new MessageEmbed()
    .setTitle("HELP MENU 🔰 Commands")
    .addField("Requested By :",`${message.member.user}`)
    .addField('Prefix Information', `Prefix: \`${PREFIX}\`\nYou can also mention ${client.user} to get prefix info.`, false)
    .addField("• INFO", `\`\`\`yml\nName: ->`+ client.user.username +` \`\`\``)
    .addField("• INFO", `\`\`\`yml\nDev: 【亗『PAIN』亗】#4005 \`\`\``)
    .addField("• Important Links", `**[Invite Link](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)\`|\`[Support Server](https://discord.gg/RNcbXMGBJh)\`|\`[Insta](https://www.instagram.com/akt_pain69/)\**`)
.addField(`All Commands are Below `,`**A List of the Commands has also been sent to you as DM**`)
.setFooter( client.user.username +`Type: ${PREFIX}info <Command>  for more information!`)
      .setColor("#F0EAD6");


    
            commands.forEach((cmd) => {
              helpEmbed.addField(
                `**${message.client.prefix}${cmd.name}**`,
                `${cmd.description}`,
                true
              );
            });
          if(!message.guild) {
            if(!args[0]) {message.react(approveemoji);return message.channel.send(helpEmbed);}
            return
            }
            message.channel.send(helpEmbed).then(msg => {
    setTimeout(() => msg.delete(), 30000)})
            message.author.send(helpEmbed)
}
  
}