const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    var serverEmbed = new discord.MessageEmbed()
    .setTitle("help commands voor tickets")
    .setDescription("Hier zie je de commands van de ticket systeem")
    .setColor("#76c914")
    .addFields(
        {name: "!ticket", value:"Dan maak je een ticket aan, Doe dit in het commands kanaal!!!"},
        {name: "!close", value:"Dan sluit je de ticket, ps dit kunnen alleen maar de staff leden!"},
    )
return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "help_ticket"
}