import { Link } from "react-router-dom";

import '../styles/home.scss';

function Home() {
  return (
    <div className="home">
      <div className="text">
        <h1>Welcome</h1>
        {/* do zmiany */}
        <p>My name is Greg, I am full-stack software developer based in Coentry, UK.</p>
        <p> I always look for ways to extend my knowledge and skills, currently I'm learnig Python and PHP.</p>
      </div>
      <div className="links">
        <Link to='/projects'>Projects</Link>
        {/* <Link to='/contact'>Contact</Link> */}
      </div>
    </div>
  );
}

export default Home;