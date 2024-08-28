import logo from './photos/JobTracker-.png';
import './Navbar.css';

const Navbar = () => {

  function handlelogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    window.location.href = '/';
  }

  return (
    <nav id="Navbar">
      <img src={logo} id='logo' alt="logo" />
      <div className="nav-links">
        <a className='nav-op' onClick={handlelogout}><button className="btn btn-primary">Logout</button></a>
      </div>
    </nav>
  );
}

export default Navbar;