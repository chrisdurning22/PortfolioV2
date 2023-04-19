import React, { FC } from "react";

interface AboutProps {}

const About: FC<AboutProps> = () => (
  <section className='about fade-item' style={{ animationDelay: '1000ms'}} id="about">
    <div className="section-child">
      <h3>About Me &#128075;</h3>
      <p>
        I am a software engineer looking for a new challenge. I have
        experience at all levels of the stack. Most of my experience comes
        from creating front-end applications with Javascript frameworks,
        but I also have good experience developing RESTful API's. I am a
        hard worker with a passion for technology. I am always willing to
        adapt to change and improve my skillset through continuous
        learning.
      </p>
    </div>
  </section>
);

export default About;
