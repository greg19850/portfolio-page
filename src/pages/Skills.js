import '../styles/skills.scss';


const languages = ['JavaScript', 'Python', 'PHP (Basics)', 'TypeScript (Basics)'];
const frontEnd = ['HTML', 'CSS', 'JavaScript', 'React', 'Vue', 'SASS', 'Bootstrap'];
const backEnd = ['Python', 'Node', 'Express', 'MySQL', 'PostgreSQL', 'Postman', 'Insomnia'];
const other = ['Poblem Solving', 'Agile', 'Pair Programming', 'Object Oriented Programming', 'Test Driven Development', 'Git', 'Github', 'unittest', 'Jest'];

function Skills() {
  const langSkills = languages.map(element => <li key={element}>{element}</li>);
  const frontEndSkills = frontEnd.map(element => <li key={element}>{element}</li>);
  const backEndSkills = backEnd.map(element => <li key={element}>{element}</li>);
  const otherSkills = other.map(element => <li key={element}>{element}</li>);

  return (
    <div className="skills">
      <h3>My Skills</h3>
      <h4>Languages</h4>
      <ul>
        {langSkills}
      </ul>
      <h4>Front-End</h4>
      <ul>
        {frontEndSkills}
      </ul>
      <h4>Back-End</h4>
      <ul>
        {backEndSkills}
      </ul>
      <h4>Other Skills</h4>
      <ul>
        {otherSkills}
      </ul>
    </div>
  );
}

export default Skills;