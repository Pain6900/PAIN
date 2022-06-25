const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);
const fetch = require("node-fetch");



module.exports = {
  name: "qt",
  description: "This command sends you random quote",
  aliases: ["random quote","quote"],
  cooldown: 2,
  edesc: "Sends random quote",
  async execute(message, args, client) {
    //react with approve emoji
    message.react("✅");
    //delete the Command
    message.delete({ timeout: 300 })
   
    var url = await fetch("https://www.reddit.com/r/quotes/random/.json");
    var random = await url.json();

    //send the Hi embed
        message.reply(new MessageEmbed()
        .setColor("#FF00A6")
        .setTitle(`Hope this Motivates You :`) 
        .setDescription(`${random[0].data.children[0].data.title}`)    
        .setFooter(client.user.username, client.user.displayAvatarURL())
    .setTimestamp()
                     )
    }
};