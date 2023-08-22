import React from "react";

import { Element } from "react-scroll";
import LeadSquaredLogo from "./../images/LeadSquaredLogo.png";

function Experience() {
  return (
    <Element name="experience">
      <div className="text-gray-300 w-full  sm:mb-44">
        <span className="flex text-xl sm:text-2xl justify-center sm:justify-start md:justify-left font-semibold">
          Experience
        </span>
        <div className="flex flex-col sm:flex-row sm:space-x-8 mt-6 px-4 md:p-6">
          <div className="w-10">
            <img className="w-8 sm:w-12" src={LeadSquaredLogo} alt="LeadSquaredLogo" />
          </div>
          <div className="flex flex-1 flex-col space-y-2 border-blue-400 border-l-0 sm:border-l-2  sm:px-6 py-6 sm:py-0">
            <h1>Software Development Engineer</h1>
            <span className="text-sm text-gray-400">Jan, 2021 - Present</span>
            <div className="flex flex-col leading-relaxed">
              <span>- UI developer</span>
              <span>
                -Developed the Widget Flow of pregnancy insurance purchase plateform which is used now by more than 10 subsidiaries and has driven 
customers up by 10% providing an essential service to expecting women.

              </span>
              <div className="flex flex-col">
                <span>
                  - Collaborated with the backend developers on JSON API design and calling the Restful web services using GET,
POST, PUT,DELETE methods.
                </span>
                <span>
                  - Constructed modern powerful frontend architecture involving React, Redux, ES6/ES7 and build system
involving webpack, babel, eslint, sass and other tools.
                </span>
                <span>
                  - Working closely with the design team for building most optimum suitable UX and helping optimizing user flows
                </span>
                <span>
                - Deployed code through CI/CD pipelines, ArgoCd, into SIT,UAT environment and Implemented compre
hensive unit testing for components, ensuring robustness and reliability of the platform
                </span>
                <span>
                  - Transformed static designs into dynamic and interactive web experiences by leveraging Reactjs, resulting in a
40% increase in user engagement and a 30% improvement in page load times also Worked on sonarQube issues
and increased code coverage up to 80% to reduce technical debt.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Experience;
