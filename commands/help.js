const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    var serverEmbed = new discord.MessageEmbed()
    .setTitle("alle commands")
    .setDescription("Hier zie je alle commands van de bot")
    .setColor("#76c914")
    .addFields(
        {name: "!ip", value:"Hier zie de ip van de server."},
        {name: "!info", value:"Hier in zie je wat info van blokhub"},
        {name: "!rank", value:"Daarin zie je info staan als je een rank wild"},
        {name: "!social", value:"Daarin zie je alle social media van blokhub of van een van de owners"},
        {name: "!yt", value:"Hierin zie je het yt kanaal van blokhub."},
        {name: "!help_ticket", value:"Hier zie je hoe je een ticket aanmaakt."},
    )
return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "help"
}