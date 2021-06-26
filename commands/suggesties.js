const discord = require("discord.js");

module.exports.run = async(bot, message, arg) =>{

    const channel = message.guild.channels.cache.find(ch => ch.name === "🤔》suggesties-of-ideeen");
    if(!channel) return message.reply("kanaal niet gevonden");

    var argsBericht = arg.join(" ");
    if(!argsBericht) return message.reply("Gelief een suggestie mee te geven"); 

    var embed = new discord.MessageEmbed()
         .setTitle("Suggestie/ideee")
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
    name: "suggestie"
}