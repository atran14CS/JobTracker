import { useState } from 'react';
import './joblist.css';
import { BsFillXSquareFill } from "react-icons/bs";

const JobList = ({ jobs: initialJobs }) => {
  const [jobs, setJobs] = useState(initialJobs);
  const [updatedStatuses, setUpdatedStatuses] = useState({});

  const handleStatusChange = (jobId, newStatus) => {
    setUpdatedStatuses({
      ...updatedStatuses,
      [jobId]: newStatus,
    });
  };

  const deleteJob = async (jobId) => {
    const res = await fetch("http://localhost:5001/api/deletejob", {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ jobid: jobId }),
    });
    if (res.ok) {
      alert("Job deleted");
      const updatedJobs = jobs.filter(job => job._id !== jobId);
      setJobs(updatedJobs);
    } else {
      alert("Failed to delete job");
    }
  };

  return (
    <div>
      <table id="job-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Date</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index}>
              <td>{job.title}</td>
              <td>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {updatedStatuses[job._id] || job.jobStatus}
                  </button>
                  <ul className="dropdown-menu">
                    {['Submitted', 'Reviewed', 'Interview', 'Offer', 'Not Selected'].map(status => (
                      <li key={status}>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => handleStatusChange(job._id, status)}
                        >
                          {status}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </td>
              <td>{new Date(job.dateApplied).toLocaleDateString()}</td>
              <td>
                <button>Update</button>
              </td>
              <td id="delete">
                <BsFillXSquareFill color='#dd2f10' onClick={() => deleteJob(job._id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobList;
