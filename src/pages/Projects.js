import { useState } from "react";

import ProjectsControlPanel from "../components/ProjectsControlPanel";
import ProjectsContainer from "../components/ProjectsContainer";

function Projects() {
  const [language, setLanguage] = useState('All');
  const [stack, setStack] = useState('All');

  return (
    <div className="projects">
      <ProjectsControlPanel setLanguage={setLanguage} setStack={setStack} />
      <ProjectsContainer language={language} stack={stack} />
    </div>
  );
}

export default Projects;