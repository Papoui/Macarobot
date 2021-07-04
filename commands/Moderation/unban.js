const { GuildManager, Guild } = require("discord.js")

module.exports = {
    name : 'unban',
    description : 'permet de révoquer le bannissement de l\'utilisateur mentionné',
    permissions : true,
    execute (msg, args){
        if(msg.author.hasPermission(BAN_MEMBERS) && args[0]){
            if(args[0].isInteger() && args[0].toString().length === 18 ){
                msg.guild.members.unban(args[0]).catch(msg.channel.send("il y a eu une erreur lors de la tentative de révocation du bannissement de l'utilisateur "))
                msg.channel.send(`J'ai bien révoqué le bannissement de ${msg.mentions.users.first().tag}`)
            } else if (!args[0].isInteger()){
                msg.channel.send("L'identifiant de l'utilisateur doit être un chiffre !")
            } else if (args[0].toString().length != 18){
                msg.channel.send("Un identifiant discord doit être composé de 18 chiffres !")
            }

        } else if (!msg.author.hasPermission(BAN_MEMBERS)){
            msg.channel.send("Vous n'avez pas les permissions pour révoquer le bannissement d'un utilisateur !")
        }
    }
}