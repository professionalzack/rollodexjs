# Roll-o-Dex

A simple non-player-character directory-builder bot for discord !

## Introduction

Your player-characters will meet many, many non-player characters during the course of your ongoing table-top rpg campaign and it can be incredibly difficult to keep them all organized. They may have strange names, lengthy backgrounds or any number of alliances and enemies to keep track of.

Roll-o-Dex makes it easy to maintain order. It uses the term 'Faction' as a catch-all for various ways NPCs may be organized. Guilds, families, businesses, even countries can be factions.

You are easily able to populate your world with NPCs and Factions all by using the commands below. You can quickly reference anyone you want to read more about them!

## Commands

Please note that currently, all names are case sensitive. Also, for now NPC names must be two words, and faction names must be one word.

### NPC:

- `!npc list` - List all NPCs
- `!npc get` `*npc name*` - List info for requested NPC
- `!npc new` `*npc name*` `*npc description*` - creates a new NPC
- `!npc describe` `*npc name*` `*new npc description*` - Replace old description with q new description
- `!npc rename` `*npc old name*` `*npc new name*` - Rename NPC
- `!npc recruit` `*npc name*` `*faction name*` - Recruit existing NPC into existing faction
- `!npc kill` `*npc name*` - Remove NPC

### Faction:
- `!faction list` - List all NPCs
- `!faction get` `*faction name*` - pulls up info on requested faction
- `!faction new` `*faction name*` `*npc description*` - creates a new faction
- `!faction describe` `*faction name*` `*new faction description*` - replaces the old description with the new description
- `!faction rename` `*faction old name*` `*faction new name*` - renames faction
- `!faction recruit` `*faction name*` `*npc name*` - Recruit existing NPC into existing faction
- `!faction members` `*faction name*` - List members of faction
- `!faction kill` `*faction name*` - Remove faction

## Host Your Own

Roll-o-Dex is built in such a way that you can easily spin up your own copy to use on a discord server. There are a few things that need to happen first:

* [Create a Discord Application](./Create-Discord-Application.md)
* [Create a Heroku Application](./Create-Heroku-Application.md)

## Issues

Have a feature or improvement in mind? Found a bug or ? Let me know. Feel free to [open an issue](https://github.com/professionalzack/rollodexjs/issues/new), and I will try to respond promptly.

## Contribute

Want to contribute to Roll-o-Dex? Awesome! Here are some useful links.

* [Local Development](./Local-Development.md)
* [Open a pull request](https://help.github.com/articles/creating-a-pull-request/).

## [License](LICENSE)

