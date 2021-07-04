const fs = require('fs');
const Discord = require('discord.js');
const { PREFIX, TOKEN } = require('./config.json');


const client = new Discord.Client();
client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();

const { cooldowns } = client;
let cooldownActive = false;



const commandFolder = fs.readdirSync('./commands')
for (folder of commandFolder){
	
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));

	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}




client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', async msg => {
	if (!msg.content.startsWith(PREFIX) || msg.author.bot) return;

	const args = msg.content.slice(PREFIX.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}
	
	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	
	if (timestamps.has(msg.author.id)) {
		const expirationTime = timestamps.get(msg.author.id) + cooldownAmount;
	
		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			msg.channel.send(`**${msg.author.username}**, merci de patienter **${timeLeft.toFixed(0)}** seconde(s) avant de réutiliser cette commande`);
				
			return;
		}
	}
	timestamps.set(msg.author.id, now);
	setTimeout(() => timestamps.delete(msg.author.id), cooldownAmount);
	
	

	


	try {
		command.execute(msg, args);
	} catch (error) {
		// ...
	}
	
});



client.login(TOKEN);
