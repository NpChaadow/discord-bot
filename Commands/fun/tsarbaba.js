const Discord = require("discord.js")

module.exports = {
    name: "tsarbaba",
    execute(message, args, client) {
        if (message.member.hasPermission("MANAGE_MESSAGE")) {
            for(i=0; i<20; i++) {
                let gen = Math.floor(Math.random()*8)
                if (gen === 0) message.channel.send("https://tenor.com/view/tpmp-halloween-tpmp-halloween-touche-pas-a-mon-poste-cyril-gif-23721691");
                if (gen === 1) message.channel.send("https://tenor.com/view/tpmp-touche-pas-a-mon-poste-cyril-hanouna-cyril-hanouna-gif-23824497");
                if (gen === 2) message.channel.send("https://tenor.com/view/tpmp-touche-pas-a-mon-poste-cyril-hanouna-cyril-hanouna-gif-24065649");
                if (gen === 3) message.channel.send("https://tenor.com/view/tpmp-touche-pas-a-mon-poste-cyril-hanouna-cyril-hanouna-gif-23067145");
                if (gen === 4) message.channel.send("https://tenor.com/view/tpmp-touche-pas-a-mon-poste-cyril-hanouna-cyril-hanouna-gif-24354427");
                if (gen === 5) message.channel.send("https://tenor.com/view/tpmp-touche-pas-a-mon-poste-cyril-hanouna-cyril-hanouna-gif-23028461");
                if (gen === 6) message.channel.send("https://tenor.com/view/tpmp-touche-pas-a-mon-poste-cyril-hanouna-cyril-hanouna-gif-23867821");
                if (gen === 7) message.channel.send("https://tenor.com/view/tpmp-6a7-touche-pas-a-mon-poste-cyril-hanouna-gif-23307189");
            }
        }
    }
}