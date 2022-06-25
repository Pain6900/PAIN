const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `ping`,
  description: `Gives you the ping of the Bot`,
  aliases: ["latency"],
  cooldown: 2,
  edesc: "Type this command to see how fast the Bot can response to your messages / commands inputs!",
  execute(message, args, client) {
    //react with approve emoji
    message.react("✅");
     //delete the Command
    message.delete({ timeout: 300 })
    //send the Ping embed
         message.reply(new MessageEmbed()
    .setColor("#F0EAD6")
    .setTitle(":ping_pong:    Pong!   -   " + client.ws.ping + "ms")

     .addField("Requested By :",`${message.member.user}`)             
    .addField("MSG Latency:", `╰-𒆕 ${message.createdTimestamp - message.createdTimestamp}ms`, true)
    .addField("API Latency:", `╰-𒆕 ${Math.round(client.ws.ping)}ms`, true)
    .setFooter("Bots Latency", "http://icons.iconarchive.com/icons/google/noto-emoji-activities/1024/52744-ping-pong-icon.png")
    .setColor("525254")
    .setThumbnail("http://icons.iconarchive.com/icons/google/noto-emoji-activities/1024/52744-ping-pong-icon.png")
                  
                  
                  
  ).then(msg => {
    setTimeout(() => msg.delete(), 10000)});
  }
}
