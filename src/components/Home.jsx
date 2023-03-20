import React from 'react';
import Main from '../images/main.png';
import Navbar from './Navbar';
import Intro from './Intro';


const Home = () => {
  return (
    <>
    <Intro/>
    <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-10'>
        <div>
        <img className='mx-6 ml-20 w-96 sm:h-60' src={Main} alt='Dashboard'/>
        </div>
        <div>
            <h1 className='font-bold md:text-5xl sm:text-3xl pt-7 my-5'>What is Apprecial?</h1>
       <div className='md:text-base sm:text-base my-5'>Apprecial is a Software-As-A-Service (SAAS) internet company dedicated to developing innovative applications that make your everyday life easier and more enjoyable.</div>
       <div className='md:text-base sm:text-base my-5'>At Apprecial, we are pushing the boundaries of innovation with our cutting-edge applications designed to enhance your productivity. By fusing inspiration and dedication, we're revolutionising the way you interact with the internet, taking your experience to new heights. With facility, faculty, and fecundity, our goal is to not only modernise your digital persona and presence, but also to inspire a positive change in your personal and professional competencies.</div>
        </div>
    </div>
    </>
  )
}

export default Home