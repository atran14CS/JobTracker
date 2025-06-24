import { Link } from 'react-router-dom';
import '../../src/App.css';
import homePic from '../photos/homepic.png';
import { FaGithub } from "react-icons/fa";

const Home = () => {


  return (
    <div id="home-box">
      <h1>Job Tracker </h1>
      <div className="login-options">
        <Link to="/login">
          <button className="btn" id="log-btn">Login</button>
        </Link>
        <Link to="/signup">
          <button className="btn" id="sign-btn">SignUp</button>
        </Link>
      </div>
      <div id='hero'>
        <img src={homePic} alt="homePic" id='homePic'/>
        <h2>Organized your job search effortlessly</h2>
      </div>
      <footer>
      <a href="https://github.com/atran14CS" target="_blank"><FaGithub id="gitHubIcon" /></a>
      </footer>
    </div>
  );
};

export default Home;
