const Discord = require('discord.js')

module.exports = {
    name:"gogogadejetauconfinement",
    execute(message,args,client){
        message.guild.channels.cache.forEach(cha => {
            console.log(cha)
            
                message.guild.roles.cache.forEach(rl => {
                    console.log(rl)
                    if (!cha.type === "text") {
                        cha.updateOverwrite(rl, { 
                            VIEW_CHANNEL: false
                        });
                    } else {
                        cha.updateOverwrite(rl, {
                            SEND_MESSAGES: false,
                            ADD_REACTIONS: false,
                            VIEW_CHANNEL: false
                    
                        });
                    }
            });
        });
    }
}