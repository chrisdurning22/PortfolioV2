import React, { FC } from "react";

interface AboutProps {}

const About: FC<AboutProps> = () => (
  <section className='about fade-item' style={{ animationDelay: '1000ms'}} id="about">
    <div className="section-child">
      <h3>About Me &#128075;</h3>
      <p>
      I am a dedicated and innovative software engineer with 4 years of professional experience in crafting captivating and high-performance web applications. I have a deep understanding of modern web technologies, including, HTML5, CSS3 and Javascript (also Typescript) as well as proficiency in popular frontend frameworks such as React and Angular. Although most of my experience comes from working on the frontend, I have also spent a great deal of time developing RESTful API’s. Professionally I have used ASP.NET Core (C#) to develop API's but I have also worked with NodeJS and Express.js through the years on some personal projects.
      </p>
    </div>
  </section>
);

export default About;
