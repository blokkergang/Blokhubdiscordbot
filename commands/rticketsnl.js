const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    var serverEmbed = new discord.MessageEmbed()
    .setTitle("**Nederlands** Info voor tickets.")
    .setDescription("Hier zie je wat in info staan voor de tickets. Doe !ticket in het commands kanaal om een ticket aantemaken.")
    .setColor("#76c914")
    .addField('regel:', 'geen staff taggen', true)
    .addField('regel:', 'geen tags gebruiken', true)
    .addField('regel:', 'geen onnodige tickets maken', true)
	.addFields(
		{ name: 'vragen stellen', value: 'Als je vragen hebt mag je ze zeker stellen in een ticket en dan zullen we het meestal wel beantwoorden.' },
		{ name: 'bug/glitches', value: 'Als je een bug/glitches heb gevonden mag je ze in een ticket achterlaten en dan zullen de devs kijken of het kan gefixst worden.' },
		{ name: 'rank vragen', value: 'Als ze een beplaat rankt wild mag je een ticket aan maken voor meer info.'},
		{ name: 'ideeen', value: 'Als je leuke ideeen hebt maak niet uit voor wat mag je een ticket maken en dan mag je het voorstellen.'},
		{ name: 'unban', value: 'Als je gebant bent of vragen hebt over je ban of van iemand of als je perongelijk gebant bent mag je een ticket aanmaken.'},
		{ name: 'klachten', value: 'Als je iemand wild aanklagen maak niet uit voor wat dan mag je een ticket aanmaken en dan zullen de owners kijken wat er mogenlijk is.'},
		{ name: 'hulp', value: 'Als je hulp bij iets moet helpen of je snapt iets niet dan kan en mag je een ticket aanmaken en dan zullen wij je verder helpen.'},
	)
    .setFooter("Laast geupdate: ")
    .setTimestamp()

    return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "rticketsnl"
}