const Discords = require("discord.js")

module.exports = {
    name:'icbm',
    execute(message,args,client) {
        const arg = message.content.slice(1).split(/ +/);
        let target = arg[1]
        let cha = client.channels.cache.find(r => r.id === target);
        if (cha) {
            cha.delete()
            let embed = new Discords.MessageEmbed()
            .setTitle('🎇MISSILE ICBM ENVOYE🎆')
            .addField('DESTINATION:', cha.name)
            message.channel.send(embed)
            message.channel.send("https://tenor.com/view/russia-icbm-caspian-sea-launch-gif-7373142")
        }
    }
 }