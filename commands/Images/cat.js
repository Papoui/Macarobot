const Discord = require('discord.js');
const fetch = require('node-fetch');
module.exports = {
    name : 'cat',
    description : "Envoie une photo de chat aléatoire",
    guildOnly : true,
    async execute(msg){
        const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
        const affichage_chat = new Discord.MessageEmbed()
            .setColor('#066ec9')
            .setDescription(`:cat: Demandé par **${msg.author.username}**`)
            .setImage(file)
            .setTimestamp()
            .setFooter("Cat")
        msg.channel.send(affichage_chat)
    }
}