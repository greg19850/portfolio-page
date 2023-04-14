import mePhoto from '../img/my-photo.png';

import '../styles/experience.scss';

import pdf from '../img/Greg_Mrowczynski_CV.pdf';

function Experience() {
  return (
    <div className="experience">
      <div className="about-me">
        <div className="img-container">
          <img src={mePhoto} alt="me" />
        </div>
        <div className="details-container">
          <h4>Greg Mrowczynski</h4>
          <p>Product-focused Full-stack Developer</p>
        </div>
      </div>
      <div className="about-history">
        <h3>About</h3>
        <p className='about-section'>
          I'm full-stack developer, who enjoys building dynamic, creative products from start to finish. I primarily work with front-end: JavaScript, React, Vue, but also have experience and knowledge of back-end side: Node.js, Express.js, with use of databases, like Mongo.db MySQL or PostgreSQL.
        </p>
        <p className='about-section'>
          I moved to tech industry in 2022, previously working in various manufacturing roles, with last 4 years being Quality Engineer in automotive industry.
        </p>
        <p className='about section'>
          In my opinion most interesting about being a developer is opportunity for constant progress, hence I'm using all my free time to learn new technologies and concepts, currently learning and practicing Python and PHP. Projects section will be soon upaded with my work exmples of these two languages.
        </p>
      </div>
      <div className='work-history'>
        <h3>Work History</h3>
        <ul className='jobs-list'>
          <li className='single-job-element'>
            <p className='job-date'>01/2023 - 04/2023</p>
            <div className="job-details">
              <h4 className='job-name'>Junior Software Developer - Northcoders</h4>
              <p className='job-description'>Intensive industry focused bootcamp, which gave me opportunity to learn best practices in full-stack software development, in agile / pair programming environment. Course improved my problem solving skills, and ability to effectively work in a fast-paced high performance tech team.</p>
              <ul className='job-stack'>
                <li>JavaScript</li>
                <li>React</li>
                <li>Vue</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>PostgreSQL</li>
                <li>MySQL</li>
              </ul>
            </div>
          </li>
          <li className='single-job-element'>
            <p className='job-date'>02/2022 - 01/2023</p>
            <div className="job-details">
              <h4 className='job-name'>Freelance Front-End Web Developer</h4>
              <p className='job-description'>I have worked on front-end web projects for clients, created websites by harnessing HTML, CSS and JavaScript skills. Constantly practicing by building small projects.</p>
              <ul className='job-stack'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <a className='cv-mobile' href={pdf} target="_blank" rel='noreferrer'>Check my Résumé</a>
      <div className="cv-container">
        <a className='cv-desktop' href={pdf} target="_blank" rel='noreferrer'>Check my Résumé</a>
      </div>
      <div className="cv-after-line"></div>
    </div>

  );
}

export default Experience;