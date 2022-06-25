const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);
const imageSearch = require('image-search-google');
    const bot = new imageSearch(process.env.key, process.env.API); 
    

module.exports = {
  name: `img`,
  description: `send image for query`,
  aliases: [""],
  cooldown: 2,
  edesc: "sends image of query",
  execute(message, args, client) {

    let arg = message.content.split(" ");
    
    if(arg.length > 1)
{
    let pg = Math.floor((Math.random() * 10)+1)
    let options = {page:pg}
    
    let image= []
    
    bot.search(args.join(' '), options,).then(images => {
      
      { 
           
        for(let i=0;i<images.length;i++) {
        
        
        image.push({
          label: images[i].url,
          value: `${i}`,
        })
      }
      
    }
      //react with approve emoji
    message.react("✅");
     //delete the Command
    message.delete({ timeout: 300 })

      let img = Math.floor((Math.random() * 10))
      message.channel.send(image[img].label)
})
}
else
      {
        //react with approve emoji
    message.react("✅");
        message.reply(new MessageEmbed().setColor("#F0EAD6").setTitle("You Dingus !")
    .addField("Input what you want to search !","`&img <search query>`")
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setTimestamp()
                  )}
    
    
    

  }
}
