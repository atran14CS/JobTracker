import { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const SignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5001/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.token && data.userId) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('userid', data.userId);
      window.location.href = '/profile';
    } else {
      console.error(data.message);
    }
  };

  return (
    <div>
       <Link to="/">
        <h1 id="login-header">JobTracker</h1>
      </Link>
      <form className="row g-3" id="signup-form">
        <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">New Email</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder='New Email' onChange={e => {setEmail(e.target.value)}}/>
        </div>
        <div className="col-12">
            <label htmlFor="inputPassword4" className="form-label">Create Password</label>
            <input type="password" className="form-control" id="inputPassword4" placeholder='New Password' onChange={e => {setPassword(e.target.value)}}/>
        </div>
        <div className="col-12">
        </div>
        <div className="col-12">
            <button type="submit" className="btn btn-primary" onClick={handleSignUp}>Sign Up</button>
            <Link to='/login'>
              <p>Already have an account?</p>
            </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
