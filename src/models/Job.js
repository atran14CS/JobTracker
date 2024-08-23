import mongoose from "mongoose";
import { JOB_STATUS } from "./constants.js";

const jobSchema = new mongoose.Schema({
    title: {type: String, require: true},
    dateApplied: {type: Date, require: true},
    jobStatus: {type: String, enum: Object.values(JOB_STATUS)}
});


const Job = mongoose.model('Job', jobSchema);
export default Job;