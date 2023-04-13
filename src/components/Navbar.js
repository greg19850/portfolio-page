import { Link } from "react-router-dom";

import logo from '../img/logo1.png';

import '../styles/navbar.scss';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">
          <div className="img-container">
            <img src={logo} alt="" />
          </div>
          <h3>Greg Mrowczynski</h3>
        </div>
      </Link>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        {/* <Link to="/contact">Contact</Link> */}
      </div>
    </div>
  );
}

export default Navbar;