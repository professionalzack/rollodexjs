require('../models/NPC');
require('../models/Faction');

var mongoose = require('mongoose'),
    NPC = mongoose.model('NPC'),
    Faction = mongoose.model('Faction');






exports.CreateFaction = function(nom, description, callback) {
    console.log("world building with " + nom);


    var newFaction = new Faction({

        _id: new mongoose.Types.ObjectId(),
        name: nom,
        description: description,

    });

    newFaction.save(callback);
};

exports.TestNPCs = function(message) {
    console.log("testing");
    return message.join(' ');
};

exports.ListAllNPCs = function(callback) {
    console.log("new call works yo");
    NPC.find({}, callback);

};



exports.LookupNPC = function(nom, callback) {
    console.log("looking up !!");
    NPC.find({ name: nom }, callback);


};



exports.CreateNPC = function(name, description, callback) {
    console.log("making a guy become at all yo");

    console.log("ready to make someone");
    var newNPC = new NPC({
        _id: new mongoose.Types.ObjectId(),
        name: name,
        description: description,
        faction: []
    });
    console.log("ready to save and callback");
    newNPC.save(callback);
    console.log(newNPC + "saved?");


};

exports.describeNPC = function(nom, update, callback) {
    console.log("looking for " + nom);
    NPC.find({ name: nom }, (err, npcs) => {
        console.log(npcs[0]._id);
        NPC.findOneAndUpdate({ _id: npcs[0]._id }, {
                $set: { description: update }
            },
            callback);
    });


};

exports.factNPC = function(nom, update, callback) {
    console.log("looking for " + nom);
    NPC.find({ name: nom }, (err, npcs) => {
        console.log(npcs[0]._id);
        console.log(`
                    about to recruit ${ nom }
                    to the ${ update }
                    gang `);
        NPC.findOneAndUpdate({ _id: npcs[0]._id }, {
                $push: { faction: update }
            },
            callback);
    });


};

exports.unfactNPC = function(nom, update, callback) {
    console.log("looking for " + nom);
    NPC.find({ name: nom }, (err, npcs) => {
        console.log(npcs[0]._id);
        console.log(`
                    about to kick ${ nom }
                    out of the ${ update }
                    gang `);
        NPC.findOneAndUpdate({ _id: npcs[0]._id }, {
                $pull: { faction: update }
            },
            callback);
    });


};

exports.FindMembers = function(fax, callback) {
    console.log(`
                    looking for members of ${ fax } `);
    NPC.find({ faction: { "$all": [fax] } }, callback)
};



exports.HazeNPC = function(nom, fax, callback) {
    if (Faction.findOne({ name: fax })) {
        console.log("a faction has been found!");
    } else {
        message.channel.send(`
                    There is no faction called $ { fax }, check the name and change if needed. `);



    }

    console.log("looking for " + nom);
    NPC.find({ name: nom }, (err, npcs) => {
        console.log(npcs[0]._id);
        NPC.findOneAndUpdate({ _id: npcs[0]._id }, {
                $set: { faction: fax }
            },
            callback);
    });


};

exports.idnpc = function(id) {
    console.log("going for " + id);
    var wol = NPC.find({ _id: id });
    console.log(wol)
    return wol
};

exports.NameNPC = function(nom) {
    console.log("going for " + nom);
    var wol = NPC.find({ name: nom });
    console.log(wol)
    return wol
};


exports.UpdateNPC = function(id, update, callback) {
    console.log("things are changing around here...")
    NPC.findOneAndUpdate({ _id: id }, {
            $set: { description: update }
        },
        callback);
};

exports.UpdateNPC = function(id, update, callback) {
    console.log("things are changing around here...")
    NPC.findOneAndUpdate({ _id: id }, {
            $set: { description: update }
        },
        callback);
};


exports.DeleteNPC = function(nom, callback) {
    console.log("death to the tyrant " + nom + "!!")
    NPC.find({ name: nom }, (err, npc) => {
        console.log(npc[0]._id);
        NPC.findOneAndRemove({ _id: npc[0]._id }, callback);
    });


};


exports.ListAllFactions = function(callback) {
    console.log("exploring");
    var cults = Faction.find({}, callback);
    return cults
};


exports.LookupFaction = function(nom, callback) {
    console.log("looking this group up !!");
    Faction.find({ name: nom }, callback);



};

exports.describeFaction = function(nom, update, callback) {
    console.log("looking for " + nom);
    Faction.find({ name: nom }, (err, fax) => {
        console.log(`
                    id is $ { fax[0]._id } `);
        console.log(`
                    about to describe it as $ { update } `)
        Faction.findOneAndUpdate({ _id: fax[0]._id }, {
                $set: { description: update }
            },
            callback);
    });
};


exports.UpdateFaction = function(id, update, callback) {
    console.log("things are changing around here...")
    Faction.findOneAndUpdate({ _id: id }, {
            $set: { description: update }
        },
        callback);
};


exports.DeleteFaction = function(nom, callback) {
    console.log(`
                    liquidating the assets of the $ { nom }
                    gang `);
    Faction.find({ name: nom }, (err, fax) => {
        console.log(fax[0]._id);
        Faction.findOneAndRemove({ _id: fax[0]._id }, callback);
    });


};


/*
if (faction == undefined) {
        console.log("no faction was argued")
    } else {
        console.log("a faction has been argued: " + faction);
        if (Faction.findOne({ name: faction })) {
            console.log("a faction has been found!");
            var factId = Faction.findOne({ name: faction })
        } else {
            console.log("a faction must be created");
            var fact = CreateFaction(faction, description);
            var factId = fact._id
        }
    };
    */