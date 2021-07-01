const discord = require("discord.js");

module.exports.run = async(bot, message, arg) =>{

    const channel = message.guild.channels.cache.find(ch => ch.name === "🤔》suggestion-idea");
    if(!channel) return message.reply("channel not found");

    var argsBericht = arg.join(" ");
    if(!argsBericht) return message.reply("Please give a suggestion"); 

    var embed = new discord.MessageEmbed()
         .setTitle("Suggestion/idea")
         .setDescription(argsBericht)
         .setColor("#76c914")

    channel.send(embed).then(async (msg) => {

        await msg.react("✅");
        await msg.react("❌");
        message.delete();

    }).catch(err => {
        console.log(err);
    });

}

module.exports.help = {
    name: "suggestion"
}