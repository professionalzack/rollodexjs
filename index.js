require('dotenv').config()
const fs = require('fs');
const Discord = require('discord.js');
const mongoose = require('mongoose');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./controllers').filter(file => file.endsWith('.js'));
const prefix = process.env.prefix;
const token = process.env.BOT_TOKEN;

var db = process.env.MONGODB_URI;
console.log(typeof(token));
console.log(JSON.stringify(token));
console.log(process.env.BOT_TOKEN);

mongoose.connect(db);

for (const file of commandFiles) {
    const command = require(`./controllers/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === (`npc`)) {
        client.commands.get('npcs').execute(message, args);
    } else if (command === (`faction`)) {
        client.commands.get('factions').execute(message, args);
    } else if (command === (`more-help`)) {
        message.channel.send("_please note that currently, all names are case sensitive. also, for now NPC names must be two words, and faction names must be one word._\n**NPCs:**\n`!npc list` - *List of all NPCs*\n`!npc get <npc name>` - *pulls up info on requested npc*\n`!npc new <npc name> <npc description>` - *creates a new npc*\n`!npc describe <npc name> <new npc description>` - *replaces the old description*\n`!npc rename <npc old name> <npc new name>` - *renames npc*\n`!npc recruit <npc name> <faction name>` - *adds npc to an existing faction*\n`!npc kill <npc name>` - *removes npc from database*\n**Factions:**\n `!faction list` - *List of all NPCs*\n`!faction get <faction name>` - *pulls up info on requested faction*\n`!faction new <new faction name< <new faction description>` - *creates a new faction*\n`!faction describe <faction name> <new faction description>` - *replaces the old description*\n`!faction rename <faction old name> <faction new name>` - *renames faction*\n`!faction recruit <faction name> <npc name>` - *adds npc to an existing faction*\n`!faction members <faction name>` - *pulls up a list of members of said faction*\n`!faction kill <faction name>` - *removes faction from database*");
    } else if (command === (`help`)) {
        message.channel.send("_please note that currently, all names are case sensitive. also, for now NPC names must be two words, and faction names must be one word. editing commands are available at `!more-help`. thanks!_\n**NPCs:**\n`!npc list` - *List of all NPCs*\n`!npc get <npc name>` - *pulls up info on requested npc*\n**Factions:**\n `!faction list` - *List of all NPCs*\n`!faction get <faction name>` - *pulls up info on requested faction*");
    } else if (command === 'args-info') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        } else if (args[0] === 'foo') {
            return message.channel.send('bar');
        }

        message.channel.send(`First argument: ${args[0]}`);

        message.channel.send(`Command name: ${command}\nArguments: ${args}`);
    } else if (command === 'prune') {
        const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            return message.reply('that doesn\'t seem to be a valid number.');
        } else if (amount <= 1 || amount > 100) {
            return message.reply('you need to input a number between 1 and 99.');
        }


        message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('there was an error trying to prune messages in this channel!');
        });
    } else if (command === 'roll') {
        var roll = function(amt, size, bonus) {
            var face = function(sides) {
                var answer = Math.floor(Math.random() * sides) + 1;
                return answer
            };
            var i;
            var result = parseInt(bonus) || 0;
            var rolls = (amt || 1);
            for (i = 0; i < rolls; i++) {
                let once = face(size)
                let rollnumber = i + 1;
                message.channel.send("roll " + rollnumber + ": " + once);
                result = result + once;
            };
            return result
        };
        if (!args.length) {
            var spell = roll(1, 20, 0);
            message.channel.send(spell)
        } else {

            var argument = args[0];
            var form = argument.split('d');
            var num = form[0];
            var shape = form[1].split('+');
            var magic = roll(num, shape[0], shape[1]);
            message.channel.send("result: " + magic);
        }


    } else if (command === 'roll-help') {
        message.channel.send("to roll a d20, simply type `!roll`. for more complicated dice rolls, add standard dice notation. here are some examples:\n`2d8` `d12+3` `3d4+3`\nplease do not use negative bonuses or incredibly large dice or number of dice. thanks")
    }

});

client.login(token);