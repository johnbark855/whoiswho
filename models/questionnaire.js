const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const QuestionnaireSchema = new Schema({

    question1: {
        type: Number,
        required: true
    },

    question2: {
        type: Number,
        required: true
    },

    question3: {
        type: Number,
        required: true
    },

    question4: {
        type: Number,
        required: true
    },

    question5: {
        type: Number,
        required: true
    },

    question6: {
        type: Number,
        required: true
    },

    question7: {
        type: Number,
        required: true
    },

    question8: {
        type: Number,
        required: true
    },

    question9: {
        type: Number,
        required: true
    },

    question10: {
        type: Number,
        required: true
    }
});

const Questionnaire = mongoose.model("Questionnaire", QuestionnaireSchema);

module.exports = Questionnaire;
