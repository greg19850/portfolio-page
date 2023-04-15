import '../styles/projectsControlPanel.scss';

function ProjectsControlPanel() {
  return (
    <div className="control-panel">
      <button className="btn all">All</button>
      <button className="btn javaScript">JavaScript</button>
      <button className="btn python">Python</button>
      <button className="btn php">PHP</button>
      <select name="stack" id="stack">
        <option vale='' disabled>Stack...</option>
        <option value="all">All</option>
        <option value="front-end">Front-End</option>
        <option value="back-end">Back-End</option>
        <option value="full-stack">Full-Stack</option>
      </select>
    </div>
  );
}

export default ProjectsControlPanel;