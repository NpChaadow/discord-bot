const { MessageEmbed } = require('discord.js')
module.exports = {
    name:'unlock',
    execute(message, args ,client){
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            let Nopermission = new MessageEmbed()
        .setTitle("**MANQUE DE PERMISSION**")
        .setColor("#FF0000")
        .addField("❌","tu n'as pas la permission")
        message.channel.send(Nopermission); 
        return;
        }
        
        // Making commands shorter
        let channel = message.channel;
        let roles = message.guild.roles;
    
        // Finding the locked role.
        let lockRole = roles.cache.find(r => r.name === "@everyone");
    
        // Enables messages
        channel.updateOverwrite(lockRole, { SEND_MESSAGES: true }).catch(console.log);
    
        // Sends an embed
        let unlockEmbed = new MessageEmbed()
        .setTitle("**DELOCKE**")
        .setColor("00FF00")
        .addField("🔓","le channel a été délocké")
        message.channel.send(unlockEmbed);
    }
}