const Discord = require('discord.js')

module.exports = {
    name: "effectif",
    execute(message,args,client){
        if (message.author.id === "409674646569353218" || message.author.id === "509466475724013589" || message.author.id === "509057349655330826") {
            for(i=0;i<10;i++) {
                let gen = Math.floor(Math.random()*20)
                if (gen === 0) message.channel.send("https://c.tenor.com/6dRl4EQlig4AAAAM/romanian-army-in-odessa-march.gif");
                if (gen === 1) message.channel.send("https://c.tenor.com/kmrzJkKxQ-IAAAAM/marching-german-army.gif");
                if (gen === 2) message.channel.send("https://tenor.com/view/air-assault-lmb-luchtmobiel-luchtmobiele-brigade-defensie-gif-14790865");
                if (gen === 3) message.channel.send("https://c.tenor.com/b8hxpW3awnIAAAAM/ksk-bundeswehr.gif");
                if (gen === 4) message.channel.send("https://c.tenor.com/eqx6hNkER94AAAAM/war.gif");
                if (gen === 5) message.channel.send("https://tenor.com/view/croatia-ww2-gif-18606767");
                if (gen === 6) message.channel.send("https://tenor.com/view/parade-marching-italy-army-ww2-gif-17499864");
                if (gen === 7) message.channel.send("https://tenor.com/view/regio-esercito-marching-spanish-civil-war-soldier-gif-18485479");
                if (gen === 8) message.channel.send("https://tenor.com/view/regio-esercito-italy-parade-march-army-gif-17977002");
                if (gen === 9) message.channel.send("https://tenor.com/view/hochiminh-vietnam-vietnamwar-vietcong-gif-20180975");
                if (gen === 10) message.channel.send("https://tenor.com/view/ww2-croatia-gif-18606680");
                if (gen === 11) message.channel.send("https://tenor.com/view/red-army-gif-21373063");
                if (gen === 12) message.channel.send("https://tenor.com/view/soldiers-military-marching-guns-gif-17759580");
                if (gen === 13) message.channel.send("https://tenor.com/view/troop-army-soldier-march-marching-gif-11507387");
                if (gen === 14) message.channel.send("https://tenor.com/view/tank-ww2-war-gif-14337848");
                if (gen === 15) message.channel.send("https://tenor.com/view/ww2-panzer-tanks-gif-15955311");
                if (gen === 16) message.channel.send("https://tenor.com/view/serbia-tanks-serbian-tanks-serbian-tank-balkan-gif-19590672");
                if (gen === 17) message.channel.send("https://tenor.com/view/china-tank-smoke-mbt-gif-17532711");
                if (gen === 18) message.channel.send("https://tenor.com/view/tank-panzer-army-spiritus-gif-22314269");
                if (gen === 19) message.channel.send("https://tenor.com/view/leopard-tank-tank-soldier-off-road-gif-12316501");
            }
        }

    }

}