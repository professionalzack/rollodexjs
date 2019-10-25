const package = require('./package.json');

let mongoUri;

if (process.env.MONGODB_URI) {
    mongoUri = process.env.MONGODB_URI;
} else {
    const {
        MONGO_USERNAME,
        MONGO_PASSWORD,
        MONGO_HOSTNAME,
        MONGO_PORT,
        MONGO_DB
    } = process.env;

    if (MONGO_USERNAME && MONGO_PASSWORD && MONGO_HOSTNAME && MONGO_PORT && MONGO_DB) {
        mongoUri = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
    }
}

module.exports = {
    clientId: process.env.DISCORD_CLIENT_ID,
    mongoUri,
    prefix: process.env.DISCORD_BOT_PREFIX,
    token: process.env.DISCORD_BOT_TOKEN,
    version: package.version,
};
