const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ParametersSchema = new Schema({
    interestage: {
        type: Array,
        required: true
    },

    interestsex: {
        type: String,
        required: true
    },

    interestbodystyle: {
        type: String,
        required: true
    },

    interestrace: {
        type: String,
        required: true
    }
});

const Parameters = mongoose.model("Parameters", ParametersSchema);

module.exports = Parameters;
