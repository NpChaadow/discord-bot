const Discord = require("discord.js")
const nuke = require("../moderation/nuke")
const { execute } = require("./tsarbomba")

module.exports = {
    name: "debarquement",
    execute(message, args, client) {
        if (message.author.id === "409674646569353218" || message.author.id === "509466475724013589" || message.author.id === "509057349655330826") {
            let embed = new Discord.MessageEmbed()
            .setTitle("💥DEBARQUEMENT💥")
            .setAuthor("XFMF")
            for (i = 0; i<100; i++) {
                setTimeout(function(){
                let gen = Math.floor(Math.random()*4)
                let url
                if (gen === 0) url = "https://tenor.com/view/normandy-ww2-operation-overload-france-gif-5135131" ;
                if (gen === 1) url = "https://tenor.com/view/normandie-gif-11700265" ;
                if (gen === 2) url = "https://tenor.com/view/normandie-gif-11700264" ;
                if (gen === 3) url = "https://tenor.com/view/band-of-brother-run-soldiers-hurry-ww2-gif-5408691" ;
                message.channel.send(embed)
                message.channel.send(url)

                },2000);
            }
        }
    }
}