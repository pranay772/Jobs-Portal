const express = require('express');
const router = express.Router();
const Job = require('../Model/model');

router.get('/', async (_req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (job == null) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.json(job);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const job = new Job(req.body);
    try {
        const newJob = await job.save();
        res.status(201).json({ message: 'Job added successfully', job: newJob });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (job == null) {
            return res.status(404).json({ message: 'Job not found' });
        }
        Object.assign(job, req.body);
        const updatedJob = await job.save();
        res.json({ message: 'Job Updated successfully!', updatedData: updatedJob });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (job == null) {
            return res.status(404).json({ message: 'Job not found' });
        }
        await Job.deleteOne({ _id: req.params.id });
        res.json({ message: 'Job deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;

