const mongoose = require("mongoose");
const config = require('./config');
const { mongoUri } = config;

if (!mongoUri) {
    console.error(`Mongo credentials not found, please set them`);
    process.exit(1);
}

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    reconnectTries: 60, // Default is 30
    reconnectInterval: 500, // Default is 1000
    connectTimeoutMS: 10000
};

mongoose.connect(mongoUri, options);

mongoose.connection.on("error", err => {
  console.log("MongoDB: Error occurred", err);
});

mongoose.connection.once("open", () => {
  console.log("MongoDB: Successfully opened the Database");
});

module.exports = mongoose;
