const Discord = require('discord.js');

module.exports = {
    name:'declaration',
    execute(message,args,client){
        if (message.author.id === "409674646569353218" || message.author.id === "509466475724013589" || message.author.id === "509057349655330826") {
            message.guild.channels.cache.forEach(cha => {
                if (cha.type === 'text') {
                    cha.send("||@everyone||")
                    let embed = new Discord.MessageEmbed()
                    .setTitle('💥GUERRE DECLAREE💥')
                    .setColor("#FF0000")
                    .setAuthor('🧨XFMF🧨', "https://cdn.discordapp.com/attachments/934808971934584842/935294207365644338/unknown-02.png")
                    .setFooter('Powered by the X-Force Military Fondation')
                    cha.send(embed)
                }
            });
        }
    }
}