import React, { FC } from 'react';
import neuralLargeImage from '../../images/neural-jump-1274x664.png'
import answerBoxImage from '../../images/answer.png'
import portfolioOneImage from '../../images/portfolio-v1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => (
    <section className='projects fade-item' id='projects' style={{ animationDelay: '1600ms'}}>
      <div className='section-child'>
        <h3>Projects &#128187;</h3>
        <div>
          <h4>Portfolio Website v1</h4>
          <div className='project-image-wrapper'>
            <img
              style={{textAlign: 'left', maxWidth: '100%'}}
              src={portfolioOneImage}
              alt="neural jump project"
            />
            <p className='project-image-desc'>
              My old portfolio website. Consists of a React frontend and Django backend. It uses pyJWT for authentication. When logged in I can add, update and delete the sections of my portfolio site. This site is currently down as Heroku have removed their free tier :(.
            </p>
          </div>
          <div className='stack'>
            <p>React</p>
            <p>Typescript</p>
            <p>Django & Django REST Framework</p>
            <p>python</p>
            <p>PostgreSQL</p>
            <p>pyJWT</p>
            <p>Github Actions (CI/CD)</p>
            <p>Netlify</p>
            <p>Heroku</p>
            <p>Jest</p>
          </div>
          <div className='github-link-wrapper'>
          <h5 className='no-margin-bottom'>Check out the code: &nbsp;</h5>
            <a href="https://github.com/chrisdurning22/personal-website">
              <FontAwesomeIcon icon={faGithub} size={"2x"} />
            </a>
          </div>
        </div>
        <div className='margin-top-70'>
          <h4>Neural Jump</h4>
          <div className='project-image-wrapper shadow'>
            <img
              style={{textAlign: 'left', maxWidth: '100%'}}
              src={neuralLargeImage}
              alt="neural jump project"
            />
            <p className='project-image-desc'>
              I constructed a neuro-evolution algorithm which combines neural networks and genetic theory to solve reinforcement learning problems. To display my algorithms ability I created a 2D arcade game using the unity gaming engine. The game consists of a robot running at a constant rate of speed and jumping over incoming obstacle’s. As the difficulty levels increase so too does the running speed of the robot, while the distance between obstacles descreases giving the player less time to react.
            </p>
          </div>
          <div className='stack'>
            <p><a href="https://nn.cs.utexas.edu/downloads/papers/stanley.ec02.pdf">NEAT</a></p>
            <p>The Unity Gaming Framework</p>
            <p>C#</p>
            <p>NUnit</p>
            <p>Moq</p>
          </div>
          <div className='github-link-wrapper'>
            <h5 className='no-margin-bottom'>Check out the code: &nbsp;</h5>
            <a href="https://github.com/chrisdurning22/neural-jump">
              <FontAwesomeIcon icon={faGithub} size={"2x"} />
            </a>
          </div>
        </div>
        <div className='margin-top-70'>
          <h4>Answer Box</h4>
          <div className='project-image-wrapper'>
            <img
              style={{textAlign: 'left', maxWidth: '100%'}}
              src={answerBoxImage}
              alt="neural jump project"
            />
            <p className='project-image-desc'>
              It’s essentially Stackoverflow for leaving cert exam questions. This application aims to help leaving cert students better study for their upcoming examinations by allowing them to collaborate and help one another. Users of this app have the ability to post answers to leaving cert questions, observe answers posted by other users and to either upvote or downvote answers giving their opinion on the correctness of the answer. Answers with the highest number of upvotes would be considered 'good' and students could use these in preparation for their exams.
            </p>
          </div>
          <div className='stack'>
            <p>Android Framework</p>
            <p>Java</p>
            <p>Linux</p>
            <p>Apache</p>
            <p>MySQL</p>
            <p>PHP</p>
            <p>JUnit</p>
          </div>
          <div className='github-link-wrapper'>
          <h5 className='no-margin-bottom'>Check out the code: &nbsp;</h5>
            <a href="https://github.com/chrisdurning22/answer-box">
              <FontAwesomeIcon icon={faGithub} size={"2x"} />
            </a>
          </div>
        </div>  
      </div>
    </section>
);

export default Projects;
