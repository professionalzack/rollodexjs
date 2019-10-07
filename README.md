# rollodex
A simple non-player-character directory-builder bot for discord !

## How to use
#### *Some Assembly Required*
I wrote this out so you could implement your own copy of Roll-o-Dex for your at-home table-top role-playing game. The code is all here but there are some other steps you will need to follow if you want this to work for you and your group. 
I will write it all out more step-by-step at a later date, but basically you will need to download and set up these libraries/database/etc:
* [mongoDB](https://docs.mongodb.com/manual/installation/)
* [mongoose.js](https://mongoosejs.com/docs/)
* [node.js](https://nodejs.org/en/)
* [discord.js](https://discord.js.org/#/)

You will also need to set up a Discord account and [create an application](https://discordapp.com/developers/applications/#top) so you can get a token, which you will put in your .gitignore file. 
Lastly, you can run the whole thing through [Heroku](https://www.heroku.com/)

## Basic Idea
Your player-characters will meet many, many non-player characters during the course of your ongoing table-top rpg campaign, and sometimes it can be difficult to keep them all straight. They often have strange names, and at some point it becomes difficult to remember who is allied whom, and where these NPCs are from.
Rollodex uses the term 'Faction' as a catch-all for various ways NPCs may be organized. Guilds, families, businesses, even countries can be factions.
So what you have to do is populate your world with NPCs and Factions, and combine the two, all using the commands below. Then you can call up anyone you want and learn about them! NPCs may belong to any number of factions, but too many may get confusing to you!

## Commands
Please note that currently, all names are case sensitive. Also, for now NPC names must be two words, and faction names must be one word. 
#### NPC:
- `!npc list` - List of all NPCs
- `!npc get` *npc_name* - pulls up info on requested npc
- `!npc new`*npc_name* *npc_description* - creates a new npc
- `!npc describe` *npc_name* *new_npc_description* - replaces the old description with the new description
- `!npc rename` *npc_name* *npc_new_name* - renames npc
- `!npc recruit` *npc_name* *faction_name* - recruits existing npc into existing an faction
- `!npc kill` *npc_name* - removes npc from database

#### Faction:
- `!faction list` - List of all NPCs
- `!faction get` *faction_name* - pulls up info on requested faction
- `!faction new`*faction_name* *npc description* - creates a new faction
- `!faction describe` *faction_name* *new_faction_description* - replaces the old description with the new description
- `!faction rename` *faction_name* *new_faction_name* - renames faction
- `!faction recruit` *faction_name* *npc_name* - recruits existing npc into existing an faction
- `!faction members` *faction_name* - pulls up a list of members of said faction
- `!faction kill` *faction_name* - removes faction from database

#### Other
there are and/or will be a couple others !

## Issues

Have a feature in mind? Having trouble with something? Let me know. Feel free to [open an issue](https://github.com/professionalzack/rollodexjs/issues/new), and I will try to respond promptly.

## Contribute

Want to contribute to Rollodex? Awesome! [Open a pull request](https://help.github.com/articles/creating-a-pull-request/).


## [License](LICENSE)

