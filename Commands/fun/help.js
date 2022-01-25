const { MessageEmbed } = require('discord.js');
const {PREFIX} = require('../../config');
module.exports = {
    name:'help',
    execute(message, args ,client) {
    const HelpEmbed = new MessageEmbed()
	.setColor('RANDOM')
	.setTitle('HELP')
	.setDescription('voici les commandes disponibles')
	.addField('le prefix', PREFIX)
    .addField('annonymous', 'envoie un message annonyme')
    .addField('say', "r'envoie le message de votre choix")
    .addField('send', "r'envoie un message pres définit")
    .addField('userinfo', 'retourne les information du joueur mentioné')
    .addField('ban', 'bannis le joueur mentioné')
    .addField('clear', 'supprime les nombre de message indiqué')
    .addField('embed', 'envoie une embed pres définit')
    .addField('kick', "éjecte l'utilisateur indiqué")
    .addField('lock', "vérouille le salon")
    .addField('mute', "rend muet le joueur indiqué")
    .addField('nuke', "recrée de zero un salon")
    .addField('pool', "envoie un sondage pres définit")
    .addField('unlock', "dévérouille le salon")
    message.channel.send(HelpEmbed)
           
    }
}