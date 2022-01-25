const { MessageEmbed } = require('discord.js')
const nuke1Img = 'https://pa1.narvii.com/6760/f3924e3ac12f61b9f7f2d2bbe09007c63df019e6_hq.gif'
const nuke2Img = 'https://pa1.narvii.com/7851/3853e0ecfe87a964b9edfaa5ccc88851f5c2673br1-500-282_hq.gif'
const nuke3Img = 'https://64.media.tumblr.com/3afd6c93f48bd102fea1a4d9b6948433/tumblr_oqop44UX0r1ukrfx2o3_r2_500.gif'
const nuke4Img = 'https://media.giphy.com/media/ojVgivmgLbxUms3d6u/giphy.gif'
const nuke5Img = 'https://media.giphy.com/media/6oxygCjk2soemtmNfI/giphy.gif'
const nuke6img = 'https://media.tenor.com/images/9e731d9a168fd29e795e031366f9fa3b/tenor.gif'

module.exports = {
    name: "nuke",
        execute(message, args ,client) {
            if (message.member.hasPermission('MANAGE_CHANNELS')) {
                let random = Math.floor(Math.random()* 6);
                if(random === 0) {
                    let embed = new MessageEmbed()
                    .addField("nuke","KAMEHA ME HA!")
                    .setColor('#C900FF')
                    message.channel.clone().then(channel => {
                        channel.setPosition(message.channel.position)
                        channel.send(embed)
                        channel.send(nuke1Img)
                    })
                    message.channel.delete()
                } else {
                    if(random === 1) {
                        let embed = new MessageEmbed()
                        .addField("nuke","TEXAS SMASH!")
                        .setColor('#0070FF')
                        message.channel.clone().then(channel => {
                            channel.setPosition(message.channel.position)
                            channel.send(embed)
                            channel.send(nuke2Img)
                        })
                        message.channel.delete()
                    } else {
                        if(random === 2) {  
                            let embed = new MessageEmbed() 
                            .addField("nuke","...")
                            .setColor('#FF0000')
                            message.channel.clone().then(channel => {
                                channel.setPosition(message.channel.position)
                                channel.send(embed)
                                channel.send(nuke3Img)
                            })
                        message.channel.delete()
                        } else {
                            if(random === 3) {
                                let embed = new MessageEmbed()
                                .addField("nuke","cruel sun")
                                .setColor('#FFE800')
                                message.channel.clone().then(channel => {
                                    channel.setPosition(message.channel.position)
                                    channel.send(embed)
                                    channel.send(nuke4Img)
                                })
                        message.channel.delete()
                            } else {
                                if(random === 4) { 
                                    let embed = new MessageEmbed()
                                    .addField("nuke","Gura Gura no Mi")
                                    .setColor('#FFFFFF')
                                    message.channel.clone().then(channel => {
                                        channel.setPosition(message.channel.position)
                                        channel.send(embed)
                                        channel.send(nuke5Img)
                                    })
                        message.channel.delete()
                            } else {
                                if(random === 5) { 
                                    let embed = new MessageEmbed()
                                    .addField("nuke", "Shinra Tensei")
                                    .setColor('#FFFFFF')
                                    message.channel.clone().then(channel => {
                                        channel.setPosition(message.channel.position)
                                        channel.send(embed)
                                        channel.send(nuke6img)
                                    })
                        message.channel.delete()
                        }
                    }
                }
                    }
                }
            }
        } else {
            let embed = new MessageEmbed()
            .setTitle("**MANQUE DE PERMISSION**")
            .setColor("#FF0000")
            .addField("❌","tu n'as pas la permission")
            message.channel.send(embed)
        }
    }
}