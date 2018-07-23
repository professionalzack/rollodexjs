# rollodex
A simple non-player-character directory-builder bot for discord !

## How to use
#### Invitation
All you have to do is invite RolloDex to your discor server by [clicking here!](https://discordapp.com/oauth2/authorize?&client_id=461970423332995083&scope=bot&permissions=0) You need to have **Manage Server** permission on the server you select.

If you have any questions, feedback, or want to request features, feel free to email me once I've added an email address on here or just open a [new issue on Github](https://github.com/professionalzack/rollodexjs/issues/new).

## Basic Idea
Your player-characters will meet many, many non-player characters during the course of your ongoing table-top rpg campaign, and sometimes it can be difficult to keep them all straight. They often have strange names, and at some point it becomes difficult to remember who is allied whom, and where these NPCs are from.
Rollodex uses the term 'Faction' as a catch-all for various ways NPCs may be organized. Guilds, families, businesses, even countries can be factions.
So what you have to do is populate your world with NPCs and Factions, and combine the two, all using the commands below. Then you can call up anyone you want and learn about them! NPCs may belong to any number of factions, but too many may get confusing to you!

## Commands
Please note that currently, all names are case sensitive. Also, for now NPC names must be two words, and faction names must be one word. 
#### NPC:
- `!npc list` - List of all NPCs
- `!npc get` *npc name* - pulls up info on requested npc
- `!npc new`*npc name* *npc description* - creates a new npc
- `!npc describe` *npc name* *new npc description* - replaces the old description with the new description
- `!npc rename` *npc old name* *npc new name* - renames npc
- `!npc recruit` *npc name* *faction name* - recruits existing npc into existing an faction
- `!npc kill` *npc name* - removes npc from database

#### Faction:
- `!faction list` - List of all NPCs
- `!faction get` *faction name* - pulls up info on requested faction
- `!faction new`*faction name* *npc description* - creates a new faction
- `!faction describe` *faction name* *new faction description* - replaces the old description with the new description
- `!faction rename` *faction old name* *faction new name* - renames faction
- `!faction recruit` *faction name* *npc name* - recruits existing npc into existing an faction
- `!faction members` *faction name* - pulls up a list of members of said faction
- `!faction kill` *faction name* - removes faction from database

#### Other
there are and/or will be a couple others !

## Feature Requests

Have a feature in mind? We'd love to hear about it. Feel free to [open an issue](https://github.com/professionalzack/rollodexjs/issues/new) and let us know.

## Contribute

Want to contribute to Rollodex? Awesome! At some point soon this will be available.


## [License](LICENSE)

