import React, { FC, RefObject } from "react";

interface AboutProps {}

const About: FC<AboutProps> = () => (
  <section className='about fade-item' style={{ animationDelay: '1400ms'}} id="about">
    <div className="section-child">
      <h3>About Me &#128075;</h3>
      <p>I am a software developer looking for a new challenge. My passion is web development. Most of my experience comes from creating front-end applications using modern technologies. I am willing to work hard, adapt to change and improve my skill set through continuous learning. I will be moving to Sydney on the 1st of May and my plan is to stay out there for a few years. I am on the working holiday visa so I will be seeking sponsorship.</p>
    </div>
  </section>
);

export default About;
