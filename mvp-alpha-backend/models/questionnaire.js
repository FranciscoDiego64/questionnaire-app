const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    questionId: String,
    question: String,
    answerType: String,
    options: [String]
});

const QuestionnaireSchema = new Schema({
    questionnaireId: Number,
    title: String,
    questions: [QuestionSchema]
});

module.exports = mongoose.model('Questionnaire', QuestionnaireSchema);
