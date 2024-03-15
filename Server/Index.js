const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://Hasan:Faraz%400111@cluster0.ai3xkap.mongodb.net/GKB_LABS?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/users', require('./routes/users'));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
