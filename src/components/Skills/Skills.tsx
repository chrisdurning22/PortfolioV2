import React, { FC } from 'react';
import { SiJavascript, SiTypescript, SiLess, SiCsharp, SiDotnet,
  SiJasmine, SiWebpack, SiAzuredevops, SiNetlify, SiHeroku, SiGithubactions, SiMysql, SiPostgresql } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { DiCss3, DiPython, DiDjango } from "react-icons/di";
import { FaJava, FaAngular, FaReact, FaVuejs, FaNode } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { IconContext } from "react-icons";

interface SkillsProps {}

const Skills: FC<SkillsProps> = () => (
  <section className='skills fade-item' style={{ animationDelay: '1300ms'}} id="skills">
    <div className="section-child">
      <h3>Skills &#128295;</h3>
      <div className='skills-wrapper'>
        <IconContext.Provider value={{color: 'ivory', size: '25px'}}>
          <div style={{width: '106px'}}>
            <h4 className='margin-bottom-35'>Languages</h4>
            <ul className='skills-list'>
              <div className='skills-item'>
                <li><SiJavascript/></li>&nbsp;
                <label>Javascript</label>
              </div>
              <div className='skills-item'>
                <li><SiTypescript/></li>&nbsp;
                <label>Typescript</label>
              </div>
              <div className='skills-item'>
                <li><TiHtml5/></li>&nbsp;
                <label>HTML</label>
              </div>
              <div className='skills-item'>
                <li><DiCss3/></li>&nbsp;
                <label>CSS</label>
              </div>
              <div className='skills-item'>
                <li><SiLess/></li>&nbsp;
                <label>LESS</label>
              </div>
              <div className='skills-item'>
                <li><SiCsharp/></li>&nbsp;
                <label>C#</label>
              </div>
              <div className='skills-item'>
                <li><FaJava/></li>&nbsp;
                <label>Java</label>
              </div>
              <div className='skills-item'>
                <li><TbSql/></li>&nbsp;
                <label>SQL</label>
              </div>
              <div className='skills-item'>
                <li><DiPython/></li>&nbsp;
                <label>Python</label>
              </div>
            </ul>
          </div>
          <div style={{width: '106px'}}>
            <h4 className='margin-bottom-35'>Frameworks</h4>
            <ul className='skills-list'>
              <div className='skills-item'>
                <li><FaAngular/></li>&nbsp;
                <label>Angular</label>
              </div>
              <div className='skills-item'>
                <li><SiDotnet/></li>&nbsp;
                <label>ASP.NET Core & ASP.NET MVC</label>
              </div>
              <div className='skills-item'>
                <li><FaReact/></li>&nbsp;
                <label>React</label>
              </div>
              <div className='skills-item'>
                <li><FaVuejs/></li>&nbsp;
                <label>Vue.js</label>
              </div>
              <div className='skills-item'>
                <li><DiDjango/></li>&nbsp;
                <label>Django</label>
              </div>
              <div className='skills-item'>
                <li><FaNode/></li>&nbsp;
                <label>Node</label>
              </div>
              <div className='skills-item'>
                <li><SiJasmine/></li>&nbsp;
                <label>Jasmine</label>
              </div>
            </ul>
          </div>
          <div style={{width: '106px'}}>
            <h4 className='margin-bottom-35'>Tools</h4>
            <ul className='skills-list'>
              <div className='skills-item'>
                <li><BsGithub/></li>&nbsp;
                <label>Git</label>
              </div>
              <div className='skills-item'>
                <li><SiWebpack/></li>&nbsp;
                <label>Webpack</label>
              </div>
              <div className='skills-item'>
                <li><SiAzuredevops/></li>&nbsp;
                <label>Azure Dev Ops</label>
              </div>
              <div className='skills-item'>
                <li><SiNetlify/></li>&nbsp;
                <label>Netlify</label>
              </div>
              <div className='skills-item'>
                <li><SiHeroku/></li>&nbsp;
                <label>Heroku</label>
              </div>
              <div className='skills-item'>
                <li><SiGithubactions/></li>&nbsp;
                <label>Github Actions</label>
              </div>
              <div className='skills-item'>
                <li><SiMysql/></li>&nbsp;
                <label>MySQL</label>
              </div>
              <div className='skills-item'>
                <li><SiPostgresql/></li>&nbsp;
                <label>PostgreSQL</label>
              </div>
            </ul>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  </section>
);

export default Skills;
