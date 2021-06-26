const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    const categoryID = "780311502874738718";

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Sorry maar je hebt hier geen permisie voor!");
 
    if (message.channel.parentID === categoryID) {
        message.channel.delete();
 
        var embedClose = new discord.MessageEmbed()
            .setTitle("Ticket, " + message.channel.name)
            .setDescription("Deze ticket is gemarkeerd als **Compleet**")
            .setFooter("Ticket Gesloten")
            .setTimestamp()
            .setColor("#76c914");
 
        var loggingChannel = message.member.guild.channels.cache.find(channel => channel.name === "🔒》ticket-logs");
        if (!loggingChannel) return message.reply("Log kanaal bestaat niet!");
 
        loggingChannel.send(embedClose);
    } else {
        message.channel.send("Deze command kan alleen in een ticket kanaal gedaan worden!")
    }
 
}

module.exports.help = {
    name: "close"
}