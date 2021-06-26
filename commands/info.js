const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{


     var botEmbed = new discord.MessageEmbed()
        .setTitle("Blokhub")
        .setDescription("info")
        .setDescription("Blokhub is de nieuwste server we hadden hiervoor eerst Streamcraftnl maar we zijn best veel gegroeit dus de owners wouden klompleet een nieuwe servers met vanallerij nieuwe dingen en betere servers en met een custum ip. als je wild en mag mag je hier op streamen of openemen of wat dan ook en laten we nog veel groter worden.")
        .setColor("#76c914")

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "info"
}