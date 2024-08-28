import './Login.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5001/api/login', {
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
  }

  return (
    <div>
      <Link to="/">
        <h1 id="login-header">JobTracker</h1>
      </Link>
      <form id='login-form' className="row g-3" action='POST'>
        <div className="col-12">
          <label htmlFor="inputEmail3" className="form-label">Email</label>
          <div className="col-12">
            <input type="email" className="form-control" onChange={(e) => {setEmail(e.target.value)}} placeholder='Email'/>
          </div>
        </div>
        <div className="col-12">
          <label htmlFor="inputPassword3" className="form-label">Password</label>
          <div className="col-12">
            <input type="password" className="form-control" onChange={(e) => {setPassword(e.target.value)}} placeholder='Password'/>
          </div>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleLogin}>Log In</button>
      </form>
    </div>
  );
}

export default Login;
