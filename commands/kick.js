const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Sorry maar je hebt hier geen permisie voor!");

const mentionMember = message.mentions.members.first();
let reason = args.slice(1).join(" ");
if (!reason) reason = "gelief een reden mee tegeven!";

const kickembed = new discord.MessageEmbed()
.setTitle("User kicked")
.setDescription(`user: ${kickUser}`)
.addField(`Door: ${message.author}`)
.addField("reden:", reason)
.setColor("#76c914")

if (!args[0]) return message.channel.send("Gelief een persoon te taggen");

if(!mentionsMember) return message.channel.send("Deze persoon is niet toegestaan om te kicken / Deze persoon is niet meer in de server!");

if(!mentionsMember.kickable) return message.channel.send("was unable to kick thist user");


try {
    await mentionsMember.send(kickembed);
} catch (err) {

}

try {
    await mentionsMember.kick(reason);
} catch (err) {
    return message.channel.send("i was unabe to kick this user sorry");
}


}

module.exports.help = {
    name: "kick"
}