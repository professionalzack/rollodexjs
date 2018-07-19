var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var FactionSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: 'Name, please!',
        unique: true
    },
    description: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Faction', FactionSchema);