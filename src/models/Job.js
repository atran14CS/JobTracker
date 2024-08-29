import mongoose from "mongoose";
import { JOB_STATUS } from "./constants.js";

const jobSchema = new mongoose.Schema({
    company: {type: String, require: true},
    title: {type: String, require: true},
    dateApplied: {type: Date, require: true},
    jobStatus: {type: String, enum: Object.values(JOB_STATUS)},
    notes: {type: String, require: false},
    userid: {type: String, require: true}
});


const Job = mongoose.model('Job', jobSchema);
export default Job;