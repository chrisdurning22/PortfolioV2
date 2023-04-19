import React, { FC } from 'react';
import { SiJavascript, SiTypescript, SiLess, SiCsharp, SiDotnet,
  SiJasmine, SiWebpack, SiAzuredevops, SiNetlify, SiHeroku, SiGithubactions, SiMysql, SiPostgresql } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { DiCss3, DiPython, DiDjango } from "react-icons/di";
import { FaJava, FaAngular, FaReact, FaVuejs, FaNode } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { IconContext } from "react-icons";
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';


interface SkillsProps {}

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const Skills: FC<SkillsProps> = () => (
  <section className='skills fade-item' style={{ animationDelay: '1000ms'}} id="skills">
    <div className="section-child">
      <h3>Skills &#128295;</h3>
      <div className='skills-wrapper'>
        <IconContext.Provider value={{color: 'ivory', size: '40px'}}>
          <div>
            <h4>Languages</h4>
            <ul className='skills-list'>
              <LightTooltip title="Javascript" placement="right-start">
                <li><SiJavascript/></li>
              </LightTooltip>
              <LightTooltip title="Typescript" placement="right-start">
                <li><SiTypescript/></li>
              </LightTooltip>
              <LightTooltip title="HTML" placement="right-start">
                <li><TiHtml5/></li>
                </LightTooltip>
              <LightTooltip title="CSS" placement="right-start">
                <li><DiCss3/></li>
              </LightTooltip>
              <LightTooltip title="LESS" placement="right-start">
                <li><SiLess/></li>
              </LightTooltip>
              <LightTooltip title="C#" placement="right-start">
                <li><SiCsharp/></li>
              </LightTooltip>
              <LightTooltip title="Java" placement="right-start">
                <li><FaJava/></li>
              </LightTooltip>
              <LightTooltip title="SQL" placement="right-start">
                <li><TbSql/></li>
              </LightTooltip>
              <LightTooltip title="Python" placement="right-start">
                <li><DiPython/></li>
              </LightTooltip>
            </ul>
          </div>
          <div>
            <h4>Frameworks</h4>
            <ul className='skills-list'>
              <LightTooltip title="Angular" placement="right-start">
                <li><FaAngular/></li>
              </LightTooltip>
              <LightTooltip title="ASP.NET Core & ASP.NET MVC" placement="right-start">
                <li><SiDotnet/></li>
              </LightTooltip>
              <LightTooltip title="React" placement="right-start">
                <li><FaReact/></li>
              </LightTooltip>
              <LightTooltip title="Vue.js" placement="right-start">
                <li><FaVuejs/></li>
              </LightTooltip>
              <LightTooltip title="Django & Django REST" placement="right-start">
                <li><DiDjango/></li>
              </LightTooltip>
              <LightTooltip title="Node.js" placement="right-start">
                <li><FaNode/></li>
              </LightTooltip>
              <LightTooltip title="Jasmine" placement="right-start">
                <li><SiJasmine/></li>
              </LightTooltip>
            </ul>
          </div>
          <div>
            <h4>Tools</h4>
            <ul className='skills-list'>
              <LightTooltip title="Git" placement="right-start">
                <li><BsGithub/></li>
              </LightTooltip>
              <LightTooltip title="Webpack" placement="right-start">
                <li><SiWebpack/></li>
              </LightTooltip>
              <LightTooltip title="Azure Dev Ops" placement="right-start">
                <li><SiAzuredevops/></li>
              </LightTooltip>
              <LightTooltip title="Netlify" placement="right-start">
                <li><SiNetlify/></li>
              </LightTooltip>
              <LightTooltip title="Heroku" placement="right-start">
                <li><SiHeroku/></li>
              </LightTooltip>
              <LightTooltip title="Github Actions" placement="right-start">
                <li><SiGithubactions/></li>
              </LightTooltip>
              <LightTooltip title="MySQL" placement="right-start">
                <li><SiMysql/></li>
              </LightTooltip>
              <LightTooltip title="PostgreSQL" placement="right-start">
                <li><SiPostgresql/></li>
              </LightTooltip>
            </ul>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  </section>
);

export default Skills;
