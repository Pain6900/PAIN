const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `kill`,
  description: `kills`,
  aliases: ["assault"],
  cooldown: 2,
  edesc: "kills the mentioned user",
  execute(message, args, client) {
    //react with approve emoji
    message.react("✅")
     //delete the Command
    message.delete({ timeout: 300 })

let victim = message.mentions.users.first();
		if (!victim) message.reply('Mention someone to Kill');
		else {
			if (victim.id == '692617937512562729') {
				message.reply({content: 'kings never die!!!', allowedMentions: { repliedUser: false }});
			} else {
				let replies = [
					`**${victim.username}** has been shot`,
					`**${victim.username}** has been stabbed`,
					`**${victim.username}** has been drowned`,
					`**${victim.username}** has been electrified`,
					`A goose honked at **${victim.username}** to death`,
					`Some psychopath zapped **${victim.username}** with his laser eyes`,
					`**${victim.username}** ate a poisonous potato`,
					`**${victim.username}** died from slowmode being to long`,
					`**${victim.username}** was run over by car`,
					`**${victim.username}** was pushed in lava`,
					`Someone named Joe was found chewing on ${victim}'s leg`,
					`**${victim.username}** got drunk and fell in the water`,
					`**${victim.username}** was hacked by an Oreo`,
					`An alien named MEE6 abducted **${victim}** in their sleep`,
					`**${victim.username}** ate too many potatoes`,
					`**${victim.username}** experienced kinetic energy`,
					`**${victim.username}** hit the ground too hard`,
					`**${victim.username}** fell from a high place.`,
					`**${victim.username}** was impaled on a stalagmite`,
					`**${victim.username}** was squashed by a falling anvil`,
					`**${victim.username}** went up in flames`,
          `**${victim.username}** kills u first`
				];
				if (victim == message.author.id) {
					return message.reply("You can't kill yourself lol!");
				} else {
					message.channel.send(`${replies[Math.floor(Math.random() * replies.length)]}`
					);
				}
			}
		}

  }
}
