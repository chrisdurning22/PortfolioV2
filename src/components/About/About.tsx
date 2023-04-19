import React, { FC } from "react";

interface AboutProps {}

const About: FC<AboutProps> = () => (
  <section className='about fade-item' style={{ animationDelay: '1000ms'}} id="about">
    <div className="section-child">
      <h3>About Me &#128075;</h3>
      <p>I am a software developer looking for a new challenge. My passion is web development. Most of my experience comes from creating front-end applications using modern technologies. I am willing to work hard, adapt to change and improve my skill set through continuous learning.</p>
    </div>
  </section>
);

export default About;
