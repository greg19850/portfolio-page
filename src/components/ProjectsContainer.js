import { useState, useEffect } from 'react';

import ProjectCard from './ProjectCard';
import projects from './ProjectsList';

import '../styles/projectsContainer.scss';

function ProjectsContainer({ stack }) {
  const [projectsList, setProjectsList] = useState(projects);

  useEffect(() => {
    filterProjects(stack);
  }, [stack]);


  function filterProjects(stack) {
    if (stack === 'All') {
      setProjectsList(projects);
    } else {
      const filtered = projects.filter(project => project.stack === stack);

      setProjectsList(filtered);
    }
  }

  const project = projectsList.map(project => {
    return <ProjectCard key={project.id} project={project} />;
  });

  const info = <p className='info'>More projects coming soon</p>;

  return (
    <div className="projects-container">
      <h2>Here is some of my work examples</h2>
      {projectsList.length !== 0 ? project : info}
    </div>
  );
}

export default ProjectsContainer;