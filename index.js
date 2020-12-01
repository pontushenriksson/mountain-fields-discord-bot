const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync('./commands/')
  .filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'carl') {
    client.commands.get('carl').execute(message, args);
  } else if (command === 'clear') {
    client.commands.get('clear').execute(message, args);
  } else if (command === 'erik') {
    client.commands.get('erik').execute(message, args);
  } else if (command === 'help') {
    client.commands.get('help').execute(message, args);
  } else if (command === 'info') {
    client.commands.get('info').execute(message, args);
  } else if (command === 'pontus') {
    client.commands.get('pontus').execute(message, args);
  } else if (command === 'price') {
    client.commands.get('price').execute(message, args);
  } else if (command === 'projects') {
    client.commands.get('projects').execute(message, args);
  } else if (command === 'team') {
    client.commands.get('team').execute(message, args);
  } else if (command === 'walter') {
    client.commands.get('walter').execute(message, args);
  } else if (command === 'walter') {
    client.commands.get('walter').execute(message, args);
  }
});

client.login(token);
