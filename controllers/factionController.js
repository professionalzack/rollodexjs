const controller = require('./controller');

module.exports = {
    name: 'factions',
    description: 'Faction Controller',
    async execute(message, args) {
        const crudCommand = args.shift().toLowerCase();
        switch (crudCommand) {
            case 'new':
                controller.CreateFaction(args.shift(), args.join(' '), (err, fax) =>
                    message.channel.send(`Founding a local chapter of ${fax.name} ! `));
                break;
            case 'list':
                controller.ListAllFactions((err, faccs) => {
                    let faxInfo = faccs.map((facc) => `${facc.name}`);
                    message.channel.send(faxInfo.join('\n'));
                });
                break;
            case 'get':
                controller.LookupFaction(args, (err, fax) => {
                    let farc = fax[0] || { description: "No-good, busted-ass gang no one has ever heard of", name: args };
                    controller.FindMembers(args, (err, memb) => {
                        let members = memb.length || "Nobody I know !";
                        message.channel.send(`${farc.name} \n *${farc.description}* \n Size: ${members}`)
                    })
                });
                break;
            case 'info':
                controller.LookupFaction(args, (err, fax) =>
                    message.channel.send(fax));
                break;
            case 'describe':
                var name = args.shift();
                var desc = args.join(" ");
                controller.describeFaction(name, desc, (err, fax) =>
                    message.channel.send(`${fax.name} got an update`));
                break;
            case 'rename':
                var name = args.shift();
                var desc = args.shift();
                controller.renameFaction(name, desc, (err, fax) =>
                    message.channel.send(`${name} is now called ${desc}`));
                break;
            case 'kill':
                await controller.DeleteFaction(args, (err, fax) =>
                    message.channel.send(`the ${args} gang has been wiped out `));
                break;
            case 'recruit':
                var fax = args.shift();

                var nom = args.join(' ');
                console.log(`name is ${nom} and group is ${fax}`);
                controller.factNPC(nom, fax, (err, npc) =>
                    message.channel.send(` jumping ${nom} into the ${fax} gang`));
                break;
            case 'boot':
                var fax = args.shift();

                var nom = args.join(' ');
                console.log(`name is ${nom} and group is ${fax}`);
                controller.unfactNPC(nom, fax, (err, npc) =>
                    message.channel.send(` booting ${nom} from the ${fax} gang`));
                break;
            case 'members':
                console.log("ints the memebes");
                controller.FindMembers(args, (err, npcs) => {
                    console.log("here he we go!");
                    console.log(npcs);
                    let npcInfo = npcs.map((npc) => `${npc.name}`);
                    message.channel.send(`**${args}:** ${npcInfo.sort(function(a, b) {
                        a = a.toLowerCase();
                        b = b.toLowerCase();
                        if (a == b) return 0;
                        return a < b ? -1 : 1;
                    }).join(', ')}`);
                });
                break;
            default:

                message.channel.send(`Command ${crudCommand} not recognized`);
        }
    }
}