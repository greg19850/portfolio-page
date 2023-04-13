import { useState } from "react";

import ControlPanel from "../components/ControlPanel";
import ProjectsContainer from "../components/ProjectsContainer";

function Projects() {
  const [language, setLnguage] = useState('all');
  const [stack, setStack] = useState('all');


  return (
    <div className="projects">
      <ControlPanel />
      <ProjectsContainer />
    </div>
  );
}

export default Projects;