const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    var serverEmbed = new discord.MessageEmbed()
    .setTitle("discord info")
    .setDescription("this is the official discord server of Blokhub and here you can chat with others or what has to do with blokhub mc server. You can also chat outside of blokhub. Have fun in the server.")
    .setColor("#76c914")
    .addField("You have joined this server on", message.member.joinedAt)
    .addField("Total members (bots included)", message.guild.memberCount);

return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "serverinfo"
}