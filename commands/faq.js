const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

const channel = message.guild.channels.cache.find(ch => ch.name === "test4");

    var serverEmbed = new discord.MessageEmbed()
    .setTitle("Dit zijn de meest gestelde vragen op een rijtje.")
    .setDescription(" ")
    .setColor("#76c914")
    .addFields(
        {name: "**Whats is the ip from the server?**", value:"the server ip is **play.blokhub.eu** on 1.16+."},
        {name: "**Is it accessible to everyone?**", value:"The server is accessible to everyone and everyone is also very welcome whoever you are as long as you stick to the rules and as long as it's fun."},
        {name: "**When will there be events?**", value:"We proberen minemaal elke maand een event te doen maar dat lukt niet altijd of we hebben gewoon geen ideeën. Als je ideeen hebt laat het zeker achter in #🤔》suggesties-of-ideeen en als je event manager wilt worden maak dan een ticket aan in #🧾》ticket."},
        {name: "**How do you become a mod or a staff rank?**", value:"Je moet dan solliciteren de formulier staat in #📄》solliciteren en dan is het afwachten tot dat je een antwoord krijgt van een van de owners."},
        {name: "**How do you get a rank like VIP or partner?**", value:"Voor dat moet je een ticket aan maken in #🧾》ticket  en daar helpen we je verder en krijg je meer info."},
        {name: "**Hoe krijgen de rank zoals builder of developer?**", value:"Voor dat moet je kijken in #📄》solliciteren daar staan de formuleren en dat moet je invullen en dan is het afwachten tot dat je een antwoord krijgt van een van de owners."},
        {name: "**How to get the rank like builder or developer?**", value:"Voor dat moet je naar #📒》aanmelden gaan en dat formuleer in vullen MAAR je moet wel eerst 100 volgers/subs hebben op yt of op twitch."},
    )
return message.channel.send(serverEmbed);

message.delete();

}

module.exports.help = {
    name: "faq"
}