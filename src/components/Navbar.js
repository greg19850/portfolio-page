import { Link } from "react-router-dom";

import '../styles/navbar.scss';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h3>Greg Mrowczynski</h3>
      </div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;