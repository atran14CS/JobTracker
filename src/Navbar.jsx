import logo from './photos/JobTracker-.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav id="Navbar">
      <img src={logo} id='logo' alt="logo" />
      <div className="nav-links">
        <a className='nav-op'><h2>LogOut</h2></a>
      </div>
    </nav>
  );
}

export default Navbar;