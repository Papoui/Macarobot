module.exports = {
    name : 'clear',
    aliases : ['clean'],
    description : 'Commande servant à supprimer un nombre de messages donnés',
    guildOnly : true,
    execute(msg, args){
        if(args[0] && !isNaN(args[0])){
            msg.delete()
            if(args[0] >= 100) {
                args[0] = 99;
            }
            msg.channel.bulkDelete(args[0], true).catch((error) => {
                console.error(error);
                msg.channel.send("Dû à certaines resctrictions de discord, je ne peux supprimer les messages datant de plus de 14 jours... \n Si vous souhaitez néamoins supprimer tous les messages du salon, vous pouvez utiliser la commande ****clear-channel** (WIP)")
              });
        }
    }
}