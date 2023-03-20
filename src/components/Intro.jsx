import React from "react";
import Introimage from "../images/intro.png";
import Dashboard2 from "../images/dashboard2.png";

const Intro = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 ">
      <div>
        <div className="font-bold md:text-5xl sm:text-2xl pt-7 mt-40 ml-20">
          Improving Productivity,
        </div>
        <div className="font-bold md:text-5xl sm:text-2xl pt-5 ml-20">
          Enhancing Connectivity
        </div>
        <div className="md:text-lg sm:text-base pt-5 ml-20">
          Apprecial creates innovative digital products that make your
          day-to-day life more manageable.
        </div>
        <a href="#" target="_blank" rel="noreferrer">
          <img className="ml-6" src={Dashboard2} alt="Dashboard" />
        </a>
      </div>
      <div>
        <img
          className="ml-0 mt-14 pl-5 m-0"
          src={Introimage}
          alt="Introimage"
        />
      </div>
    </div>
  );
};

export default Intro;
