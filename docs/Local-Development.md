# Local Development

If you'd like to make any changes or add additional commands, you can run the bot locally instead of on a server. There are helper scripts in the `package.json` to help with this.

## Run locally

Keep in mind that if you run locally you'll need to set up Mongo, have the correct versions of Node and NPM installed, etc.

- `npm install`
- `npm start`

## Run via Docker

Running via Docker is the preferred method as you won't need to install any of the dependencies locally.

- `npm run docker:build`
- `npm run docker:start`

## NPM Commands

- `docker:build` - Download and build the docker containers
- `docker:clean` - Destroy docker volumes (mongo data)
- `docker:start` - Start the app on node and a Mongo instance
- `docker:stop` - Stop any running docker processes
- `lint` - View any lint warnings from eslint
- `start` - Run the server locally, you'll need the dependencies installed
