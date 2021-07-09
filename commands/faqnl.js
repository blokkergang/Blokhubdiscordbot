const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    var serverEmbed = new discord.MessageEmbed()
    .setTitle("**Nederlands** Dit zijn de meest gestelde vragen op een rijtje.")
    .setDescription(" ")
    .setColor("#76c914")
    .addFields(
        {name: "**Wat is het ip van de server?**", value:"de server ip is **play.blokhub.eu** op 1.16.4 t/m 1.17 maar we raden aan voor survival 1.17 en de rest op 1.16.4."},
        {name: "**Is het voor iedereen toegankelijk?**", value:"De server is voor iedereen toegankelijk en iedereen is ook van hartelijk welkom wie je ook bent als je maar aan de regels houd en als het maar gezellig is."},
        {name: "**Wanneer komen er events?**", value:"We proberen minemaal elke maand een event te doen maar dat lukt niet altijd of we hebben gewoon geen ideeën. Als je ideeen hebt laat het zeker achter in #🤔》suggestion-idea en als je event manager wilt worden maak dan een ticket aan in #🧾》ticket."},
        {name: "**Hoe word je mod of een staff rank?**", value:"Je moet dan solliciteren de formulier staat in #📄》apply-channel-to-staff en dan is het afwachten tot dat je een antwoord krijgt van een van de owners."},
        {name: "**Hoe krijg je een rank zoals vip of partner?**", value:"Voor dat moet je een ticket aan maken en daar helpen we je verder en krijg je meer info."},
        {name: "**Hoe krijgen de rank zoals builder of developer?**", value:"Voor dat moet je kijken in #📄》apply-channel-to-staff daar staan de formuleren en dat moet je invullen en dan is het afwachten tot dat je een antwoord krijgt van een van de owners."},
        {name: "**Hoe krijg je de streamer of youtuber rank?**", value:"Voor dat moet je naar #📒》sign-up gaan en dat formuleer in vullen MAAR je moet wel eerst 100 volgers/subs hebben op yt of op twitch."},
    )
return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "faqnl"
}