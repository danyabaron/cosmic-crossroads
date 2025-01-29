import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import VenusMouthOpen from '../../../assets/venus-art/venus-mouth-open.png';
import MarsGif from '../../../assets/mars-art/mars-art-official.gif';
import MarsStaticImg from '../../../assets/mars-art/mars-art.png';
import VenusGifDefault from '../../../assets/venus-art/venus-default-GIF.gif';
import VenusDefaultPng from '../../../assets/venus-art/venus-default.png';
import VenusGifAnnoyed from '../../../assets/venus-art/venus-annoyed-gif.gif';
import VenusGifSmirk from '../../../assets/venus-art/venus-smirk-gif.gif';
import VenusGifMouthOpen from '../../../assets/venus-art/venus-mouth-open-gif.gif';
import VenusCloudShort from '../../../assets/clouds/venus-cloud-short.png';
import VenusCloudLong from '../../../assets/clouds/venus-cloud-long.png';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import ButtonContainer from '../../ButtonContainer';

import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);



   function ChooseVenusDecision1({ setScreen }) {

      // const solarAnimationRef = useRef(null);

      //    useGSAP(() => {   
      //       gsap.to("#mars-planet", {
      //          motionPath: {
      //          path: "#orbit1", // The Mars orbit line
      //          align: "#orbit1",
      //          alignOrigin: [0.5, 0.5],
      //          autoRotate: false,
      //          },
      //          rotation: 360, // Self-rotation
      //          repeat: -1,
      //          duration: 10, // Full orbit time
      //          ease: "linear",
      //    });
      
      //    // Venus orbit and self-rotation
      //    gsap.to("#venus-planet", {
      //          motionPath: {
      //          path: "#orbit2", // The Venus orbit line
      //          align: "#orbit2",
      //          alignOrigin: [0.5, 0.5],
      //          autoRotate: false,
      //          },
      //          rotation: 360, // Self-rotation
      //          repeat: -1,
      //          duration: 8, // Full orbit time
      //          ease: "linear",
      //    });
      // }, []);
      

 

      const buttons = [
        {
            text: "WHO'S NEXT?",
            style: "mt-8 bg-main-black text-white px-4 py-2 rounded-md shadow-md hover:bg-main-black hover:scale-105 transition duration-300 ease-in-out",
            screen: "MarsHorizontalJupiter"
        }
    ];

         return (
             
                   
                    <div className="bg-venus-bg-reg pt-14 bg-center min-h-screen overflow-x-hidden flex flex-col justify-center items-center">
                        <div id='venus-dialogue' className='absolute left-0 flex flex-row w-fit h-fit top-40 px-6'>
                                    <div id='venus-pic' className='mt-14'>
                                       <img className="w-[100px]  sm:w-[100px]  md:w-[100px]  lg:w-[150px] " src={VenusGifMouthOpen} alt="Venus Gif"/>
                                    </div>
                                    <div id ='venus-text' className='flex w-1/3 h-fit bg-main-black rounded-md text-white font-body text-wrap p-5 text-xs md:text-sm'>
                                    You decided to stick to compromise your Malefic energy with Venus'
                                    benefic energy! Together. you can move forward as a team to solve this crisis.
                                    </div>

                           </div>
                           {/* <div
                              id="solar-animation"
                              ref={solarAnimationRef}
                              className="relative flex  w-1/2 h-[500px] p-6 text-white"
                           > */}

                                {/* SVG Orbits */}
                                 {/* <svg
                                    className="absolute top-0 left-0 w-full h-full"
                                    viewBox="0 0 800 800"
                                    xmlns="http://www.w3.org/2000/svg"
                                 > */}
                                    {/* Mars Orbit */}
                                    {/* <circle
                                       id="orbit1"
                                       cx="400"
                                       cy="400"
                                       r="150"
                                       fill="none"
                                       stroke="white"
                                       strokeWidth="2"
                                    /> */}
                                    {/* Venus Orbit */}
                                    {/* <circle
                                       id="orbit2"
                                       cx="400"
                                       cy="400"
                                       r="250"
                                       fill="none"
                                       stroke="white"
                                       strokeWidth="2"
                                    />
                                 </svg> */}

                                 {/* Mars Planet */}
                                 {/* <div
                                    id="mars-planet"
                                    className="absolute w-10 h-10 flex justify-center items-center"
                                 >
                                    <img
                                       className="w-full h-full object-contain"
                                       src={MarsStaticImg}
                                       alt="Mars"
                                    />
                                 </div> */}

                                 {/* Venus Planet */}
                                 {/* <div
                                    id="venus-planet"
                                    className="absolute w-10 h-10 flex justify-center items-center"
                                 >
                                    <img
                                       className="w-full h-full object-contain"
                                       src={VenusDefaultPng}
                                       alt="Venus"
                                    />
                                 </div>
                                                         
                        </div> */}

                        <div id='button-div' className='absolute right-20 bottom-32'>
                           <ButtonContainer 
                              setScreen={setScreen} 
                              buttons={buttons}
                              containerStyle="custom-container-style"
                              buttonStyle="custom-button-style"
                           />

                        </div>
                        
                    </div>

                    );
    



   }
   
   

   export default ChooseVenusDecision1;
