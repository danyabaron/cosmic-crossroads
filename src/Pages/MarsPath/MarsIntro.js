import React, { useEffect, useState, useRef, use } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import MarsGif from '../../assets/mars-art/mars-art-official.gif';
import SaturnPng from '../../assets/saturn-art/saturn-mouth-open.png';
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
        <div className="flex flex-col gap-8  items-center justify-center min-h-screen bg-default-bg text-white pt-14 px-6">
            {/* Header */}
            <h1 className="text-4xl font-header text-center mt-6 mb-8">
                Welcome to Cosmic Crossroads
            </h1>

            {/* Mars Section */}
            <div className="flex flex-row items-center bg-mars-bg-reg 
            shadow-md drop-shadow-[0_0_10px_rgba(189,53,8,0.8)] rounded-md p-6 mb-8">
                <img src={MarsGif} alt="Mars" className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" />
                <p className="text-center max-w-lg text-white text-md">
                    Your name is Mars. As a Malefic warrior, you are known for your initative, action, strength and power.

                    The zodiac signs that you rule are: Aries & Scorpio. 

                </p>
            </div>

            <section id='malefic' className='flex flex-col items-center justify-center'>
                <h2 className="text-2xl font-header text-center mb-4">What are the Malefic and Benefic Planets?</h2>


                <div id='malefic-description' className='flex flex-col gap-5 justify-center items-center'>
                
                    <h3 className="text-xl font-header text-center mb-4">THE MALEFICS</h3>

                    <div id='malefic-img-container' className='flex flex-row justify-center gap-2 w-full'>
                        <div id='mars' className='flex flex-col gap-2 items-center'>
                            <h3 className='text-md font-header text-white'>MARS</h3>
                            <div className="flex justify-center items-center h-[100px] sm:h-[60px] md:h-[80px] lg:h-[100px]">
                                <img 
                                    src={MarsDefaultPng} 
                                    className='w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]' 
                                    alt="Mars"
                                />
                            </div>
                        </div>
                        <div id='saturn' className='flex flex-col gap-2 items-center'>
                            <h3 className='text-md font-header text-white'>SATURN</h3>
                            <div className="flex justify-center items-center h-[100px] sm:h-[60px] md:h-[80px] lg:h-[100px]">
                                <img 
                                    src={SaturnPng} 
                                    className='w-[180px] sm:w-[108px] md:w-[144px] lg:w-[180px] object-contain transform scale-90' 
                                    alt="Saturn"
                                />
                            </div>
                        </div>
                    </div>
                   


                <div className='flex flex-col gap-3 justify-center items-center'>
                    <div className='w-1/2 flex justify-center drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)] shadow-2xl p-7 bg-main-black '>
                    <p className='font-body text-md'> Malefic planets! That's you. Sound familiar? Maybe not.
                        The Malefic planets tend to bring the more challenging experiences that we may face in our life.
                        The two Malefic planets in our solar system are Mars and Saturn. 
                        Mars loves to fight, and Saturn loves to restrict. Go in an escape room with these two, and you'll probably be begging to get let out. Kidding...




                    </p>
                    

                    </div>

                    <div className='w-1/2 flex  justify-center drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)] shadow-2xl p-7 bg-main-black '>
                        <p className='font-body text-md'>
                            However, we all know life isn't so black and white. While the Malefic planets bring us challenging experiences
                            they also can bring us rewards and growth. You'll make the Malefic planets
                            happy by accepting the challenges they bring, and learning from them.
                        </p>
                    </div>
                    
                    </div>

                </div>
            </section>


            <section id='benefic' className='flex flex-col items-center justify-center'>
                
                <div id='benefic-description' className='flex flex-col justify-center items-center'>
                
                    <h3 className="text-xl font-header text-center mb-4">THE BENEFICS</h3>

                    <div id='benefic-img-container' className='flex flex-row justify-center gap-2 w-full'>
                        <div id='venus' className='flex flex-col gap-2 items-center'>
                            <h3 className='text-md font-header text-white'>VENUS</h3>
                            <div className="flex justify-center items-center h-[100px] sm:h-[60px] md:h-[80px] lg:h-[100px]">
                                <img 
                                    src={VenusDefaultPng} 
                                    className='w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]' 
                                    alt="Venus"
                                />
                            </div>
                        </div>
                        <div id='jupiter' className='flex flex-col gap-2 items-center'>
                            <h3 className='text-md font-header text-white'>JUPITER</h3>
                            <div className="flex justify-center items-center h-[100px] sm:h-[60px] md:h-[80px] lg:h-[100px]">
                                <img 
                                    src={JupiterDefaultPng} 
                                    className='w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]' 
                                    alt="Jupiter"
                                />
                            </div>
                        </div>
                    </div>
                   


                   <div className='flex flex-col gap-3 justify-center items-center'>

                   <div className='w-1/2 flex justify-center drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)] shadow-2xl p-7 bg-main-black '>
                        <p className='font-body text-md'> Benefic planets! Ahhhhh the Benefic planets.
                            Such a good time, these two. The Benefic planets love to bring life's more pleasant and positive experiences.
                            The two Benefic planets in our solar system are Venus and Jupiter.
                            Venus loves to bring pleasure & fun, and Jupiter loves to bring good fortune & abundance.
                            Benefic planets love to have fun, as they love being adorned with life's pleasures. Isn't that so fun?
                            Go to a party with these two, and you'll be partying all night long.


                        </p>

                    </div>

                    <div className='w-1/2 flex justify-center drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)] shadow-2xl p-7 bg-main-black '>
                        <p className='font-body text-md'> Now Benefic planets love to bring the fun, but what happens when you can 
                            get lost in the fun? You'll make the Benefic planets happy by enjoying the pleasures they bring, but also by 
                            reminding yourself that everything in moderation is key.


                        </p>

                    </div>

                   </div>
                    
                    

                </div>
            </section>

            <section id='game-description' className='flex flex-col gap-8 items-center justify-center'>
                <h3 className='font-header text-xl'>Okay... so what now?</h3>

                <div id='mars-header' className='flex flex-row gap-2 justify-center items-center bg-mars-bg-reg rounded-lg
                drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)] shadow-2xl p-7'>

                    <img 
                        src={MarsGif} 
                        className='w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]' 
                        alt="Mars"
                    />
                    <p className='font-body text-md text-white'>
                         Wait.. so that's me? Mars?

                    </p>
                </div>



                <div className='w-1/2 flex justify-center drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)] shadow-2xl p-7 bg-main-black '>
                    <p className='font-body text-md text-white'>
                        Now that you've learned a little bit about the Benefic and Malefic planets,
                        it's time to actually experience them. Remember that your name is Mars, and you are a Malefic planet.

                    </p>
                </div>

                <div className='w-1/2 flex justify-center drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)] shadow-2xl p-7 bg-main-black '>
                    <p className='font-body text-md text-white'>
                        There's currently a group of asteroids heading straight to the solar system. 
                        As Mars, you must go to your fellow Benefic planets, and hear what they think we should 
                        do about the incoming asteroid attack. 
                        
                    </p>
                </div>
                    
                <div className='w-1/2 flex justify-center drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)] shadow-2xl p-7 bg-main-black '>
                    <p className='font-body text-md text-white'>
                        Throughout this experience, you can decide if you want to team up with your fellow Benefic planets,
                        or if you want to fight the asteroids solo. The choice is yours. Have fun in there! Try not to fight too much...
                        
                    </p>
                </div>

                


            </section>

            {/* Enter Button */}
            <button
                onClick={handleEnterClick}
                className="mt-10 mb-12 px-6 py-3 text-white font-semibold rounded-lg shadow-lg bg-button-blue transition-transform"
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