const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    var serverEmbed = new discord.MessageEmbed()
    .setTitle("all commands")
    .setDescription("Here you can see all the commands of the bot")
    .setColor("#76c914")
    .addFields(
        {name: "!ip", value:"Here you can see the IP of the server."},
        {name: "!info", value:"Here you can see some info from blokhub"},
        {name: "!rankinfo", value:"In it you will see info if you want a rank"},
        {name: "!social", value:"In it you can see all social media from blokhub or from one of the owners"},
        {name: "!yt", value:"Here you see the yt channel of blokhub."},
        {name: "!help_ticket", value:"Here you can see how to create a ticket."},
        {name: "!suggestion", value:"then you can make a suggestion"},
    )
return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "help"
}