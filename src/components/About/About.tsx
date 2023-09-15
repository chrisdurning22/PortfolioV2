import React, { FC } from "react";

interface AboutProps {}

const About: FC<AboutProps> = () => (
  <section className='about fade-item' style={{ animationDelay: '1000ms'}} id="about">
    <div className="section-child">
      <h3>About Me &#128075;</h3>
      <p>
      I am a committed and creative software engineer with four years of professional expertise in designing engaging and efficient web applications. My knowledge encompasses contemporary web technologies like HTML5, CSS3, JavaScript (including TypeScript), and I possess proficiency in leading frontend frameworks such as React and Angular. While my primary experience lies in frontend development, I have dedicated substantial time to building RESTful APIs. In my professional capacity, I have leveraged ASP.NET Core (C#) for API development, although I have also delved into NodeJS and Express.js through various personal projects over the years.
      </p>
    </div>
  </section>
);

export default About;
