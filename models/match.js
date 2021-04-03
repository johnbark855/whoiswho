const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MatchSchema = new Schema({

    matches: {
        type: Boolean,
        required: true
    },

    userchoice: {
        type: Boolean,
        required: true
    },

    matched: {
        type: Boolean,
        required: true
    }

});

const Match = mongoose.model("Match", MatchSchema);

module.exports = Match;
