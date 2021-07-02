const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')

client.on('ready', () => {
	console.log('Ready!');
});

client.on('message', msg => {
	if(msg.content === '**pute pute'){
		msg.channel.send('salope salope')
	}
});

client.login(config.TOKEN);
