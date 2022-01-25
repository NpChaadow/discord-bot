const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'send',
    execute(message, args ,client) {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            let embed = new MessageEmbed()
            .setTitle("**MANQUE DE PERMISSION**")
            .setColor("#FF0000")
            .addField("❌","tu n'as pas la permission")
            message.channel.send(embed);
                return }
                message.channel.send('@everyone le site a maintenant un autre nom nouveau site: https://nuclearwars.000webhostapp.com/index.php')
    }
}