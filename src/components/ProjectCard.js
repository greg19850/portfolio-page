import '../styles/project-card.scss';


import { FaExternalLinkAlt } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';



const gitHubIco = <FiGithub className="tech-icon github" />;
const linkIco = <FaExternalLinkAlt className="tech-icon link" />;

function ProjectCard({ project }) {

  return (
    <div className="project-card">
      <a href={project.link1} target="_blank" rel="noreferrer" >
        <div className="project-img-container">
          <img src={project.img} alt={project.title} />
        </div>
      </a>
      <div className="project-content-container">
        <h3>{project.title}</h3>
        <div className="project-description">
          <p>{project.text}</p>
        </div>
        <ul className="tech">
          {project.technologies.map(tech => {
            return <li key={Math.random() * 1000}>{tech}</li>;
          })}
        </ul>
        <ul className="project-links">
          <li><a href={project.link1} target="_blank" rel="noreferrer">{linkIco}</a></li>
          <li><a href={project.link2 && project.link2} target="_blank" rel="noreferrer">{project.link2 && gitHubIco}</a></li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;