import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiMaildotru } from 'react-icons/si';

import '../styles/socials.scss';

const githubIco = <FiGithub className="social-icon github" />;
const linkedinIco = <FaLinkedinIn className="social-icon linkedin" />;
const emailIco = <SiMaildotru className="social-icon email" />;



const Socials = () => {

  return (
    <div className="contact">
      <div className="socials">
        <a href="mailto:greg19850@gmail.com" target="_blank" rel="noreferrer">
          {emailIco}
        </a>
        <a href="https://linkedin.com/in/greg-mrowczynski" target="_blank" rel="noreferrer">
          {linkedinIco}
        </a>
        <a href="https://github.com/greg19850" target="_blank" rel="noreferrer">
          {githubIco}
        </a>
      </div >
      <div className="social-after-line"></div>
      {/* <div className="email">
        <a href="mailto:greg19850@gmail.com" target="_blank" rel="noreferrer">
          greg19850@gmail.com
        </a>

      </div>
      <div className="email-after-line"></div> */}
    </div>
  );
};

export default Socials;