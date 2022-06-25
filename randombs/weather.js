const { Client, Collection, MessageEmbed } = require(`discord.js`);
const weather = require(`weather-js`);
const Discord = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
    name: 'weather',
    aliases: ["w"],
    description: 'shows weather',
    usage: '%weather <place name>',
    execute(message, client) {


    let args = message.content.split(/[ ]+/);
    weather.find({ search: args.slice(1).join(' '), degreeType: 'C' }, function (err, result) { 
        if (err) console.log('Weather CMD error: ' + err);
        if (result === undefined || result.length === 0) {
            message.channel.send({
                embed: {
                    color: 0xff2727,
                    description: `:warning: **${message.author.username}**, please enter a valid location.`,
                    footer: {
                        text: 'API Lantancy is ' + `${Date.now() - message.createdTimestamp}` + ' ms',
                    }
                }
            });
            return;
        }

        var current = result[0].current;
        var location = result[0].location;

        let embed = new Discord.MessageEmbed()
            .setAuthor(`${current.skytext} weather in ${current.observationpoint}`, current.imageUrl)
            .setColor(0xffffff)
            .addField('Timezone', `UTC${location.timezone}`, true)
            .addField('Degree Type', location.degreetype, true)
            .addField('Temperature', `${current.temperature} Degrees`, true)
            .addField('Feels Like', `${current.feelslike} Degrees`, true)
            .addField('Winds', current.winddisplay, true)
            .addField('Humidity', `${current.humidity}%`, true);
        message.channel.send({ embed });
        return message.react("👌"),//delete the Command
    message.delete({ timeout: 300 });
      
    });
}
};