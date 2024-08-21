import './Profile.css';
import Navbar from '../Navbar';

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div id="createJob">
        <div>
            <input type="text" name='jobName' id='jobName' placeholder='Title Job'/>
        </div>
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Job Status
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Applied</a></li>
                <li><a className="dropdown-item" href="#">Interview</a></li>
                <li><a className="dropdown-item" href="#">Rejected</a></li>
                <li><a className="dropdown-item" href="#">Offer</a></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Profile
