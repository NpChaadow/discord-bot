const {MessageEmbed} = require("discord.js");

module.exports = {
    name:"annonymous",
    execute(message, args ,client) {
        let ToSay = message.content.substring(10);
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
        .setColor('RANDOM')
        .addField("message:", ToSay)
        message.channel.send(sayembed)
        }
    }
}