import { Link } from 'react-router-dom';
import '../App.css';

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
      <footer>
        
      </footer>
    </div>
  );
};

export default Home;
