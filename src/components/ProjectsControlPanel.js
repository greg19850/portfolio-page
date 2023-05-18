import '../styles/projectsControlPanel.scss';

function ProjectsControlPanel({ setStack }) {

  function handleStackSet(e) {
    setStack(e.target.id);
  }

  return (
    <div className="control-panel">
      <button id='All' className="btn all" onClick={handleStackSet}>All Projects</button>
      <button id='full-stack' className="btn fullStack" onClick={handleStackSet}>Full-Stack Projects</button>
      <button id='front-end' className="btn frontEnd" onClick={handleStackSet}>Front-End Projects</button>
      <button id='back-end' className="btn backEnd" onClick={handleStackSet}>Back-End Projects</button>
    </div>
  );
}

export default ProjectsControlPanel;