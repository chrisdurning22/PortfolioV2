import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faSquareInstagram, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

const Socials = () => (
  <div>
    <div className="socials-wrapper">
      <a className='fade-item' style={{ animationDelay: '600ms'}} title="Github" href="https://github.com/chrisdurning22?tab=repositories">
        <FontAwesomeIcon icon={faSquareGithub} size={"3x"} />
      </a>
      <a className='fade-item' style={{ animationDelay: '700ms'}} title="Linkedin" href="https://www.linkedin.com/in/chris-durning-9186b5169/">
        <FontAwesomeIcon icon={faLinkedin} size={"3x"} />
      </a>
      <a className='fade-item' style={{ animationDelay: '800ms'}} title="Instagram" href="https://www.instagram.com/chrisdurning96/?hl=en">
        <FontAwesomeIcon icon={faSquareInstagram} size={"3x"} />
      </a>
      <a className='fade-item' style={{ animationDelay: '900ms'}} title="StackOverflow" href="https://ai.stackexchange.com/users/15356/chris">
        <FontAwesomeIcon icon={faStackOverflow} size={"3x"} />
      </a>
    </div>
  </div>
);

export default Socials;
