import { Link } from "react-router-dom";


import '../styles/home.scss';
// import '../styles/home.css';

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <div className="text">
          <div>
            <h1 className="span">Hello.</h1>
            <p className="span">My name is Greg, I am software developer based in Coventry, UK.</p>
            <p className="span"> My passions are technology, innovation, and self-develpment. I like turning ideas in real life products.</p>
          </div>
        </div>
        <div className="links">
          <Link to='/projects'>Go to Projects</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;