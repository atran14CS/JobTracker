import { useState } from 'react';
import './joblist.css';
import { BsFillXSquareFill } from "react-icons/bs";


const JobList = ({ jobs }) => {
  const [updatedStatuses, setUpdatedStatuses] = useState({});

  const handleStatusChange = (jobId, newStatus) => {
    setUpdatedStatuses({
      ...updatedStatuses,
      [jobId]: newStatus,
    });
  };

  const deleteJob = async(e) => {
      await fetch("http://localhost:5001/api/deletejob", {
        method: 'DELETE',
        headers: { 'Content-type': 'application/json'},
        query: JSON.stringify({ jobs }),
    });
    alert("job deleted")
  }

  return (
    <div>
      <table id="job-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Date</th>
            <th>Update</th>
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
                <BsFillXSquareFill color='#dd2f10' onClick={deleteJob}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobList;
