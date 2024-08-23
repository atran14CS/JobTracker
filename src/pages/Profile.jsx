import './Profile.css';
import Navbar from '../Navbar';
import { useState } from 'react';

const Profile = () => {
  const [jobStatus, setJobStatus] = useState("Job Status");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleAddJob = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5001/api/addjob', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, date, jobStatus}),
    });
    const data = await res.json();
    if(data.message == "New Job Saved!") {
      alert("added job");
    }
  }

  return (
    <div>
      <Navbar />
      <div id="createJob">
        <div>
          <input type="text" name='jobName' id='jobName' placeholder='Title Job' onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {jobStatus}
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#" onClick={() => setJobStatus("submmited")}>Submmited</a>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={() => setJobStatus("reviewed")}>Reviewed</a>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={() => setJobStatus("interview")}>Interview</a>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={() => setJobStatus("offer")}>Offer</a>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={() => setJobStatus("notselected")}>Not Selected</a>
            </li>
          </ul>
        </div>
        <div id="calendar">
          <label htmlFor="dateApplied"></label>
          <input type="date" name='dateApplied' onChange={e => setDate(e.target.value)} />
        </div>
        <button onClick={handleAddJob} type='submit'>Add Job</button>
      </div>
    </div>
  );
}

export default Profile;
