const { GuildManager, Guild } = require("discord.js")

module.exports = {
    name : 'ban',
    description : 'permet de bannir l\'utilisateur mentionné',
    permissions : true,
    execute (msg, ){
        if(msg.mentions.users.first() && msg.author.hasPermission(BAN_MEMBERS)){
            msg.guild.members.ban(msg.mentions.users.first() )
            msg.channel.send(`J'ai bien banni ${msg.mentions.users.first().tag}`)
        } else if (!msg.author.hasPermission(BAN_MEMBERS)){
            msg.channel.send("Vous n'avez pas les permissions pour bannir un utilisateur !")
        } else if (!msg.mentions.users.first()){
            msg.channel.send("Vous devez mentionner un utilisateur !")
        }
    }
}