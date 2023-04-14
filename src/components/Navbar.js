import { Link } from "react-router-dom";

import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";

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
      <MenuDesktop />
      <MenuMobile />
    </div>
  );
}

export default Navbar;