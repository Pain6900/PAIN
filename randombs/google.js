const { Client, Collection, MessageEmbed } = require(`discord.js`);
const googleIt = require('google-it')
const Discord = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
    name: 'google',
    aliases: ["find"],
    description: 'Googles',
    usage: '?<google or find> <query>',
    execute(message, args, client) {



const embed = new Discord.MessageEmbed()
        .setTitle("Google Search Results")
        .setColor(3426654)
        .setTimestamp()
            

    googleIt({'query': args.join(' ')}).then(results => {
        results.forEach(function(item, index) { 
            embed.addField((index + 1) + ": " + item.title, "<" + item.link + ">");
        });
        
        message.channel.send(embed);
    }).catch(e => {
        // any possible errors that might have occurred (like no Internet connection)
    });



      
    }};