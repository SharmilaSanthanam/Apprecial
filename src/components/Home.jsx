import React from "react";
import Main from "../images/main.png";
import Intro from "./Intro";

const Home = () => {
  return (
    <>
      <Intro />
      <div className="bg-gradient-to-b from-amber-50/25 to-amber-100/75">
        <div className="lg:mx-40 my-10  grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-10">
          <div>
            <img
              className=" lg:my-20 w-96 sm:h-60"
              src={Main}
              alt="Dashboard"
            />
          </div>
          <div className="mx-3">
            <h1 className=" font-bold md:text-5xl sm:text-3xl pt-7 my-5">
              What is Apprecial?
            </h1>
            <div className="md:text-base sm:text-base my-5">
              Apprecial is a Software-As-A-Service (SAAS) internet company
              dedicated to developing innovative applications that make your
              everyday life easier and more enjoyable.
            </div>
            <div className="md:text-base sm:text-base my-5">
              At Apprecial, we are pushing the boundaries of innovation with our
              cutting-edge applications designed to enhance your productivity.
              By fusing inspiration and dedication, we're revolutionising the
              way you interact with the internet, taking your experience to new
              heights. With facility, faculty, and fecundity, our goal is to not
              only modernise your digital persona and presence, but also to
              inspire a positive change in your personal and professional
              competencies.
            </div>
          </div>
        </div>
        <div class="mx-16 my-16 sm:p-5 grid lg:grid-cols-3 lg:gap-4 md:grid-cols-1 sm:grid-cols-1">
          <div class=" shadow-lg md:w-5/12 lg:w-full lg:h-full  rounded-3xl my-3 md:my-10 m-1 bg-white bg-no-repeat bg-center bg-[url('../public/image/back3.png')] ">
            <h1 class="sm:text-lg lg:text-4xl text-black font-bold m-5 flex justify-center">
              Mission
            </h1>

            <p class="text-slate-400 m-8 mx-10 text-center tracking-wide ">
              To provide eclectic, energetic, efficacious digital products that
              empower people to improve their productivity, achieve their goals,
              and bolster both personal and business lives.
            </p>
          </div>
          <div class=" shadow-lg md:w-5/12 lg:w-full lg:h-full  rounded-3xl my-3 md:my-10 m-1 bg-white bg-no-repeat bg-center  bg-[url('../public/image/back2.png')] ">
            <h1 class="sm:text-lg lg:text-4xl text-black font-bold m-5 flex justify-center">
              Vision
            </h1>

            <p class="text-slate-400 m-8 mx-10 text-center tracking-wide">
              To improve productivity and enhance, connectivity worldwide by
              leveraging the power of the internet.
            </p>
          </div>
          <div class=" shadow-lg md:w-5/12 lg:w-full lg:h-full rounded-3xl my-3 md:my-10 m-1 bg-white bg-no-repeat bg-center  bg-[url('../public/image/back1.png')]">
            <h1 class="sm:text-lg lg:text-4xl text-black font-bold m-5 flex justify-center">
              Our Values
            </h1>

            <p class="text-slate-400  mx-10 text-center tracking-wide">
              At Apprecial, we believe our users are our greatest asset. By
              providing exceptional service and embracing customer feedback, we
              prioritise what matters and hold the key to creating solutions
              that revolutionise online experiences.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
