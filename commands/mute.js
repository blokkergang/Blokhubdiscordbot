const discord = require("discord.js");
var ms = require("ms");

module.exports.run = async(bot, message, args) =>{

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Sorry maar je hebt hier geen permisie voor!");

    var user = message.mentions.user.first(" ");
    if(!user) return message.reply("Gelief een persoon te taggen die je wild warnen!");

    var member;

    try {
        member = await message.guild.members.fetch(user);
    } catch(err){
        member = null;
    }

    if(!member) return message.reply("Die gene die je tagt zit niet in de server!");
    if(member.haspermission("KICK_MEMBERS")) return message.reply("Je kan niet dat persoon muten");

    var rawTime = args[1];
    var time = ms(rawTime);
    if(!time) return message.reply("Je hebt die gene geen tijd gegeven voor een mute, doe dat wel!");

    var reason = args.splice(2).join(" ");
    if(!reason) return message.reply("Gelief ook een reden er bij te zetten!");

    var channel = message.guild.channel.cache.find(c => c.name === "test5");

    var log = new discord.MessageEmbed()
    .setTitle("User Muted")
    .addField("User:", user, true)
    .addField("door:", message.author, true)
    .addField("Verloopt op:", rawTime, true)
    .addField("reden:", reason)
    channel.send(log);

    var embed = new discord.MessageEmbed()
    .setTitle("Je bent gemute!")
    .addField("Verloopt op:", rawTime, true)
    .addField("reden:", reason, true);

    try {
        user.send(embed);
    } catch(err) {
        console.warn(err);
    }

    var role = message.guild.roles.cache.find(r => r.name === "🔕 MUTED");

    member.roles.add(role);

    setTimeout(async() => {
        member.roles.remove(role);
    }, time);

    message.channel.send(`**${user}** is gemute door **${message.author}** voor **${rawTime}**!`);

}

module.exports.help = {
    name: "mute"
}