import React, { useEffect, useState, useRef, use } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import MarsGif from '../../assets/mars-art/mars-art-official.gif';
import MarsDefaultPng from '../../assets/mars-art/mars-art-official.png';
import JupiterDefaultPng from '../../assets/jupiter-art/jupiter-art.png';
import VenusDefaultPng from '../../assets/venus-art/venus-mouth-open.png';
import MarsStats from '../../assets/mars-art/mars-stats.png';
import MarsCloudLong from '../../assets/clouds/mars-cloud-long.png';
import MarsCloudShort from '../../assets/clouds/mars-cloud-short.png';

function MarsIntro({ addCharacter }) {

    const navigate = useNavigate();

    const location = useLocation();
    console.log('Location state in MarsIntro:', location.state);

    const handleEnterClick = () => {
        // add Mars to status bar
        addCharacter('Mars');
        // navigate to mars game / path
        navigate('/mars-game/mars-horizontal-venus');
    };

   
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-default-bg text-white pt-14 px-6">
            {/* Header */}
            <h1 className="text-5xl md:text-6xl font-bold text-red-500 text-center mb-8">
                Mars, Defender of the Solar System
            </h1>

            {/* Mars Section */}
            <div className="flex flex-col items-center mb-8">
                <img src={MarsGif} alt="Mars" className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" />
                <p className="text-center max-w-lg text-lg">
                    Asteroids are hurtling toward the Solar System! Mars, the fearless warrior, 
                    must decide whether to fight alone or ally with Venus or Jupiter to stop the chaos.
                </p>
            </div>

            {/* Venus & Jupiter Options */}
            <div className="flex flex-col md:flex-row gap-12 justify-center items-center mt-8">
                {/* Venus */}
                <div className="flex flex-col items-center">
                    <img src={VenusDefaultPng} alt="Venus" className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" />
                    <h2 className="text-xl md:text-2xl text-pink-400 font-semibold">Venus</h2>
                    <p className="text-center max-w-xs text-sm opacity-80">
                        Venus, the planet of love and harmony, offers balance and strategy in battle.
                    </p>
                </div>

                {/* Jupiter */}
                <div className="flex flex-col items-center">
                    <img src={JupiterDefaultPng} alt="Jupiter" className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" />
                    <h2 className="text-xl md:text-2xl text-yellow-400 font-semibold">Jupiter</h2>
                    <p className="text-center max-w-xs text-sm opacity-80">
                        Jupiter, the planet of wisdom and expansion, provides strength and protection.
                    </p>
                </div>
            </div>

            {/* Enter Button */}
            <button
                onClick={handleEnterClick}
                className="mt-10 px-6 py-3 text-white font-semibold rounded-lg shadow-lg bg-button-blue transition-transform"
            >
                ENTER
            </button>
        </div>
    );
}





        
    //     <div 
    //     className=' bg-cover bg-mars-bg-reg bg-center min-h-screen pt-12 gap-10 flex flex-col items-center pb-10'>

    //            {/* Clouds */}
    //            <div className="absolute inset-0 z-0">
    //             <img
    //                 src={MarsCloudLong}
    //                 alt="Mars Cloud Long"
    //                 className="relative top-20 left-10 w-52"
    //             />
    //             <img
    //                 src={MarsCloudShort}
    //                 alt="Mars Cloud Short"
    //                 className="absolute top-1/3 left-8 w-32"
    //             />
    //             <img
    //                 src={MarsCloudShort}
    //                 alt="Mars Cloud Short"
    //                 className="absolute top-20 right-20 w-32"
    //             />
    //              <img
    //                 src={MarsCloudLong}
    //                 alt="Mars Cloud Long"
    //                 className="absolute top-[420px] left-40 w-52"
    //             />
    //             <img
    //                 src={MarsCloudLong}
    //                 alt="Mars Cloud Long"
    //                 className="absolute top-32 right-[700px] w-52"
    //             />
    //             <img
    //                 src={MarsCloudShort}
    //                 alt="Mars Cloud Short"
    //                 className="absolute bottom-10 left-10 w-32"
    //             />
    //             <img
    //                 src={MarsCloudShort}
    //                 alt="Mars Cloud Short"
    //                 className="absolute bottom-20 right-20 w-32"
    //             />
             
    //             <img
    //                 src={MarsCloudLong}
    //                 alt="Mars Cloud Long"
    //                 className="absolute bottom-1/3 right-10 w-52"
    //             />
    //         </div>
    
    //        <div className="flex flex-row max-w-screen justify-center z-0 items-center gap-10 md:gap-30 lg:gap-42 p-5">
    //             <div className="bg-main-black text-white rounded-md text-xs md:text-sm lg:text-base shadow-md flex items-center justify-center
    //             text-wrap w-full md:w-full lg:w-1/2 m-5 p-4 md:p-10" id="malefic-text">
    //                 <p>
    //                 Based on your answers to the quiz, you have been classified as
    //                 a malefic planet. Malefic planets are planets in traditional astrology that can contribute to some of the more challenging,
    //                 or difficult aspects of life and it’s values.

    //                 </p>
            

    //             </div>
    //             <div id="mars-pic" className="flex flex-col justify-center items-center  m-4 md:m-10">
    //                 <h1 className='text-white font-header text-2xl sm:text-3xl md:text-4xl text-center'>
    //                     MARS
    //                 </h1>
    //                 <img className="w-[100px]  sm:w-[100px]  md:w-[100px]  lg:w-[150px] " src={MarsGif} alt="Mars Gif"/>

    //             </div>
    //        </div>


    //        <div id='mars-facts' className='bg-main-black text-mars-red flex flex-col z-0 items-center shadow-md rounded-md
    //        py-2 px-4 md:px-6 md:py-6 w-3/4'>
    //             <div className='flex flex-col md:flex-col lg:flex-row items-center justify-between gap-10 w-full px-4 py-4'>
    //                 <div id='mars-pic' className='flex flex-col items-center w-1/5'>
    //                     <img className="md:max-w-[100px] h-auto" src={MarsGif} alt="Mars Gif"/>
    //                 </div>
    //                 <div id='mars-text' className='flex flex-col justify-center text-xs md:text-sm lg:text-base'>
    //                     <ul className='space-y-2'>
    //                         <li>
    //                             Planet: Mars 
    //                         </li>
    //                         <li>
    //                             Dignity: Malefic
    //                         </li>
    //                         <li>
    //                             Rules the Zodiacs: Aries & Scorpio
    //                         </li>
    //                         <li>
    //                             Representations: aggression, war, sex, conflict, power, action, desire
    //                         </li>
    //                         <li>
    //                             Color: Red
    //                         </li>
    //                         <li>
    //                             Mars takes a head on approach to situations like these. He thrives on taking action and thinks first before thinking. 
    //                             Some would say that Mars is the energy you feel when you need to fight for something you want.
    //                         </li>
    //                     </ul>

    //                 </div>
    //                 <div id='mars-status' className="flex flex-col items-center w-fit">
    //                     <img className="min-w-[289px]" src={MarsStats} alt="Mars Traits and Status Bar"/>
    //                 </div>

    //             </div>

    //             <div id='enter-button' className='flex justify-center items-center mb-10 mt-5'>
    //                 <button
    //                     className='bg-mars-red text-white font-header py-2 px-8 rounded-md transition duration-300 ease-in-out hover:bg-opacity-55 hover:scale-105'
    //                     onClick={handleEnterClick}>
    //                         ENTER
    //                     </button>

    //             </div>

               

    //        </div>

     
    // </div>

   
export default MarsIntro;