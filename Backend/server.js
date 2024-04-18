const express = require('express');
const mongoose = require('mongoose');
const jobRoutes = require('./Routes/jobRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Connected to the Database!'))
.catch((err) => console.error('Failed to connect to the Database', err));

app.use(express.json());
app.use('/jobs', jobRoutes);

app.listen(PORT, () => {
    console.log(`Server is active on port ${PORT}`);
})