////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

//requirements

const Discord = require(`discord.js`);
const { Client, Collection, MessageEmbed, MessageAttachment } = require(`discord.js`);
const { readdirSync } = require(`fs`);
const { join } = require(`path`);
const db = require('quick.db');
const { keep_alive } = require("./keep_alive");
const {  PREFIX, AVATARURL, BOTNAME, } = require(`./config.json`);
const figlet = require("figlet");
const client = new Client({
  disableMentions: ``,
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
  intents: ["GUILDS", "GUILD_MESSAGES" , "GUILD_MEMBERS"] ,
  restTimeOffset: 0
  });

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

//client settings

client.login(process.env.token);
client.commands = new Collection();
client.prefix = PREFIX;
client.queue = new Map();
const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);

////////////////////////////////////////////////////////////

//on ready


  client.on(`ready`, () => {
  setInterval(() => {
    let member;
    client.guilds.cache.forEach(async guild => {
      await delay(15);
      member = await client.guilds.cache.get(guild.id).members.cache.get(client.user.id)
      //if not connected
      if (!member.voice.channel)
        return;
      //if alone 
      if (member.voice.channel.members.size === 1) { return member.voice.channel.leave(); }
    });
////////////////////////////////////////////////////////////
    //set activity 
    client.user.setActivity(`for ${PREFIX}help`,
      {
        type: "WATCHING",
      });
  }, (5000));
////////////////////////////////////////////////////////////
  //console log
  figlet.text(//${client.user.username}
    `O  x  PAIN`, function(err, data) {
    if (err) {
      console.log('Something went wrong');
      console.dir(err);
    }
    console.log(`══════════════════════════════════════════════════════════════════`);
    console.log(data)
    console.log(`══════════════════════════════════════════════════════════════════`);
    console.log("【 ⭕✘-ᴘᴀɪɴ 】Is Online And Fully Functional")
    console.log(`══════════════════════════════════════════════════════════════════`);

      console.log(`[Bot is online | Node: ${process.version} | Discord.js: ${Discord.version}]\nConnected as: ${client.user.username} (ID: ${client.user.id})`);
      console.log(`Currently watching ${client.guilds.cache.size} Servers`);
      console.log(`══════════════════════════════════════════════════════════════════`);
    })});



////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

//warn/error

client.on(`warn`, (info) => console.log(info));
client.on(`error`, console.error);

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

//commandfiles

commandFiles = readdirSync(join(__dirname, `Music`)).filter((file) => file.endsWith(`.js`));
for (const file of commandFiles) {
  const command = require(join(__dirname, `Music`, `${file}`));
  client.commands.set(command.name, command);
}
commandFiles = readdirSync(join(__dirname, `others`)).filter((file) => file.endsWith(`.js`));
for (const file of commandFiles) {
  const command = require(join(__dirname, `others`, `${file}`));
  client.commands.set(command.name, command);
}
commandFiles = readdirSync(join(__dirname, `randombs`)).filter((file) => file.endsWith(`.js`));
for (const file of commandFiles) {
  const command = require(join(__dirname, `randombs`, `${file}`));
  client.commands.set(command.name, command);
}


////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

//guildmember add

client.on(`guildMemberAdd`, async (member) => 
    {
     if(member.guild == "952570101784281139")
        
    {const ver = await new Discord.MessageEmbed()
    .setTitle('Verification Help !')
    .addField("<:wick:973254996374196236> WICK <:BOT:973462172464209971>","ㅤ")
    .addField("\nㅤ<:help:973455048040394762> Cant see channels ?? Need Help ??", `\nㅤㅤㅤㅤ<:alarm:973255058147917844> To access —͟͞͞𒁷 ✦ HOLLOWs ✦ you need to pass the **VERIFICATION**<:verification:973454237507932180> first. `)                
     .addField("Verification Help  : ","\nㅤㅤ<:warr:973254876370989086>  Please click the green Verify button. \nㅤㅤ<:warr:973254876370989086> Check for DM sent by <:wick:973254996374196236>Wick. \nㅤㅤ<:warr:973254876370989086>Reply to the DM with the corresponding text as seen in the Captcha sent by <:wick:973254996374196236>Wick. \nㅤㅤ<:warr:973254876370989086> ENJOY !!!")                      
    .setThumbnail('https://www.linkpicture.com/q/Untitle.png')
    .setTimestamp()
    .setFooter(client.user.username, client.user.displayAvatarURL())
  member.send(ver); }// dm the member
});


////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

//Add commands and shit u want here

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////


//message commands

  client.on(`message`, async (message) => {
  if (message.author.bot) return;

////////////////////////////////////////////////////////////

  //Getting prefix
  let prefix = PREFIX
  
////////////////////////////////////////////////////////////
         
          
//information message when the bot has been tagged
  if (message.content.includes(client.user.id)) {
    message.reply(new Discord.MessageEmbed().setColor("#F0EAD6").setAuthor(`${message.author.username}, My Prefix is ${prefix}, to get started; type ${prefix}help`, message.author.displayAvatarURL({ dynamic: true })));
  }

////////////////////////////////////////////////////////////


  //if dev is tagged
  if (message.content.includes('692617937512562729')) {
    message.react("<a:crn:977990175537905704>");
  }


////////////////////////////////////////////////////////////


  
////////////////////////////////////////////////////////////



  //info to be sent on %about
  if (message.content.toLowerCase().startsWith(`${prefix}about`)) {

    const embed = new Discord.MessageEmbed()
      .setColor("#FFFF00")
      .setTitle("Ayo wassup?")
      .setDescription(`${message.member.user} \nHere's all the information I can provide you about me ❤️`)
      .addField("• INFO", `\`\`\`yml\nName: ->`+ client.user.username +` \`\`\``)      
      .addField("• DEV", `\`\`\`yml\nName of Dev: -͟͟͞⍟・🜲 PAiN ❯❯#4005 \`\`\``)      
      .addField("• Important Links", `**[Invite Link](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)\`|\`[Support Server](https://discord.gg/RNcbXMGBJh)\`|\`[Insta](https://www.instagram.com/akt_pain69/)\**`)
     
      .addField("Still confused ?",`>> Use \`${PREFIX}help\` For information about my Commands !`)
      .addField("Currently watching" ,`${client.guilds.cache.size} Servers`)      
      .setTimestamp()
      .setFooter(client.user.username, client.user.displayAvatarURL())
    
    //delete the Command
    message.delete({ timeout: 300 })
    //send the Message
    message.channel.send(embed)
  }

////////////////////////////////////////////////////////////

  
  //command Handler DO NOT TOUCH
  const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
  if (!prefixRegex.test(message.content)) return;
  const [, matchedPrefix] = message.content.match(prefixRegex);
  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command =
    client.commands.get(commandName) ||
    client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
  if (!command) return;
  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Collection());
  }
  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 1) * 1000;
  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.reply(
        new MessageEmbed().setColor("#F0EAD6")
          .setTitle(`:x: Please wait \`${timeLeft.toFixed(1)} seconds\` before reusing the \`${prefix}${command.name}\`!`)
      );
    }
  }
  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
  try {
    command.execute(message, args, client);
  } catch (error) {
    console.error(error);
    message.reply(new MessageEmbed().setColor("#F0EAD6")
      .setTitle(`:x: There was an error executing that command.`)
      .addField("Please join support server for help",`[Support Server](https://discord.gg/9pFuwmh562)`)
                 ).catch(console.error);
  }


});


////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

//delay

function delay(delayInms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}


////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////


//ERROR HANDLING

const fs = require('fs');

let gap = "\n\n=================================================================================\n\n"

process.on("unhandledRejection", (reason, p) => {
  fs.appendFileSync('./error.txt',"\n"+" [Error_Handling] :: Unhandled Rejection/Catch"+"\n"+reason+"\n"+p+gap)
});
process.on("uncaughtException", (err, origin) => {
  fs.appendFileSync('./error.txt',"\n"+" [Error_Handling] :: Uncaught Exception/Catch"+"\n"+err+"\n"+origin+gap)
});
process.on("uncaughtExceptionMonitor", (err, origin) => {
  fs.appendFileSync('./error.txt',"\n"+" [Error_Handling] :: Uncaught Exception/Catch (MONITOR)"+"\n"+err+"\n"+origin+gap)
});
process.on("multipleResolves", (type, promise, reason) => {
  fs.appendFileSync('./error.txt',"\n"+" [Error_Handling] :: Multiple Resolves"+"\n"+type+"\n"+promise+"\n"+reason+gap)
});
process.on("multipleResolves", (type, promise, reason) => {
    if (reason.toLocaleString() === "Error: Cannot perform IP discovery - socket closed") return;
});

////////////////////////////////////////////////////////////


client.on('guildCreate', guildadded => {
  fs.appendFileSync('./servers.txt',"\n"+'🌸 Added to server : '+guildadded.name+gap) 

let e = guildadded.systemChannelID
client.channels.cache.get(e).send("hi")
  
});

////////////////////////////////////////////////////////////


client.on('guildDelete', guildremoved => { 
  fs.appendFileSync('./servers.txt',"\n"+'🥀 Removed from server : '+guildremoved.name+gap)
});

////////////////////////////////////////////////////////////

///client.on("ready", () => { const Guilds = client.guilds.cache.map(guild => guild.name); fs.appendFileSync('./servers.txt', ""+Guilds) });


////////////////////////////////////////////////////////////
//let i =1
//client.on("ready", () => {client.guilds.cache.forEach((guild) => {i=i+1;setTimeout(() => {ch = guild.channels.cache.find(channel => channel.type === 'text');ch.createInvite().then(inv => fs.appendFileSync('./s_i.txt', "\n"+`${guild.name} \n       ╰───・𒁷 ${inv.url}`+"\n")) }, i *1000);});});
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////


