# rollodex

A simple non-player-character directory-builder bot for discord!

## How to use

I wrote this out so you could implement your own copy of Roll-o-Dex for your at-home table-top role-playing game. The code is all here but there are some other steps you will need to follow if you want this to work for you and your group.

### Install MongoDB

MongoDB is used to store the rolodex information, you can install mongoDB by following the [mongoDB installation guide](https://docs.mongodb.com/manual/installation/).

### Setup Node

As this is a hosted Javascript (js) application, you will need node installed to be able to access the Node Package Manager (NPM) for the js libraries required.

Node version 12 or higher needs to be installed.

Node can be installed in several ways, you can manually install it by downloading and running the installer from [nodejs.org](https://nodejs.org/en/).

An alternative to this is using the [Node Version Manager (NVM)](https://github.com/nvm-sh) as this allows you to have multiple versions of node installed at the same time and to be able to use the required version in different projects.

⚠ *Note - NVM isn't natively supported by windows, please read the [important notes](https://github.com/nvm-sh/nvm#important-notes) section for NVM for more details*

<!-- #### mongoose.js

[mongoose.js](https://mongoosejs.com/docs/) is used to connect to the Mongo database.

#### Discord.JS

[discord.js](https://discord.js.org/#/) -->

Open a terminal window/command prompt and navigate to the rolodexjs root directory and Run `npm install` to install all of the required packages, you should see a *node_modules* folder within the projects root directory.

### Setup Discord

You will also need to set up a Discord account and [create an application](https://discordapp.com/developers/applications/#top) so you can get a token, which you will put in your .env file.

#### Create Application

- Sign in
- Click "New Application"
- Enter name of application e.g. "DnDRolodex"
- Make note of the client ID as this is used to link to the discord application
- Copy the Client Secret and keep note of it somewhere safe, this is used to sign into the application

#### Create Bot

Once the application has been created, ensure that it's selected before creating the bot.

- Select "Bot" from the left panel
- Click the "Add Bot" button
- Click "Copy" under the username to copy the bot Token and make note it.

#### Adding Bot to Discord Server

To add the bot you have created to a server you will need the bot url, this can be constructed from the values kept from the last two steps.

All you need to do is replace `{clientId}` in this url <https://discord.com/oauth2/authorize?client_id={clientId}&scope=bot>
with the clientId copied earlier from the application.

*You can double check the client id by navigating to the application within the [applications](https://discordapp.com/developers/applications) window.*

If you navigate to the url using the client id you should now see the authorization window asking you to select which server you would like to add the bot to, just select the right server for you and click Authorize.

<!-- ### Running Locally

Copy the .env.example file and name it .env. 

Paste the bot token copied earlier for `BOT_TOKEN`.

To run locally you will need to... -->

### Heroku

Lastly, you can run the whole thing through [Heroku](https://www.heroku.com/)

## Basic Idea

Your player-characters will meet many, many non-player characters during the course of your ongoing table-top rpg campaign, and sometimes it can be difficult to keep them all straight. They often have strange names, and at some point it becomes difficult to remember who is allied whom, and where these NPCs are from.
Rollodex uses the term 'Faction' as a catch-all for various ways NPCs may be organized. Guilds, families, businesses, even countries can be factions.
So what you have to do is populate your world with NPCs and Factions, and combine the two, all using the commands below. Then you can call up anyone you want and learn about them! NPCs may belong to any number of factions, but too many may get confusing to you!

## Commands

Please note that currently, all names are case sensitive. Also, for now NPC names must be two words, and faction names must be one word.

### NPC

- `!npc list` - List of all NPCs
- `!npc get` `*npc name*` - pulls up info on requested npc
- `!npc new`*npc name* *npc description* - creates a new npc
- `!npc describe` *npc name* *new npc description* - replaces the old description with the new description
- `!npc rename` *npc old name* *npc new name* - renames npc
- `!npc recruit` *npc name* *faction name* - recruits existing npc into existing an faction
- `!npc kill` *npc name* - removes npc from database

### Faction

- `!faction list` - List of all NPCs
- `!faction get` *faction name* - pulls up info on requested faction
- `!faction new`*faction name* *npc description* - creates a new faction
- `!faction describe` *faction name* *new faction description* - replaces the old description with the new description
- `!faction rename` *faction old name* *faction new name* - renames faction
- `!faction recruit` *faction name* *npc name* - recruits existing npc into existing an faction
- `!faction members` *faction name* - pulls up a list of members of said faction
- `!faction kill` *faction name* - removes faction from database

### Other

there are and/or will be a couple others !

## Issues

Have a feature in mind? Having trouble with something? Let me know. Feel free to [open an issue](https://github.com/professionalzack/rollodexjs/issues/new), and I will try to respond promptly.

## Contribute

Want to contribute to Rollodex? Awesome! [Open a pull request](https://help.github.com/articles/creating-a-pull-request/).

## [License](LICENSE)
