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
      <div class={buttonActiveClass} id="toggle" onClick={handleMenuOpen}>
        <span class="top"></span>
        <span class="middle"></span>
        <span class="bottom"></span>
      </div>
      <div class={overlayOpenClass} id="overlay">
        <nav class="overlay-menu">
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