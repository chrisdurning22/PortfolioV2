import './App.css';
import Home from './components/Home/Home';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Button } from 'react-bootstrap';
import CV from '../src/assets/shared/ChrisDurningCV2023Sept.pdf'

const App = () => {
  const [navVisible, setNavVisible] = useState(false);
  const [navClass, setNavClass] = useState('nav-invisible');
  const [navCloseButtonClass, setNavCloseButtonClass] = useState('');

  const navToggle = () => {
    setNavVisible(!navVisible); 

    if(navVisible) {
      setNavClass('nav-visible');
      setNavCloseButtonClass('close-button');
    }
    else {
      setNavClass('nav-invisible');
      setNavCloseButtonClass('');
    }
  };

  return (
    <div className="App">
      <ToastContainer />
      <header>
        <nav>
          <div>
            <a className='fade-item' style={{ animationDelay: '0ms'}} href="/#top">&lt;chris.durning&gt;</a>
          </div>
          <button 
            onClick={navToggle} 
            className={'nav-toggle fade-item ' + navCloseButtonClass}
            style={{ animationDelay: '0ms'}}
            aria-controls='primary-nav'>
            <span className='sr-only'>Menu</span>
          </button>
          <ul className={'primary-nav ' + navClass}>
            <li className='fade-item' style={{ animationDelay: '0ms'}}>
              <a href="/#top">
                <span aria-hidden='true'>01.</span>About
              </a>
            </li>
            <li className='fade-item' style={{ animationDelay: '100ms'}}>
              <a href="/#experience">
                <span aria-hidden='true'>02.</span>Experience
              </a>
            </li>
            <li className='fade-item' style={{ animationDelay: '200ms'}}>
              <a href="/#projects">
                <span aria-hidden='true'>03.</span>Projects
              </a>
            </li>
            <li className='fade-item' style={{ animationDelay: '300ms'}}>
              <a href="/#skills">
                <span aria-hidden='true'>04.</span>Skills
              </a>
            </li>
            <li className='fade-item' style={{ animationDelay: '400ms'}}>
              <a href="/#contact">
                <span aria-hidden='true'>05.</span>Contact
              </a>
            </li>
            <li className='fade-item' style={{ animationDelay: '500ms'}}>
              <a href={CV} target="_blank" rel="noopener noreferrer">
                <Button className='resume-button'>Resume</Button>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <Home/>
      <footer>
        <div className='flex-center'>
          <p>© Copyright Chris Durning 2024.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
