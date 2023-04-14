import { Link } from "react-router-dom";

function MenuDesktop() {
  return (
    <div className="menu-desktop">
      <Link to="/">Home</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/projects">Projects</Link>
      {/* <Link to="/contact">Contact</Link> */}
    </div>
  );
}

export default MenuDesktop;