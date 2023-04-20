import { useState, useEffect } from 'react';

import ProjectCard from './ProjectCard';
import projects from './ProjectsList';

import '../styles/projectsContainer.scss';

function ProjectsContainer({ language, stack }) {
  const [projectsList, setProjectsList] = useState(projects);

  useEffect(() => {
    filterProjects(language, stack);
  }, [language, stack]);


  function filterProjects(language, stack) {
    if (language === 'All' && stack === 'All') {
      setProjectsList(projects);
    } else if (language === 'All') {
      const filteredAll = projects.filter(project => project.stack === stack);

      setProjectsList(filteredAll);
    } else if (stack === 'All') {
      const filtered = projects.filter(project => project.language.includes(language));

      setProjectsList(filtered);
    } else {
      const filtered = projects.filter(project => (
        project.language.includes(language) && project.stack === stack
      ));

      setProjectsList(filtered);
    }
  }

  const project = projectsList.map(project => {
    return <ProjectCard key={project.id} project={project} />;
  });

  const info = <p className='info'>More {language} projects coming soon</p>;

  return (
    <div className="projects-container">
      <h2>Here is some of my work examples</h2>
      {projectsList.length !== 0 ? project : info}
    </div>
  );
}

export default ProjectsContainer;