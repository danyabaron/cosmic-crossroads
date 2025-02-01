import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';


import VenusMouthOpen from '../assets/venus-art/venus-mouth-open.png';
import MarsGif from '../assets/mars-art/mars-art-official.gif';
import MarsStaticImg from '../assets/mars-art/mars-art.png';
import VenusGifDefault from '../assets/venus-art/venus-default-GIF.gif';
import VenusGifAnnoyed from '../assets/venus-art/venus-annoyed-gif.gif';
import VenusGifSmirk from '../assets/venus-art/venus-smirk-gif.gif';
import VenusGifMouthOpen from '../assets/venus-art/venus-mouth-open-gif.gif';
import SaturnDefault from '../assets/saturn-art/saturn-mouth-open.png';
import JupiterDefault from '../assets/jupiter-art/jupiter-art.png';
import ButtonContainer from '../Components/ButtonContainer';
import AsteroidImg1 from '../assets/asteroid-art/asteroid-angry.png';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger);

   

function ScrollAnimations() 

{


    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".panel",
              scrub: true,
              pin: true,
              start: "top top",
              end: "+=100%"
            }
          });
          
          tl.from(".line", {
            scaleX: 0,
            transformOrigin: "left center",
            ease: "none",
          }, 0) // Start immediately
          .fromTo(".asteroid", 
            { x: "-60vw" }, // Start off-screen to the left
            { x: "0", rotation: -360, ease: "none" }, 
            0 // Start at the same time as the line
          );
        });






    





    return (

        <div className='container'>

        <section class="panel bg-venus-bg-reg w-screen h-screen flex justify-center items-center relative">
            
            
            <div class='line-container w-full h-full flex flex-col gap-2 justify-center items-center'>
                <span class="line w-1/2 h-full p-2 m-auto relative  inline-block bg-main-black"></span>

                {/* Asteroid */}
                <img
                src={AsteroidImg1}
                alt="Asteroid"
                className="asteroid w-15 h-15 object-contain relative "
                />


            </div>
            





        </section>






        <section class='planet-animation1 bg-default-bg w-screen h-screen flex justify-center items-center relative'>
            <h1 className='font-header font-bold text-white text-xl'>animation 2</h1>
        </section>

        </div>
        



    );
}

export default ScrollAnimations;