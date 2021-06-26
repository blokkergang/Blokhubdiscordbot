const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

const channel = message.guild.channels.cache.find(ch => ch.name === "test4");

    var serverEmbed = new discord.MessageEmbed()
    .setTitle("Dit zijn de meest gestelde vragen op een rijtje.")
    .setDescription(" ")
    .setColor("#76c914")
    .addFields(
        {name: "**Wat is het ip van de server?**", value:"De ip van de server is **play.blokhub.eu** op 1.16+."},
        {name: "**Is het voor iedereen toegankelijk?**", value:"De server is voor iedereen toegankelijk en iedereen is ook van hartelijk welkom wie je ook bent als je maar aan de regels houd en als het maar gezellig is."},
        {name: "**Wanneer komen er events?**", value:"We proberen minemaal elke maand een event te doen maar dat lukt niet altijd of we hebben gewoon geen ideeën. Als je ideeen hebt laat het zeker achter in #🤔》suggesties-of-ideeen en als je event manager wilt worden maak dan een ticket aan in #🧾》ticket."},
        {name: "**Hoe word je mod of een staff rank?**", value:"Je moet dan solliciteren de formulier staat in #📄》solliciteren en dan is het afwachten tot dat je een antwoord krijgt van een van de owners."},
        {name: "**Hoe krijg je een rank zoals vip of partner?**", value:"Voor dat moet je een ticket aan maken in #🧾》ticket  en daar helpen we je verder en krijg je meer info."},
        {name: "**Hoe krijgen de rank zoals builder of developer?**", value:"Voor dat moet je kijken in #📄》solliciteren daar staan de formuleren en dat moet je invullen en dan is het afwachten tot dat je een antwoord krijgt van een van de owners."},
        {name: "**Hoe krijg je de streamer of youtuber rank?**", value:"Voor dat moet je naar #📒》aanmelden gaan en dat formuleer in vullen MAAR je moet wel eerst 100 volgers/subs hebben op yt of op twitch."},
        {name: "**Hoe kan je in een clan of er een maken?**", value:"Je kan altijd een clan joinen met toestemming van de leider van die clan. Maar je kan ook zelf een clan aanvragen bij blokkergang of via een ticket in #🧾》ticket ."},
    )
return message.channel.send(serverEmbed);

message.delete();

}

module.exports.help = {
    name: "faq"
}