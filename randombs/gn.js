const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);
const imageSearch = require('image-search-google');
    const bot = new imageSearch(process.env.key, process.env.API); 
    

module.exports = {
  name: `gn`,
  description: `says gn`,
  aliases: [""],
  cooldown: 2,
  edesc: "Says Gn",
  execute(message, args, client) {

    
{
    let pg = Math.floor((Math.random() * 10)+1)
    let options = {page:pg}
    
    let image= []
    
    bot.search("good night", options,).then(images => {
      
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
      
       message.reply(new MessageEmbed()
                     .setColor("#F0EAD6")
                     .setTitle("GOOD NIGHT")
    .addField("Sleep well 🌙","@everyone")
    .setImage((image[img].label))
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setTimestamp()
                  )


      
})
}
  }
}
