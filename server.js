/* eslint-env node */
import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import User from './src/models/User.js';
import * as dotenv from 'dotenv';
import Job from './src/models/Job.js';
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/api/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "User already exists" });
        user = new User({ email, password });
        await user.save();
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        res.json({ token, userId: user._id });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'User Does not Exist' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Wrong Password' });

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        res.json({ token, userId: user._id });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
});

app.post('/api/addjob', async (req, res) => {
    let { title, date, jobStatus, userid } = req.body;
    try {
        if (title && date && jobStatus && userid) {
            date = new Date(date);
            if (isNaN(date)) {
                return res.status(400).json({ message: "Invalid date format" });
            }
            let job = new Job({ title, dateApplied: date, jobStatus, userid });
            await job.save();
            res.json({ message: "New Job Saved!" });
        } else {
            res.status(400).json({ message: "Missing Information" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
});

app.get('/api/userjobs', async (req, res) => {
    const { userid } = req.query;
    try {
        if (!userid) return res.status(400).json({ message: 'Current user does not exist' });
        const userjobs = await Job.find({ userid });
        res.json(userjobs);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
});

app.delete("/api/deletejob", async(req, res) => {
    const { jobid } = req.body;
    try {
        if(!jobid) return res.status(400).json({ message: "No jobid to delete"});
        await Job.deleteOne({ jobid });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error'});
    }
});




const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
