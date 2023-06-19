require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // This line enables CORS


const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase';
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Add this after your mongoose.connect
const questionnaireRoutes = require('./routes/questionnaires'); // replace './routes/questionnaires' with the correct path to your questionnaires.js file
app.use('/api/questionnaires', questionnaireRoutes);



app.get('/', (req, res) => {
  res.send('Sup bro!');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
