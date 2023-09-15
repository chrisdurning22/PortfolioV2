import profilePicture from '../../images/me.jpeg'
import About from '../About/About';
import Socials from '../Socials/Socials';

const Hero = () => (
  <section className='hero'>
  <div className='hero-header'>
    <div className="profile-pic-wrapper fade-item" style={{animationDelay: '100ms'}}>
      <img alt="Me at my college graduation" src={profilePicture}/>
    </div>
    <div className="flex-column">
      <h1 style={{color:'black'}}>
        <div className='fade-item' style={{color:'white', animationDelay: '200ms'}}>Hi, my name is</div><br></br>
        <strong className='fade-item'  style={{color:'#3182CE', animationDelay: '300ms'}}>Chris Durning &#128104;</strong><br></br>
        <div className='fade-item'  style={{color:'white', animationDelay: '400ms'}}>and I'm a</div><br></br>
        <strong className='fade-item' style={{color:'#3182CE', animationDelay: '500ms'}}>Software Engineer &#128187;</strong>

      </h1>
      <div className="socials">
        <Socials/>
      </div>
    </div>
  </div>
  <About/>
</section>
);  

export default Hero;
