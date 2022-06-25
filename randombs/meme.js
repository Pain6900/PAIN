const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);
const fetch = require("node-fetch");



module.exports = {
  name: "meme",
  description: "This command sends you random memes",
  aliases: ["random meme"],
  cooldown: 2,
  edesc: "Sends random meme",
  async execute(message, args, client) {
    //react with approve emoji
    message.react("✅");
    //delete the Command
    message.delete({ timeout: 300 })
   
    var url = await fetch("https://www.reddit.com/r/memes/random/.json");
    var random = await url.json();

    //send the Hi embed
        message.reply(new MessageEmbed().setColor("#FF00A6").setTitle(`Random Meme | ${random[0].data.children[0].data.title}`)
.setImage(random[0].data.children[0].data.url)        
        .setFooter(client.user.username, client.user.displayAvatarURL())
    .setTimestamp()
                     )
    }
};