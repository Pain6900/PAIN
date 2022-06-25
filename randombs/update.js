const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `update`,
  description: `update`,
  aliases: ["Hello"],
  cooldown: 2,
  edesc: "Says Hi",
  execute(message, args, client) {
    //react with approve emoji
    message.react("✅");
    //send the Hi embed
     //delete the Command
    message.delete({ timeout: 300 })

client.guilds.cache.forEach(g => g.channels.cache.first().send("Hi"))

  }
}
