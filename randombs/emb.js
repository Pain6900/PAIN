const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `wvhelp`,
  description: `sends wick verification help embed`,
  aliases: [""],
  cooldown: 2,
  edesc: "",
  execute(message, args, client) {
    //react with approve emoji
    message.react("✅");
    //send the Hi embed
     //delete the Command
    message.delete({ timeout: 300 })

    let member = message.mentions.users.first();
    if(member){
    
        member.send(new MessageEmbed().setTitle('Verification Help !')
    .addField("<:wick:973254996374196236> WICK <:BOT:973462172464209971>","ㅤ")
    .addField("\nㅤ<:help:973455048040394762> Cant see channels ?? Need Help ??", `\nㅤㅤㅤㅤ<:alarm:973255058147917844> To access —͟͞͞𒁷 ✦ HOLLOWs ✦ you need to pass the **VERIFICATION**<:verification:973454237507932180> first. `)                
     .addField("Verification Help  : ","\nㅤㅤ<:warr:973254876370989086>  Please click the green Verify button. \nㅤㅤ<:warr:973254876370989086> Check for DM sent by <:wick:973254996374196236>Wick. \nㅤㅤ<:warr:973254876370989086>Reply to the DM with the corresponding text as seen in the Captcha sent by <:wick:973254996374196236>Wick. \nㅤㅤ<:warr:973254876370989086> ENJOY !!!")                      
    .setThumbnail('https://www.linkpicture.com/q/Untitle.png')
    .setTimestamp()
    .setFooter(client.user.username, client.user.displayAvatarURL())
                  );

  }else{

        message.reply(new MessageEmbed().setTitle('Verification Help !')
    .addField("<:wick:973254996374196236> WICK <:BOT:973462172464209971>","ㅤ")
    .addField("\nㅤ<:help:973455048040394762> Cant see channels ?? Need Help ??", `\nㅤㅤㅤㅤ<:alarm:973255058147917844> To access ${message.channel.guild.name} you need to pass the **VERIFICATION**<:verification:973454237507932180> first. `)                
     .addField("Verification Help  : ","\nㅤㅤ<:warr:973254876370989086>  Please click the green Verify button. \nㅤㅤ<:warr:973254876370989086> Check for DM sent by <:wick:973254996374196236>Wick. \nㅤㅤ<:warr:973254876370989086>Reply to the DM with the corresponding text as seen in the Captcha sent by <:wick:973254996374196236>Wick. \nㅤㅤ<:warr:973254876370989086> ENJOY !!!")                      
    .setThumbnail('https://www.linkpicture.com/q/Untitle.png')
    .setTimestamp()
    .setFooter(client.user.username, client.user.displayAvatarURL())
                  );
  }
  
  }
}
