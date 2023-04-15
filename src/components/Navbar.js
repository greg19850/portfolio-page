import { Link } from "react-router-dom";

import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";

import logo from '../img/logo1.png';

import '../styles/navbar.scss';

function Navbar() {
  return (
    <div className="navbar">
      <Link className="logo" to="/">
        <div className="img-container">
          <img src={logo} alt="" />
        </div>
        <h3>Greg Mrowczynski</h3>
      </Link>
      <MenuDesktop />
      <MenuMobile />
    </div>
  );
}

export default Navbar;