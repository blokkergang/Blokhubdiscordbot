const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{


     var botEmbed = new discord.MessageEmbed()
        .setTitle("Blokhub")
        .setDescription("info")
        .setDescription("Blokhub is the newest server before we had Streamcraftnl but we have grown quite a lot so the owners wanted a new servers with all kinds of new things and better servers and with a custom ip. if you want and you can stream or record on this or whatever and let's get much bigger.")
        .setColor("#76c914")

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "info"
}