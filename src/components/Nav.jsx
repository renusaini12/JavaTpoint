import React from 'react'
import style from './nav.module.css'
import { HiMiniHome } from "react-icons/hi2";
import { TfiHtml5 } from "react-icons/tfi";
import { DiPython } from "react-icons/di";
import { FaDatabase } from "react-icons/fa";
import { FaHeadSideVirus } from "react-icons/fa";
import { GiThink } from "react-icons/gi";
import { SiSelenium } from "react-icons/si";

const Nav = () => {
  return (
    <div>
      <div className={`${style.nav}`}>
        <ul>
          <li><HiMiniHome />Home</li>
          <li><DiPython />Python</li>
          <li><i class="fa-brands fa-java"></i>Java</li>
          <li><i class="fa-brands fa-js"></i>JavaScript</li>
          <li><TfiHtml5 />HTML</li>
          <li><i class="fa-solid fa-database"></i>SQL</li>
          <li><i class="fa-brands fa-php"></i>PHP</li>
          <li><i class="fa-solid fa-hashtag"></i>C#</li>
          <li><i class="fa-solid fa-plus"></i>C++</li>
          <li><i class="fa-brands fa-stack-overflow"></i>DS</li>
          <li><FaHeadSideVirus />Aptitude</li>
          <li><GiThink />Reasoning</li>
          <li><SiSelenium />Selenium</li>
          <li><FaDatabase />DBMS</li>
          <li>C</li>
        </ul>
      </div>
    </div>
  )
}

export default Nav