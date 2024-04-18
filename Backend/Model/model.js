const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    id: String,
    title: String,
    type: String,
    description: String,
    location: String,
    salary: String,
    company: {
        name: String,
        description: String,
        contactEmail: String,
        contactPhone: String
    }
});

module.exports = mongoose.model('Job', jobSchema);
