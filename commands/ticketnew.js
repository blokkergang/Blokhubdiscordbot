const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    const categoryID = "780311502874738718";

    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;
 
    var ticketBestaat = false;
 
    message.guild.channels.cache.forEach(channel => {
 
        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {
            ticketBestaat = true;
 
            message.reply("You have already created a ticket");
 
            return;
        }
 
    });
 
    if (ticketBestaat) return;
 
    var embed = new discord.MessageEmbed()
        .setTitle("Hello " + message.author.username)
        .setFooter("Support channel is being created")
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
                        .setTitle(`Hello, welcome to this ticket ${message.author.username}`)
                        .setDescription("Put your message or question here, please do not tag the support team. See below what you can and cannot ask.")
                        .setFooter("Here you can ask questions, type complaints, help, unban, ideas etc")
                        .setColor("#76c914");

 
                    settedParent.send(embedParent);
 
                }
            ).catch(err => {
                message.channel.send("Something went wrong");
            });
        }
    ).catch(err => {
        message.channel.send("Something went wrong");
    });
}

module.exports.help = {
    name: "ticket"
}