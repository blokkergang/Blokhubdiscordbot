const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    return message.channel.send("cooming soon");

}

module.exports.help = {
    name: "ip"
}