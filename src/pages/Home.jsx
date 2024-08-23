import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../photos/JobTracker-.png';

const Home = () => {


  return (
    <div id="home-box">
      <h1>Job Tracker </h1>
      {/* <img src={logo} alt="logo" id='home-logo'/> */}
      <div className="login-options">
        <Link to="/login">
          <button className="btn" id="log-btn">Login</button>
        </Link>
        <Link to="/signup">
          <button className="btn" id="sign-btn">SignUp</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
