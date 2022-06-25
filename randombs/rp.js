const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);
const fetch = require("node-fetch");



module.exports = {
  name: "rp",
  description: "This command sends you random p***",
  aliases: ["random p***"],
  cooldown: 2,
  edesc: "Sends random porn",
  async execute(message, args, client) {
     if(!message.channel.nsfw) {
 return message.reply("This channel dosen't support nsfw content")
 
 } else {

     //if(message.author.id === "692617937512562729") 
   // {
    //react with approve emoji
    message.react("✅");
    //delete the Command
    message.delete({ timeout: 300 })
   
    var url = await fetch("https://www.reddit.com/r/Porn/random/.json");
    var random = await url.json();

    //send the Hi embed
        message.reply(new MessageEmbed().setColor("#FF00A6").setTitle(`Random Porn | ${random[0].data.children[0].data.title}`)
.setImage(random[0].data.children[0].data.url)        
        .setFooter(client.user.username, client.user.displayAvatarURL())
    .setTimestamp()
                     ).then(msg => {
    setTimeout(() => msg.delete(), 10000)})
      //}else message.reply("LOL You thought you can use that ! Peasant !!!");
    }}
};