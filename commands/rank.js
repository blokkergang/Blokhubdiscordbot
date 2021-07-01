const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    return message.channel.send("If you want a rank, you have to go to **📄》apply-channel-to-staff** and fill in a formula there");

}

module.exports.help = {
    name: "rankinfo"
}