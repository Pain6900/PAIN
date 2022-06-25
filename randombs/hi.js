const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `hi`,
  description: `says hi`,
  aliases: ["Hello"],
  cooldown: 2,
  edesc: "Says Hi",
  execute(message, args, client) {
    //react with approve emoji
    message.react("✅");
     //delete the Command
    message.delete({ timeout: 300 })
        message.reply(new MessageEmbed().setColor("#F0EAD6").setTitle("😎 Hi ")
    .addField("How you doin ?",`${message.member.user}`)
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setTimestamp()
                  );

  }
}
