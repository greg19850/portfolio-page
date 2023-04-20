import { useState } from "react";
import { Link } from "react-router-dom";
// import { slide as Menu } from 'react-burger-menu';

import '../styles/menu-mobile.scss';

function MenuMobile() {
  const [buttonActiveClass, setButtonActiveClass] = useState('button_container');
  const [overlayOpenClass, setOverlayOpenClass] = useState('overlay');

  function handleMenuOpen() {
    if (buttonActiveClass === 'button_container') {
      setButtonActiveClass('button_container active');
      setOverlayOpenClass('overlay open');
    } else {
      setButtonActiveClass('button_container');
      setOverlayOpenClass('overlay');
    }
  };

  return (
    <nav className="menu-mobile">
      <div className={buttonActiveClass} id="toggle" onClick={handleMenuOpen}>
        <span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span>
      </div>
      <div className={overlayOpenClass} id="overlay">
        <nav className="overlay-menu">
          <ul>
            <li><Link className="menu-item" to="/" onClick={handleMenuOpen}>Home</Link></li>
            <li><Link className="menu-item" to="/experience" onClick={handleMenuOpen}>Experience</Link></li>
            <li><Link className="menu-item" to="/skills" onClick={handleMenuOpen}>Skills</Link></li>
            <li><Link className="menu-item" to="/projects" onClick={handleMenuOpen}>Projects</Link></li>
          </ul>
        </nav>
      </div>
    </nav>
  );
}

export default MenuMobile;