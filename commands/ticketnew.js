const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    const categoryID = "780311502874738718";

    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;
 
    var ticketBestaat = false;
 
    message.guild.channels.cache.forEach(channel => {
 
        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {
            ticketBestaat = true;
 
            message.reply("Je hebt al een ticket aangemaakt");
 
            return;
        }
 
    });
 
    if (ticketBestaat) return;
 
    var embed = new discord.MessageEmbed()
        .setTitle("Hallo " + message.author.username)
        .setFooter("Support kanaal wordt aangemaakt")
        .setColor("#76c914");
 
    message.channel.send(embed);
 
    message.guild.channels.create(userName.toLowerCase() + "-" + userDiscriminator, { type: 'text' }).then(
        (createdChannel) => {
            createdChannel.setParent(categoryID).then(
                (settedParent) => {
 
                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    });
 
                    settedParent.updateOverwrite(message.author.id, {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true
                    });
                
                    settedParent.updateOverwrite(message.guild.roles.cache.find(r => r.name === '🏅 Support team'), {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true,
                        MANAGE_MESSAGES: true 
                    });
 
                    var embedParent = new discord.MessageEmbed()
                        .setTitle(`Hallo, welkom in deze ticket ${message.author.username}`)
                        .setDescription("Zet hier uw bericht of vraag, gelief het supoort team niet te taggen. Zie hier onderaan wat je wel en niet mag vragen.")
                        .setFooter("Hier mag uw vragen stellen, klachten typen, hulp, unban, ideeen ectra")
                        .setColor("#76c914");

 
                    settedParent.send(embedParent);
 
                }
            ).catch(err => {
                message.channel.send("Er is iets misgelopen");
            });
        }
    ).catch(err => {
        message.channel.send("Er is iets misgelopen");
    });
}

module.exports.help = {
    name: "ticket"
}