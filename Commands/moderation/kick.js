const {MessageEmbed} = require("discord.js")
module.exports = {
    name:'kick',
    execute(message, args ,client) {
            const user = message.mentions.users.first();
            if (message.member.hasPermission('KICK_MEMBERS')) {
            if (user) {
                const member = message.guild.member(user);
                member 
                    .kick()
                    .then(() => {
                        
                        let embed = new MessageEmbed()
                        .setTitle("**SUCCES**")
                        .setColor("00FF00")
                        .addField("✔️","le personne a été éjecte avec succes")
                        message.channel.send(embed)
                    })
                    .catch(err => {
                        let embed = new MessageEmbed()
                        .setTitle("**FAIL**")
                        .setColor("#FF0000")
                        .addField("❌","une erreur c'est produite")
                        message.channel.send(embed)
                        console.log(err);
                    });
            }else{
                 let embed = new MessageEmbed()
                .setTitle("**FAIL**")
                .setColor("#FF0000")
                .addField("❌","cette personne n'existe pas")
                message.channel.send(embed)
            }
    }else {
    let embed = new MessageEmbed()
        .setTitle("**MANQUE DE PERMISSION**")
        .setColor("#FF0000")
        .addField("❌","tu n'as pas la permission")
        message.channel.send(embed)
    }
}
}