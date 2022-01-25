const {MessageEmbed} = require('discord.js')
module.exports = {
    name:'mute',
    async execute(message, args ,client) {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
        let embed = new MessageEmbed()
        .setTitle("**MANQUE DE PERMISSION**")
        .setColor("#FF0000")
        .addField("❌","tu n'as pas la permission")
        message.channel.send(embed);
            return }

        let toMute = message.guild.member(message.mentions.users.first());
        if(!toMute) {
            let embed = new MessageEmbed()
        .setTitle("**MANQUE D'ARGUMENTS'**")
        .setColor("#FF0000")
        .addField("❌","tu dois spécifier une personne")
        message.channel.send(embed);
        return 
        }
        let role = message.guild.roles.cache.find(r => r.name === "muté");
        if(!role){
          try {
            role = await message.guild.createRole({
              name: "muté",
              color:"#000000",
              permissions:[]
            });
    
            message.guild.channels.forEach(async (channel, id) => {
              await channel.overwritePermissions(role, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
              });
            });
          } catch (e) {
            console.log(e.stack)
          }
        }
    
        if(toMute.roles.has(role.id)) {
            let embed = new Discord.MessageEmbed()
        .setTitle("**PERSONNE DEJA MUTE**")
        .setColor("#FF0000")
        .addField("❌","cette personne est déjà muté")
        message.channel.send(embed);
        return
        }
    
        await(toMute.addRole(role));
        let embed = new Discord.MessageEmbed()
        .setTitle("**PERSONNE MUTE**")
        .setColor("00FF00")
        .addField("✔️","le personne a été muté avec succes")
        message.channel.send(embed);
    
        return;
      }
    }