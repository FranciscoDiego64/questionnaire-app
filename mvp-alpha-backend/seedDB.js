const mongoose = require('mongoose');
const Questionnaire = require('./models/Questionnaire'); // replace './models/Questionnaire' with the path to your Questionnaire model

mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

(async function() {
// Questionnaire 1: Basic Info
let questionnaire1 = new Questionnaire({
    questionnaireId: 1,
    title: "Basic Info",
    questions: [
        {
            questionId: "q1",
            question: "What's your name?",
            answerType: "text",
        },
        {
            questionId: "q2",
            question: "What's your age group?",
            answerType: "single",
            options: ["0-18", "19-29", "30-39", "40-49", "50-59", "60 onwards"]
        },
        {
            questionId: "q3",
            question: "Favourite colour?",
            answerType: "multiple",
            options: ["Black", "Blue", "Green", "Yellow", "Orange", "White", "Purple"]
        }
    ]
});

// Questionnaire 2: Health Condition
let questionnaire2 = new Questionnaire({
    questionnaireId: 2,
    title: "Health Condition",
    questions: [
        {
            questionId: "q1",
            question: "Are you currently sick?",
            answerType: "single",
            options: ["Yes", "No"]
        },
        {
            questionId: "q2",
            question: "Were you sick in the last 6 months?",
            answerType: "single",
            options: ["Yes", "No"]
        },
        {
            questionId: "q3",
            question: "How do you consider your health condition compared to 6 months ago?",
            answerType: "single",
            options: ["Better", "Worse", "The Same"]
        }
    ]
});

// Saving the questionnaires to the database
//questionnaire1.save();
//questionnaire2.save();

  try {
    await Questionnaire.deleteMany({});
    console.log('Removed Questionnaires');

    await questionnaire1.save();
    console.log('Added Questionnaire: ' + questionnaire1.title);

    await questionnaire2.save();
    console.log('Added Questionnaire: ' + questionnaire2.title);

    mongoose.connection.close(); // Close the connection
    console.log('MongoDB connection closed.');
  } catch (err) {
    console.log(err);
  }
})();
