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
    fontSize: 10,
    fontFamily: 'Cascadia'
  },
}));

const Skills: FC<SkillsProps> = () => (
  <section className='skills fade-item' style={{ animationDelay: '1300ms'}} id="skills">
    <div className="section-child">
      <h3>Skills &#128295;</h3>
      <div className='skills-wrapper'>
        <IconContext.Provider value={{color: 'ivory', size: '40px'}}>
          <div style={{width: '106px'}}>
            <h4 style={{textAlign: 'center'}}>Languages</h4>
            <ul className='skills-list'>
              <LightTooltip title="Javascript" placement="right">
                <li><SiJavascript/></li>
              </LightTooltip>
              <LightTooltip title="Typescript" placement="right">
                <li><SiTypescript/></li>
              </LightTooltip>
              <LightTooltip title="HTML" placement="right">
                <li><TiHtml5/></li>
                </LightTooltip>
              <LightTooltip title="CSS" placement="right">
                <li><DiCss3/></li>
              </LightTooltip>
              <LightTooltip title="LESS" placement="right">
                <li><SiLess/></li>
              </LightTooltip>
              <LightTooltip title="C#" placement="right">
                <li><SiCsharp/></li>
              </LightTooltip>
              <LightTooltip title="Java" placement="right">
                <li><FaJava/></li>
              </LightTooltip>
              <LightTooltip title="SQL" placement="right">
                <li><TbSql/></li>
              </LightTooltip>
              <LightTooltip title="Python" placement="right">
                <li><DiPython/></li>
              </LightTooltip>
            </ul>
          </div>
          <div style={{width: '106px'}}>
            <h4 style={{textAlign: 'center'}}>Frameworks</h4>
            <ul className='skills-list'>
              <LightTooltip title="Angular" placement="right">
                <li><FaAngular/></li>
              </LightTooltip>
              <LightTooltip title="ASP.NET Core & ASP.NET MVC" placement="right">
                <li><SiDotnet/></li>
              </LightTooltip>
              <LightTooltip title="React" placement="right">
                <li><FaReact/></li>
              </LightTooltip>
              <LightTooltip title="Vue.js" placement="right">
                <li><FaVuejs/></li>
              </LightTooltip>
              <LightTooltip title="Django & Django REST" placement="right">
                <li><DiDjango/></li>
              </LightTooltip>
              <LightTooltip title="Node.js" placement="right">
                <li><FaNode/></li>
              </LightTooltip>
              <LightTooltip title="Jasmine" placement="right">
                <li><SiJasmine/></li>
              </LightTooltip>
            </ul>
          </div>
          <div style={{width: '106px'}}>
            <h4 style={{textAlign: 'center'}}>Tools</h4>
            <ul className='skills-list'>
              <LightTooltip title="Git" placement="right">
                <li><BsGithub/></li>
              </LightTooltip>
              <LightTooltip title="Webpack" placement="right">
                <li><SiWebpack/></li>
              </LightTooltip>
              <LightTooltip title="Azure Dev Ops" placement="right">
                <li><SiAzuredevops/></li>
              </LightTooltip>
              <LightTooltip title="Netlify" placement="right">
                <li><SiNetlify/></li>
              </LightTooltip>
              <LightTooltip title="Heroku" placement="right">
                <li><SiHeroku/></li>
              </LightTooltip>
              <LightTooltip title="Github Actions" placement="right">
                <li><SiGithubactions/></li>
              </LightTooltip>
              <LightTooltip title="MySQL" placement="right">
                <li><SiMysql/></li>
              </LightTooltip>
              <LightTooltip title="PostgreSQL" placement="right">
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
