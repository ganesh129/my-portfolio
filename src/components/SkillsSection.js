import React from "react";
import HTMLIcon from "./../images/htmlIcon.png";
import CSSIcon from "../images/cssIcon.png";
import JsIcon from "../images/jsicon.webp";
import ReactIcon from "../images/reactIcon.png";
import NodejsIcon from "../images/Nodejs.png";
import GithubIcon from "../images/githubIcon.png";
import TailwindIcon from "../images/tailwindlogo.png";
import SqlIcon from "../images/sqlIcon.png";
import MongoDb from "../images/mongodb.png";
import { Element } from "react-scroll";

function SkillsSection() {
  return (
    <Element name="skills">
      <div id="skills" className="flex w-full h-auto mb-6 sm:mb-44 py-5">
        <div className="flex flex-col w-full ">
          <span className="text-white text-xl sm:text-2xl flex justify-center sm:justify-start">
            My{" "}
            <span style={{ fontWeight: "700" }} className="font-semibold">
              Skills
            </span>
          </span>

          <div
            className="w-full flex justify-center items-center flex-wrap gap-6 p-8 mt-10 rounded"
            style={{ background: "linear-gradient(99deg, #171b2c 0%, rgba(18, 19, 24, 0) 100%)" }}
          >
            <img src={HTMLIcon} width="60" alt="Icons" />
            <img src={CSSIcon} width="60" alt="Icons" />
            <img src={JsIcon} width="60" alt="Icons" />
            <img src={ReactIcon} width="60" alt="Icons" />
            <img src={NodejsIcon} width="60" className="h-16" alt="Icons" />      
             <img src={TailwindIcon} width="60" alt="Icons" />
             <img src={SqlIcon} width="60" alt="Icons" />
             <img src={MongoDb} width="60" alt="Icons" />
             <img src={GithubIcon} width="60" alt="Icons" />  
          </div>
        </div>
      </div>
    </Element>
  );
}

export default SkillsSection;
