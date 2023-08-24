import React from "react";
import { Link } from "react-scroll";

function Intro() {
  return (
    <div className="flex flex-col h-screen text-white justify-center items-center">
      <h1 className="relative font-semibold text-center md:text-5xl sm:text-3xl text-xl -mt-28">
        Hi 👋 I am <span style={{ color: "#5A69DE" }}>Ganesh Kumar</span>
      </h1>
      <span className="mt-4 font-normal text-center text-sm sm:w-4/5">
      A software developer with a passion for learning and creating. For the past few years, I have been building optimized & responsive websites and frontend applications.
      </span>
      <div className="flex space-x-6 mt-3">
        <a
          href="https://docs.google.com/document/d/1t95xi0_ana5oRHxLdgVJl3QtfIw0L3bH/edit"
          target="_blank"
          rel="noreferrer"
        >
          <button
            className="text-gray-200 mt-4 flex  mx-auto md:mx-0 transition-transform duration-300 transform hover:scale-105 text-sm w-32 sm:w-40"
            style={{
              background:
                "linear-gradient(89deg, #9a5cff 0%, hsl(228, 64%, 58%) 100%)",
              borderRadius: "40px",
              padding: "8px",
              justifyContent: "center",
            }}
          >
            View Resume
          </button>
        </a>
        <Link to="contactMe" smooth={true}>
          <button
            className="bg-gray-200 text-gray-900 mt-4 flex  mx-auto md:mx-0 transition-transform duration-300 transform hover:scale-105 w-32 sm:w-40"
            style={{
              borderRadius: "40px",
              padding: "8px",
              justifyContent: "center",
            }}
          >
            Contact Me
          </button>
        </Link>
      </div>
      <div className="flex flex-col space-y-3 mt-16 absolute bottom-10">
        <p className="text-gray-400">Connect with me in any of the below</p>
        <div className="flex space-x-8 mb-8 mx-auto md:mx-0 justify-center">
          <a
            href="http://github.com/ganesh129"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="fab fa-github  text-gray-300 transform transition-all hover:scale-110"
              style={{ fontSize: "24px" }}
            ></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ganesh-kumar-singh/"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="fab fa-linkedin-in text-gray-300 transform transition-all hover:scale-110"
              style={{ fontSize: "24px" }}
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Intro;
