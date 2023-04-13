import { Link } from "react-router-dom";


import '../styles/home.scss';
// import '../styles/home.css';

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <div className="text top">
          <div>
            <h1 className="span">Welcome</h1>
            {/* do zmiany */}
            <p className="span">My name is Greg, I am full-stack software developer based in Coentry, UK.</p>
            <p className="span"> I always look for ways to extend my knowledge and skills, currently I'm learnig Python and PHP.</p>
          </div>
        </div>
        <div className="links bottom">
          <Link to='/projects'>Go to Projects</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;