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
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;