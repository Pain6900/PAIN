const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `ban`,
  description: `ban members`,
  aliases: [""],
  cooldown: 2,
  edesc: "ban {user}",
  execute(message, args, client) {

const user = message.mentions.users.first()
   const victim = message.guild.member(user);
    if(victim.id=="983396574497493003")return;
if (message.member.hasPermission("BAN_MEMBERS")||message.author.id=="692617937512562729") {
  
    if (victim) {
      
        try {
          
            victim.ban();
//react with approve emoji
    message.react("✅")
     //delete the Command
    message.delete({ timeout: 300 })


        message.reply(new MessageEmbed()

    .setColor("#F0EAD6")
    .setTitle("BANNED !!")
                      
    .addField("Successfully BANNED : " +victim+ "","Issued by : "+message.author)
                      
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setTimestamp()
                  );


          
        } catch {
            message.react("❌")
          message.delete({ timeout: 300 })
            message.reply("I dont have perms to use that !").then(msg => {
    setTimeout(() => msg.delete(), 10000)
  });
        }
      
    } else {
       message.react("❌")
          message.delete({ timeout: 300 })
            message.reply("Fuck Off Dingus, You need to mention Someone ").then(msg => {
    setTimeout(() => msg.delete(), 10000)
  }); 
          }
}
else {
       message.react("❌")
          message.delete({ timeout: 300 })
            message.reply("Fuck Off You are not worthy to use that ! You PEASANT!"+"You do not have permissions to ban " + victim).then(msg => {
    setTimeout(() => msg.delete(), 10000)
  }); 
          }
    

  }
}





