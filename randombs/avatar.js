const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `avatar`,
  description: `gets mentioned user's avatar`,
  aliases: ["av"],
  cooldown: 2,
  edesc: "",
  execute(message, args, client) {

let user = message.mentions.users.first();
    if(user)
    {
    //react with approve emoji
    message.react("✅")
     //delete the Command
    message.delete({ timeout: 300 })


      const avatar = user.displayAvatarURL({ dynamic: true, size: 2048});

      
        message.reply(new MessageEmbed()

    .setColor('#0099ff')
    .setTitle(`Here you go :`)                      
    .setImage(avatar)
    .setDescription(`Avatar of ${user}`)
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setTimestamp()
                  );
    }else{

      message.react("❌");
      message.channel.send("Mention user to get Avatar")
      
    }

  }
}
