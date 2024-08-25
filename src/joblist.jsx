import { useState } from 'react';
import './joblist.css';

const joblist = ({ jobs }) => {
  const [updateStatus, setUpdateStatus] = useState('');

  return (
    <div>
      <table id="job-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index}>
              <td>{job.title}</td>
              <td> 
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {job.jobStatus ? job.jobStatus : updateStatus}
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#" onClick={() => setUpdateStatus("submmited")}>Submmited</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={() => setUpdateStatus("reviewed")}>Reviewed</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={() => setUpdateStatus("interview")}>Interview</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={() => setUpdateStatus("offer")}>Offer</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={() => setUpdateStatus("notselected")}>Not Selected</a>
                    </li>
                  </ul>
                </div>
              </td>
              <td>{new Date(job.dateApplied).toLocaleDateString()}</td>
              <td><button>Delete</button></td> {/* Placeholder for delete functionality */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default joblist;