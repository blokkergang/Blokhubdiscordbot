const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    const categoryID = "780311502874738718";

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Sorry but you don't have permission for this!");
 
    if (message.channel.parentID === categoryID) {
        message.channel.delete();
 
        var embedClose = new discord.MessageEmbed()
            .setTitle("Ticket, " + message.channel.name)
            .setDescription("This ticket is marked **Complete**")
            .setFooter("Ticket Closed")
            .setTimestamp()
            .setColor("#76c914");
 
        var loggingChannel = message.member.guild.channels.cache.find(channel => channel.name === "🔒》ticket-logs");
        if (!loggingChannel) return message.reply("Log channel does not exist!");
 
        loggingChannel.send(embedClose);
    } else {
        message.channel.send("This command can only be done in a ticket channel!")
    }
 
}

module.exports.help = {
    name: "close"
}