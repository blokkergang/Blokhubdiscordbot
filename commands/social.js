const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    var serverEmbed = new discord.MessageEmbed()
    .setTitle("Social media")
    .setDescription("dit zijn de social media's van Blokhub/owner(s).")
    .setColor("#76c914")
    .addFields(
        {name: "yt", value:"https://www.youtube.com/channel/UCEY2X_6WbDER9R_fVRvNmzA/about?view_as=subscriber"},
        {name: "insta", value:"https://www.instagram.com/streamcraftnl/"},
        {name: "website", value:"cooming soon"},
        {name: "twitch (owner)", value:"https://www.twitch.tv/blokkergang1"},
    )
return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "social"
}