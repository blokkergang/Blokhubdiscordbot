const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const activeSongs = new Map();


const fs = require("fs");
 
const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands/" , (err, files) =>{

    if(err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Kon geen files vinden");
    }

    jsFiles.forEach((f, i) => {

        var jsFiles = require(`./commands/${f}`);
        console.log(`de file ${f} is geladen`);

        bot.commands.set(jsFiles.help.name, jsFiles);

    })

});


bot.on("guildMemberAdd", member => {
 
    const channel = message.guild.channels.cache.find(ch => ch.name === "welkom-leave");
    if(!channel) return message.reply("kanaal niet gevonden");

    var joinEmbed = new discord.MessageEmbed()
         .setAuthor(`${member.user}`, member.user.displayAvatarURL)
         .setDescription(`Hallo ${member.user.username}, **Welkom op de streamcraft discord server.`)
         .setColor("#76c914")
         .setFooter("Member gejoint")
         .setTimestamp();

     channel.send(joinEmbed);

});


bot.on("guildMemberRemove", async member => {
 
    const channel = message.guild.channels.cache.find(ch => ch.name === "welkom-leave");
    if(!channel) return message.reply("kanaal niet gevonden");

    var leaveEmbed = new discord.MessageEmbed()
         .setAuthor(`${member.user}`, member.user.displayAvatarURL)
         .setDescription(`${member.user.username}, **heeft de streamcraft discord server verlaten.`)
         .setColor("#76c914")
         .setFooter("Member gelaeved")
         .setTimestamp();

     channel.send(leaveEmbed);

});



bot.login(botConfig.token);
 
bot.on("ready", async () => {
 
    console.log(`${bot.user.username} is online.`);
 
    bot.user.setActivity("Cooming soon", { type: "PLAYING" });
 
});
 
 
bot.on("message", async message => {
 
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];

    var arguments = messageArray.slice(1);


    var commands = bot.commands.get(command.slice(prefix.length));

    var options = {
        active: activeSongs
    };

    if(commands) commands.run(bot, message, arguments, options); 

});

bot.login(process.env.token);