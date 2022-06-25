const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
    name: 'choose',
    aliases: ["pick"],
    description: 'make a decision',
    usage: '?choose <choice1> / <choice2>',
    execute(message, args, client) {

    //react with approve emoji
    message.react("✅");
       //delete the Command
    message.delete({ timeout: 300 })
    
     
      const choice1 = args.join(" ").split("/")[0]
      const choice2 = args.join(" ").split("/")[1]
        let replies = [choice1, choice2];
        if (!choice1)
            return message.channel.send(
                `${
                    message.author.username
                } please specify the choises\nUse \`?commands choice\` for help `
            );
        if (!choice2)
            return message.channel.send(`:x: | You didn't specify choice 2`);
        message.reply(new MessageEmbed()
            .setTitle('Choice picker!')
            .addField(`Choice 1:`, choice1, true)
            .addField(`Choice 2:`, choice2, true)
            .addField(
                `I choose:`,
                `${replies[Math.floor(Math.random() * replies.length)]}`
            )
            .setColor('YELLOW')
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            .setFooter(`requested by ${message.author.username}`)
            .setTimestamp());
      

}
}
