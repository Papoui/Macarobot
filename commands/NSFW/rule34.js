module.exports = {
    name : "rule34",
    aliases : ['r34'],
    description : "Permet l'utilisation d'images provenant du site rule34.xxx",
    guildOnly : true,
    execute(msg, args){
        if(args[0]){
            request = args[0]
            console.log(fetch("https://rule34.xxx/").then(response => response.json()).then(response => alert(JSON.stringify(response))).catch(error => alert("Erreur : " + error)));
        }
    }
}