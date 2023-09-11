import React from "react";
import MYPHOTO from "../IMAGES/MYPHOTO.jpg";

const Hero = () => {
  return (
    <div name="Hero" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center items-center text-center text-white">
          <h2 className="text-4xl sm:text-7xl font-bold text-6xl mb-4">
            I'm a React Developer
          </h2>
          <div>
            <a
              href="https://drive.google.com/file/d/1uud68pBRgIeiocLRxg1vvMAb7kAW7v0I/view?usp=drive_link"
              className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="flex mt-8 md:mt-0 md:ml-28">
          <img src={MYPHOTO} alt="My profile" className="rounded-2xl max-w-full md:w-2/5" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
