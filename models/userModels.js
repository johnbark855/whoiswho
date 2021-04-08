const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ThirdPartyProviderSChema = new Schema({

    provder_name: {
        type: String,
        default: null
    },
    provider_id: {
        type: String,
        default: null
    },
    provider_data: {
        type: {},
        default: null
    }
})

const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        required: "Username is Required"

    },

    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    },

    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [({ length }) => length >= 6, "Password should be longer."]
    },


    third_party_auth: [ThirdPartyProviderSChema],
    date: {
        type: Date,
        default: Date.now
    }
},
    { strict: false }

);

const User = mongoose.model("User", UserSchema);

module.exports = User;
