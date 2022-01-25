const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'userinfo',
    execute(message, args ,client) {
        const user_mention = message.mentions.users.first();
        let NewEmbed = new MessageEmbed()
            .setTitle(`information de ${user_mention.username}`)
            .setColor('RANDOM')
            .addField('tag',user_mention.tag)
            message.channel.send(NewEmbed);
            message.channel.send(user_mention.displayAvatarURL());  
    }
}