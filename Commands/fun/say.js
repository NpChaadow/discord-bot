const { MessageEmbed } = require("discord.js");

module.exports = {
    name:"say",
    execute(message, args ,client) {
        let ToSay = message.content.substring(4);
        if(!ToSay) {
            let failembed = new MessageEmbed()
            .setTitle("**PROBLEME D'ARGUMENTS**")
            .setColor("FF0000")
            .addField("❌","aucun argument")
            message.channel.send(failembed)
            return
        } else {
            message.channel.bulkDelete(1)
        let sayembed = new MessageEmbed()
        .setAuthor(message.author.username)
        .setColor('RANDOM')
        .addField("message:", ToSay)
        message.channel.send(sayembed)
        }
    }
}