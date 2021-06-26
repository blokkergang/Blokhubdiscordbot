const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Sorry maar je hebt hier geen permisie voor!");

    var user = message.mentions.user.first();
    if(!user) return message.reply("Gelief een persoon te taggen die je wild warnen!");

    var member;

    try {
        member = await message.guild.members.fetch(user);
    } catch(err){
        member = null;
    }

    if(!member) return message.reply("Die gene die je tagt zit niet in de server!");

    var reason = args.splice(1).join(" ");
    if(!reason) return message.reply("Gelief ook een reden er bij te zetten!");

    var channel = message.guild.channel.cache.find(c => c.name === "test5");

    var log = new discord.MessageEmbed()
    .setTitle("User Warned")
    .addField("User:", user, true)
    .addField("door:", message.author, true)
    .addField("reden:", reason)
    channel.send(log);

    var embed = new discord.MessageEmbed()
    .setTitle("Je bent gewarnd!")
    .setDescription(reason);

    try {
        user.send(embed);
    } catch(err) {
        console.warn(err);
    }

    message.channel.send(`**${user}** is gewarnd door **${message.author}**!`);

}

module.exports.help = {
    name: "warn"
}