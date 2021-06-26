const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    var serverEmbed = new discord.MessageEmbed()
    .setTitle("discord info")
    .setDescription("Dit is de officiale discord server van Blokhub en hier mag je chatten met andere of wat temaken heeft met blokhub mc server. Je mag ook wel chatten buiten om blokhub. Veel plezier in de server.")
    .setColor("#76c914")
    .addField("Je bent deze server gejoind op", message.member.joinedAt)
    .addField("Totaal memebers (bots meegetelt)", message.guild.memberCount);

return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "serverinfo"
}