const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);


module.exports = {
  name: "purge",
  description: "This command desends messages",
  aliases: ["clear" , "clr"],
  cooldown: 2,
  edesc: "clears/deletes messages",
  async execute(message, args, client) {

    if (message.member.permissions.has('MANAGE_CHANNELS')||message.author.id=="692617937512562729")
    {
    //react with approve emoji
    message.react("✅");
    //delete the Command
    message.delete()
   let arg = message.content.split(" ");
         let messagecount = arg[1];
    let clear = parseInt(messagecount);

      try{
         if(clear<100 && clear >= 1) 
       {
         message.channel.bulkDelete(clear);
         message.channel.send(`⭕ Succesfully cleared ${messagecount} messages!`).then(msg => {
    setTimeout(() => msg.delete(), 1000)
  })
        }else if(messagecount == "all")
       {
         let clrall= 99;
          message.channel.bulkDelete(clrall);
         message.channel.send(`⭕ Succesfully cleared ${clrall} messages!`).then(msg => {
    setTimeout(() => msg.delete(), 1000)
  })
         }else if(clear > 99){
         message.channel.send("Fuck Off You cant delete more than 99 messages PEASANT!").then(msg => {
    setTimeout(() => msg.delete(), 1000)
  })
            }else {
         message.channel.send("Fuck Off You cant delete less than 1 message DUMBFUCK").then(msg => {
    setTimeout(() => msg.delete(), 1000)
  })
                  } 
        
      }catch(error){}



      
    }else{message.react("🚫")
      message.channel.send("Fuck Off You are not worthy to use that ! You PEASANT!").then(msg => {
    setTimeout(() => msg.delete(), 1000)
  })
          }  
  
     }
  };