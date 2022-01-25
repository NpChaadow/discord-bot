const {MessageEmbed} = require('discord.js')
module.exports = {
    name:"embed",
    execute(message, args ,client) {
        message.channel.bulkDelete(1)
        let embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❤️**SERVEUR SURVIE**❤️')
        .addFields(
            { name:'IP:', value:'newprojectsmp.mine.gg'},
            { name:'version:', value:"1.16.4"},
        )
        message.channel.send(embed)
    }
}