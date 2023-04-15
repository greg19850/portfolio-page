import { useState } from "react";

import ProjectsControlPanel from "../components/ProjectsControlPanel";
import ProjectsContainer from "../components/ProjectsContainer";

function Projects() {
  const [language, setLnguage] = useState('all');
  const [stack, setStack] = useState('all');


  return (
    <div className="projects">
      <ProjectsControlPanel />
      <ProjectsContainer />
    </div>
  );
}

export default Projects;