const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("c!info")
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

if(cmd === `${prefix}serverinfo`){

let sicon = message.guild.displayAvatarURL;
let serverembed = new Discord.MessageEmbed()
.setDescription("Server Information")
.setColor("#66ffff")
.setThumbnail(sicon)
.addField("Server Name", message.guild.name)
.addField("Total Members", message.guild.memberCount);

  return message.channel.send(serverembed);
}



if(cmd === `${prefix}info`){

    let bicon = bot.user.displayAvatarURL();
    let botembed = new Discord.MessageEmbed()
    .setDescription("Bot Information")
    .setColor("#66ffff")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)

    return message.channel.send(botembed);
  }
});

bot.login(tokenfile.token);
