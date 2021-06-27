const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    var serverEmbed = new discord.MessageEmbed()
    .setTitle("youtube")
    .setDescription("Dit is de officaile link naar de blokhub youtube kanaal: https://www.youtube.com/channel/UCEY2X_6WbDER9R_fVRvNmzA/about?view_as=subscriber")
    .setColor("#76c914")

return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "yt"
}