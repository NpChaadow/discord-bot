const  {MessageEmbed} = require('discord.js')
module.exports = {
    name:"clear",
    execute(message, args ,client) {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
        let embed = new Discord.MessageEmbed()
        .setTitle("**MANQUE DE PERMISSION**")
        .setColor("#FF0000")
        .addField("❌","tu n'as pas la permission")
        message.channel.send(embed)
        return
        }
        if(!args[0])  {
            let embed = new MessageEmbed()
            .setTitle("**ARGUMENTS MANQUANTS**")
            .setColor("#FF0000")
            .addField("❌","tu dois spécifier un nombre")
            message.channel.send(embed)
        return
        }
        if(isNaN(args[0]) === true) {
            let embed = new MessageEmbed()
            .setTitle("**erreur d'arguments**")
            .setColor("#FF0000")
            .addField("❌","veuillez spécifier un nombre")
            message.channel.send(embed)
        return
        }
        if(args[0] > 100 || args[0] < 0) {
            let embed = new MessageEmbed()
            .setTitle("**erreur d'arguments**")
            .setColor("#FF0000")
            .addField("❌","veuillez spécifier un nombre entre 1 et 100")
            message.channel.send(embed)
        return
        }
        message.channel.bulkDelete(args[0]).then(() => {
            let embed = new MessageEmbed()
            .setTitle("**SUCESS**")
            .setColor("#00FF00")
            .addField("✔️",`${args[0]} messages supprimés avec success`)
            message.channel.send(embed)
            
        })
        setTimeout(function() {
            message.channel.bulkDelete(1)
          }, 2000);
    }
}