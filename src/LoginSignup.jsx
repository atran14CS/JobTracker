import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginSignup = ({ option }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = option ? 'http://localhost:5001/api/signup' : 'http://localhost:5001/api/login';
    const res = await fetch(url, {
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
      <form className="row g-3" id={option ? "signup-form" : "login-form"}>
        <div className="col-12">
          <label htmlFor="inputEmail4" className="form-label">
            {option ? "New Email" : "Email"}
          </label>
          <input 
            type="email"
            className="form-control"
            placeholder={option ? 'New Email' : 'Email'}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputPassword4" className="form-label">
            {option ? "Create Password" : "Password"}
          </label>
          <input
            type="password"
            className="form-control"
            placeholder={option ? 'New Password' : 'Password'}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            {option ? 'Sign Up' : 'Log In'}
          </button>
          <Link to={option ? '/login' : '/signup'}>
            <p>
              {option ? "Already have an account? Log in here" : "Need an account? Sign up here"}
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginSignup;
