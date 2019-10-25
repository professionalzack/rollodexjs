var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var NPCSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: "Name, please!",
    unique: true
  },
  description: {
    type: String,
    required: false
  },
  faction: { type: [String], required: false, default: undefined }
});

module.exports = mongoose.model("NPC", NPCSchema);
