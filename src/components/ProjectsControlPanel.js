import '../styles/projectsControlPanel.scss';

function ProjectsControlPanel({ setLanguage, setStack }) {

  function handleLanguageSet(e) {
    setLanguage(e.target.innerText);
  }

  function handleStackSet(e) {
    setStack(e.target.value);
  }

  return (
    <div className="control-panel">
      <button className="btn all" onClick={handleLanguageSet}>All</button>
      <button className="btn javaScript" onClick={handleLanguageSet}>JavaScript</button>
      <button className="btn python" onClick={handleLanguageSet}>Python</button>
      <button className="btn php" onClick={handleLanguageSet}>PHP</button>
      <select name="stack" id="stack" onChange={handleStackSet}>
        <option vale='' disabled>Stack...</option>
        <option value="All">All</option>
        <option value="front-end">Front-End</option>
        <option value="back-end">Back-End</option>
        <option value="full-stack">Full-Stack</option>
      </select>
    </div>
  );
}

export default ProjectsControlPanel;