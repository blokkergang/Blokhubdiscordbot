const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

const channel = message.guild.channels.cache.find(ch => ch.name === "test4");

    var serverEmbed = new discord.MessageEmbed()
    .setTitle("These are the most frequently asked questions.")
    .setDescription(" ")
    .setColor("#76c914")
    .addFields(
        {name: "**Whats is the ip from the server?**", value:"the server ip is **play.blokhub.eu** on 1.16+."},
        {name: "**Is it accessible to everyone?**", value:"The server is accessible to everyone and everyone is also very welcome whoever you are as long as you stick to the rules and as long as it's fun."},
        {name: "**When will there be events?**", value:"We try to do an event at least every month, but that doesn't always work or we just don't have any ideas. If you have any ideas, be sure to leave them in #🤔》suggestions-of-ideas and if you want to become an event manager create a ticket in #🧾》ticket."},
        {name: "**How do you become a mod or a staff rank?**", value:"You then have to apply, the form is in 📄》apply-channel-to-staff and then you have to wait until you get an answer from one of the owners."},
        {name: "**How do you get a rank like VIP or partner?**", value:"For that you have to create a ticket in #🧾》ticket and we will help you further and get more info."},
        {name: "**Hoe krijgen de rank zoals builder of developer?**", value:"For that you have to look in 📄》apply-channel-to-staff there are the formulas and you have to fill that in and then you have to wait until you get an answer from one of the owners."},
        {name: "**How to get the rank like builder or developer?**", value:"For that you have to go to #📒》sign up and fill in that formula BUT you must first have 100 followers/subs on yt or on twitch."},
    )
return message.channel.send(serverEmbed);

message.delete();

}

module.exports.help = {
    name: "faq"
}