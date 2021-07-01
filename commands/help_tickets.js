const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    var serverEmbed = new discord.MessageEmbed()
    .setTitle("help commands for tickets")
    .setDescription("Here you can see the commands of the ticket system")
    .setColor("#76c914")
    .addFields(
        {name: "!ticket", value:"Then you create a ticket, Do this in the commands channel!!!"},
        {name: "!close", value:"Then you close the ticket, ps only the staff members can do this!"},
    )
return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "help_ticket"
}