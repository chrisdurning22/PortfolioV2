import React, { FC } from 'react';
import { SiJavascript, SiTypescript, SiLess, SiCsharp, SiDotnet,
  SiJasmine, SiWebpack, SiAzuredevops, SiNetlify, SiHeroku, SiGithubactions, SiMysql, SiPostgresql } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { DiCss3, DiPython, DiDjango } from "react-icons/di";
import { FaJava, FaAngular, FaReact, FaVuejs, FaNode } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";


interface SkillsProps {}

const Skills: FC<SkillsProps> = () => (
  <section className='about fade-item' style={{ animationDelay: '1000ms'}} id="about">
    <div className="section-child">
      <h3>Skills &#128295;</h3>
      <div className='skills-wrapper'>
        <div>
          <h4>Languages</h4>
          <ul>
            <li title='javascript'><SiJavascript/></li>
            <li><SiTypescript/></li>
            <li><TiHtml5/></li>
            <li><DiCss3/></li>
            <li><SiLess/></li>
            <li><SiCsharp/></li>
            <li><FaJava/></li>
            <li><TbSql/></li>
            <li><DiPython/></li>
          </ul>
        </div>
        <div>
          <h4>Frameworks</h4>
          <ul>
            <li><FaAngular/></li>
            <li><SiDotnet/></li>
            <li><FaReact/></li>
            <li><FaVuejs/></li>
            <li><DiDjango/></li>
            <li><FaNode/></li>
            <li><SiJasmine/></li>
          </ul>
        </div>
        <div>
          <h4>Tools</h4>
          <ul>
          <li><BsGithub/></li>
          <li><SiWebpack/></li>
          <li><SiAzuredevops/></li>
          <li><SiNetlify/></li>
          <li><SiHeroku/></li>
          <li><SiGithubactions/></li>
          <li><SiMysql/></li>
          <li><SiPostgresql/></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
