const controller = require('./controller');

module.exports = {
    name: 'npcs',
    description: 'NPC Controller',
    async execute(message, args) {
        const crudCommand = args.shift().toLowerCase();
        switch (crudCommand) {
            case 'new':
                controller.CreateNPC(args.splice(0, 2).join(' '), args.join(' '), (err, nonpc) =>
                    message.channel.send(`I shall create ${nonpc.name} ! `));
                break;
            case 'test':
                var test = controller.TestNPCs(args);
                message.channel.send(test);
                break;
            case 'list':
                controller.ListAllNPCs((err, npcs) => {
                    console.log("listing the dudes! ");
                    let npcInfo = npcs.map((npc) => `${npc.name}`);
                    message.channel.send(npcInfo.sort(function(a, b) {
                        a = a.toLowerCase();
                        b = b.toLowerCase();
                        if (a == b) return 0;
                        return a < b ? -1 : 1;
                    }).join('\n'));
                });
                break;
            case 'get':
                controller.LookupNPC(args.join(' '), (err, nonpc) => {
                    if (err) {
                        console.log("if else!");
                        message.channel.send("no mans");
                    } else {
                        let npc = nonpc[0] || { faction: "Pretender's Guild", description: "An absolute **imposter** who is not on the roster!!", name: args.join(' ') };
                        message.channel.send(`${npc.name} - ${npc.faction.join(', ')}\n  *${npc.description}*`);
                    }
                });


                break;
            case 'describe':
                var name = args.splice(0, 2).join(" ");
                var desc = args.join(" ");
                controller.describeNPC(name, desc, (err, npc) => {
                    if (err) {
                        console.log("if else!");
                        message.channel.send("it's not polite to talk about somebody when they don't exist");
                    } else {
                        if (npc) {
                            message.channel.send(`we're learning more about ${npc.name}`)
                        } else {
                            message.channel.send(`who the heck is ${name}??`)
                        }
                    }
                });
                break;
            case 'rename':
                var name = args.splice(0, 2).join(" ");
                var newname = args.join(" ");
                controller.renameNPC(name, newname, (err, npc) =>
                    message.channel.send(`${name} now goes by ${newname}. respect it!`));
                break;
            case 'info':
                controller.LookupNPC(args.join(' '), (err, nonpc) =>
                    message.channel.send(`we'll see ${nonpc} !`));
                break;
            case 'name':
                const breakout = await controller.NameNPC(args.join(' '));
                message.channel.send(`we'll see ${breakout.body.name} !`);
                break;
            case 'kill':
                controller.DeleteNPC(args.join(' '), (err, npc) =>
                    message.channel.send(`r i p  ${args.join(' ')} `));
                break;
            case 'recruit':
                var nom = args.splice(0, 2).join(" ");
                var fax = args;
                controller.factNPC(nom, fax, (err, npc) =>
                    message.channel.send(` jumping ${nom} into the ${fax} gang`));
                break;

            default:

                message.channel.send(`Command ${crudCommand} not recognized`);
        }
    }
}