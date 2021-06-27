const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    return message.channel.send("Als je een rank wild dan moet je naar **#solliciteren** en daar een formuleer invullen");

}

module.exports.help = {
    name: "rankinfo"
}