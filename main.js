const fs = require('fs');
const Discord = require('discord.js');
const { PREFIX, TOKEN } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFolder = fs.readdirSync('./command')
for (folder of commandFolder){
	
	const commandFiles = fs.readdirSync(`./command/${folder}`).filter(file => file.endsWith('.js'));

	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}




client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', msg => {
	if (!msg.content.startsWith(PREFIX) || msg.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	if (!client.commands.has(commandName)) return;

	const command = client.commands.get(commandName);

	try {
		command.execute(message, args);
	} catch (error) {
		// ...
	}

});

client.login(TOKEN);
const r34 = require('api-rule34-xxx')
console.log(r34.getPost(4868261))