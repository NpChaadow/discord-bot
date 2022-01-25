const {readdirSync} = require('fs');
const Discord = require('discord.js');

const PREFIX = "|"



const client = new Discord.Client();
client.commands = new Discord.Collection()

const loadCommands = (dir="./Commands") => {
    readdirSync(dir).forEach(dirs => {
        const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

        for (const file of commands) {
            const getFileName = require(`${dir}/${dirs}/${file}`);
            client.commands.set(getFileName.name, getFileName)
            console.log(`commande chargée: ${getFileName.name}`);
        }
    })
}

loadCommands();

client.on('ready', () => {
    console.log(`logged in as ${client.user.tag}!`);
    client.user.setActivity("PROTECTION: ON")
});

client.on('message', message => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    const args = message.content.slice(PREFIX.length).split(/ +/); // les arguments (met les argument dans des array a chaque espace(commance a 0))
    const commandName = args.shift().toLowerCase();
    if (!client.commands.has(commandName)) return;
    client.commands.get(commandName).execute(message, args ,client)
});


client.login(process.env.TOKEN);