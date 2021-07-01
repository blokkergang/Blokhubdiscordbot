const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    var serverEmbed = new discord.MessageEmbed()
    .setTitle("Info for tickets.")
    .setDescription("Here you can see what information is for the tickets. Put !ticket in the commands channel to create a ticket.")
    .setColor("#76c914")
    .addField('rule:', 'dont tag staff', true)
    .addField('rule:', 'dont use tags', true)
    .addField('rule:', 'dont make unnecessary tickets', true)
	.addFields(
		{ name: 'asking questions', value: 'If you have any questions, you can certainly ask them in a ticket and we will usually answer them.' },
		{ name: 'bug/glitches', value: 'If you found a bug/glitches you can leave them in a ticket and the devs will see if it can be fixed.' },
		{ name: 'rank questions', value: 'If she wants a certain rank you can create a ticket for more info.'},
		{ name: 'ideas', value: 'If you have great ideas, it doesnt matter what you can make a ticket for and you can propose it.'},
		{ name: 'unban', value: 'If you are banned or have questions about your ban or from someone or if you are banned accidentally, you can create a ticket.'},
		{ name: 'complaints', value: 'If you want to sue someone, no matter what, you can create a ticket and the owners will see what is allowed.'},
		{ name: 'help', value: 'If you need help with something or if you dont understand something, you can and may create a ticket and we will help you further.'},
	)
    .setFooter("Last updated: ")
    .setTimestamp()

    return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "rtickets"
}