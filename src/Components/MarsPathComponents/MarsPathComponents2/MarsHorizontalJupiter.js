import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';



import MarsGif from '../../../assets/mars-art/mars-art-official.gif';
import MarsStaticImg from '../../../assets/mars-art/mars-art.png';

import JupiterDefault from '../../../assets/jupiter-art/jupiter-art.png';
import JupiterGif from '../../../assets/jupiter-art/jupiter-art-gif.gif';
import JupiterAnnoyedGif from '../../../assets/jupiter-art/jupiter-art-annoyed-gif.gif';
import JupiterCloudLong from '../../../assets/clouds/jupiter-cloud-long.png';
import JupiterCloudShort from '../../../assets/clouds/jupiter-cloud-short.png';

import ButtonContainer from '../../ButtonContainer';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);


function MarsHorizontalJupiter({ characters, setScreen }) {

 
    const navigate = useNavigate();
    const container = useRef(null);

    useGSAP(() => {
        const sections = gsap.utils.toArray("section", container.current);
        const containerWidth = sections.length * 100;
    
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            pin: true,
            scrub: 3,
            delay: 0.5,
            markers: true,
            end: containerWidth * 5,
          },
        });
      }, []);



      const handleButtonClick = (buttonText) => {
        console.log("Button clicked, characters:", characters); // Debugging line
        if (buttonText === "Stick with your Malefic") {
          // If only Mars is selected, navigate to MarsSoloEnding
          if (characters.length === 1 && characters.includes("Mars")) {
            navigate("/mars-solo");
          }
          // If Mars and Venus are selected, navigate to MarsVenusEnding
          else if (characters.length === 2 && characters.includes("Mars") && characters.includes("Venus")) {
            navigate("/mars-venus");
          }
        } else if (buttonText === "Compromise with Jupiter") {
          // If Mars and Jupiter are selected, navigate to MarsJupiterEnding
          if (characters.length === 2 && characters.includes("Mars") && characters.includes("Jupiter")) {
            navigate("/mars-jupiter");
          }
          // If Mars, Venus, and Jupiter are selected, navigate to MarsVenusJupiterEnding
          else if (characters.length === 3 && characters.includes("Mars") && characters.includes("Venus") && characters.includes("Jupiter")) {
            navigate("/mars-venus-jupiter");
          }
        }
      };
      

    const buttons = [
        {
            text: "Compromise with Jupiter",
            style: "bg-main-black text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600",
            addCharacter: 'Jupiter',
            
            
        },
        {
            text: "Stick with your Malefic",
            style: "bg-main-black text-white px-4 py-2 rounded-md shadow-md",
            addCharacter: 'Mars',
            
        }
    ];

      return (

        <div  className='bg-jupiter-bg-scroll pt-14 bg-center min-h-screen overflow-x-hidden' id='mars-path-container'>
           

        {/* container for the jupiter-grotto portion at top left of screen */}
       <div className='flex flex-col w-2/3 md:w-1/2 h-fit mt-10 ml-5 gap-5' id='jupiter-grotto-container'>

                        {/* container for the top black box */}
                        <div className='flex flex-col md:flex-row lg:flex-row gap-8 bg-main-black p-5
                         text-white rounded-md items-center' id='jupiter-bio-text-container'>
                            <div className='flex flex-col gap-4' id='jupiter-grotto-text'>
                                    <h1 className='text-xl font-header'>Jupiter's Grotto</h1>
                                    <p className='text-sm'> Keep scrolling to learn about what Jupiter wants to do about 
                                    the asteroids coming to us.</p>
                                    <p className='text-xs'>
                                        Traits: growth, luck, benevolence 
                                    </p>
                                </div>
                            <div className='flex flex-col items-center justify-center' id='jupiter-bio'>
                                <h1 className='text-sm text-nowrap'>View Jupiter's Bio</h1>
                                <img className="md:max-w-[65px] h-auto" src={JupiterDefault} alt="Jupiter Bio Image"/>
                            </div>

                        </div>

                        {/* container for the bottom black box */}
                        <div className='bg-main-black rounded-md w-52 p-5' id='scroll-text-container'>
                            <p className='text-xs text-white '>
                                Use your L or R arrow keys to scroll horizontally or scroll.
                            </p>

                        </div>
        </div>

        
        {/* HORIZONTAL SCROLL SECTION */}
        <div ref={container}  id="scroll-container" className=' flex flex-row gap-4 w-[600%] min-h-screen flex-nowrap pt-7 pl-7 overflow-x-hidden' >

                {/* container for FIRST scroll section / dialogue */}
                <section id="panel" className=' w-screen min-h-screen flex flex-col gap-14'>

                    <div id='container-panel-mars' className='flex flex-row w-full h-fit pt-12 justify-between'>
                        
                        <div id='mars-dialogue' className='flex flex-row w-fit h-fit mt-9 '>

                            <div id='mars-pic' className='mt-14'>
                                <img className="w-[100px]  sm:w-[100px]  md:w-[100px]  lg:w-[150px] " src={MarsGif} alt="Mars Gif"/>
                            </div>
                            <div id ='mars-text' className='flex w-64 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                                WAR! Goddammit, war. No one ever wants to go to war with me these days. Also... why is everything so gassy in here? ...
                            </div>

                        </div>


                    </div>


                <div id='container-panel-jupiter' className='flex flex-row w-full h-full justify-center '>
                    <div id='jupiter-dialogue' className='flex flex-row w-fit h-fit'>

                        <div id='jupiter-pic' className='mt-14'>
                            <img className="w-[100px]  sm:w-[100px]  md:w-[100px]  lg:w-[150px] " src={JupiterAnnoyedGif} alt="Jupiter Gif"/>
                        </div>
                        <div id ='jupiter-text' className='flex w-64 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                        Mars, you need to just listen to others for once. 
                        Not everything needs to be filled with aggression. Also, why do you even want to fight it? Do you know what that’s going to cause?
                        </div>

                    </div>

                    
                </div>                        
                    
                </section>




                {/* container for SECOND scroll section / dialogue */}
                {/* <section id="panel" className='  w-screen min-h-screen flex flex-col gap-14 '>
                    
                    <div id='container-panel-jupiter' className='flex w-full h-fit pt-12 justify-between
                    gap-6 flex-col md:flex-row pl-5 pr-5'>

                    <div id='jupiter-dialogue-2' className='flex flex-row w-fit h-fit'>

                        <div id='jupiter-pic' className='mt-14'>
                            <img className="w-[100px]  sm:w-[100px]  md:w-[100px]  lg:w-[150px] " src={JupiterGif} alt="jupiter Gif"/>
                        </div>

                        <div id ='jupiter-text' className='flex w-fit md:w-72 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                            I say try to negotiate with the guy. Or maybe there’s a greater purpose to all of this. Maybe the asteroid isn’t even going to hit us at all. 

                        </div>

                        </div> 

                        <div id='benefic-text' className='flex w-fit md:w-96 h-fit bg-white rounded-md font-body text-wrap p-5 mr-8 text-xs md:text-sm'>
                                Benefic planets, such as Jupiter, tend to have an overindulgent streak. Jupiter’s 
                                optimist attitude can help balance out your will to take action. However, Jupiter 
                                sometimes needs to understand that their buoyance attitude sometimes can get them in trouble.

                        </div>

                </div>
                    



                    <div className='flex flex-row justify-center items-center w-full h-fit' id='animation-container'>
                        <div id='jupiter-animation' className='w-1/2 h-full bg-main-black opacity-40 rounded-md p-5 '>
                        
                            <p className='text-white'>jupiter scroll animation  event here</p>
                    </div> 

                    </div>
                </section> */}


                {/* container for THIRD scroll section / dialogue */}
                {/* <section id="panel" className=' w-screen min-h-screen flex flex-col justify-center'>

                    <div id='container-panel-mars' className='items-center flex flex-col gap-14'>


                        <div id='mars-dialogue' className='flex flex-row w-fit h-fit self-start p-5'>

                            <div id='mars-pic' className='mt-14'>
                                <img className="w-[100px]  sm:w-[100px]  md:w-[100px]  lg:w-[150px] " src={MarsGif} alt="Mars Gif"/>
                            </div>
                            <div id ='mars-text' className='flex w-96 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                                In traditional astrology, Mars was known as the lesser malefic planet, with Saturn being the 
                                bigger malefic planet. Traditional astrologers associated malefic planets 
                                to represent everything that was ‘bad’ about being alive 
                            </div>

                            </div>


                            <div id='mars-dialogue' className='flex flex-row w-fit h-fit self-end p-5'>

                                <div id ='mars-text' className='flex w-96 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                                    As a malefic planet, specifically Mars, you thrive on acting on your 
                                    ‘survival instinct’. Mars is what gets you out of danger, but won’t play defense.
                                    </div>

                                
                                <div id='mars-pic' className='mt-14'>
                                    <img className="w-[100px]  sm:w-[100px]  md:w-[100px]  lg:w-[150px] " src={MarsGif} alt="jupiter Gif"/>
                                </div>

                            </div>

                    </div>
                    
                </section> */}

                 {/* container for FOURTH scroll section / dialogue */}
                {/* <section id="panel" className=' w-screen min-h-screen flex flex-col justify-center'>
                    <div id='container-panel-mars' className='items-center flex flex-col '>


                    <div id='mars-dialogue' className='flex flex-row w-fit h-fit  p-5'>

                        <div id='mars-pic' className='mt-14'>
                            <img className="w-[100px]  sm:w-[100px]  md:w-[100px]  lg:w-[150px] " src={MarsGif} alt="Mars Gif"/>
                        </div>
                        <div id ='mars-text' className='flex w-96 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                            mars animation here
                        </div>

                    </div>
                </div>
                        
                    
                </section> */}

                 {/* container for FIFTH scroll section / dialogue */}
                {/* <section id="panel" className='  w-screen min-h-screen flex flex-col justify-center'>
                        
                    <div id='container-panel' className='flex flex-col items-center gap-14'>

                            <div id='jupiter-dialogue' className='flex flex-row w-fit h-fit self-start p-7 ml-9'>

                                <div id='jupiter-pic' className='mt-14'>
                                    <img className="w-[100px]  sm:w-[100px]  md:w-[100px]  lg:w-[150px] " src={JupiterAnnoyedGif} alt="jupiter Gif"/>
                                </div>

                                <div id ='jupiter-text' className='flex w-fit md:w-72 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                                    I don’t think fighting is the answer! I wish you would just listen to me for once.
                                </div>

                            </div> 

                            <div id='mars-dialogue' className='flex flex-row w-fit h-fit self-end p-7 mr-9'>

                                <div id='mars-pic' className='mt-14'>
                                    <img className="w-[100px]  sm:w-[100px]  md:w-[100px]  lg:w-[150px] " src={MarsGif} alt="Mars Gif"/>
                                </div>
                                <div id ='mars-text' className='flex w-96 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                                    Boys go to Jupiter to get stupider. It’s true. Which is why I should go with my plan.
                                </div>

                            </div>
                    </div>
            </section>
                */}
               
               
               
               
                {/* container for SIXTH/FINAL scroll section / dialogue */}
                <section id="panel" className='  w-screen min-h-screen flex flex-col justify-center pr-5'>
                    <div id='container-panel' className='flex flex-col items-center gap-14'>
                        
                        <div id='header' className='font-header text-white font-bold'>
                            <h1>Decision Time: 15 seconds</h1>
                        </div>

                        <div id='planet-pics' className='flex flex-row gap-5 items-center justify-center w-full h-fit'>
                            <img className="w-[100px]  sm:w-[100px]  md:w-[100px]  lg:w-[150px] " src={MarsGif} alt="Mars Gif"/>
                            <img className="w-[100px]  sm:w-[100px]  md:w-[100px]  lg:w-[150px] " src={JupiterGif} alt="Mars Gif"/>
                            
                        </div>

                        <div id='decision-text' className='flex w-1/3 h-fit bg-white text-main-black rounded-md shadow-md font-body text-wrap p-5 text-xs md:text-sm'>
                            It’s up to you to decide if you want to compromise with Jupiter, or fight the asteroids in the way that you want to. The decision is yours.
                        </div>

                        <div id='button-container-wrapper'>
                            <ButtonContainer 
                                setScreen={handleButtonClick} 
                                buttons={buttons}
                                containerStyle="custom-container-style"
                                buttonStyle="custom-button-style"
                            />
                        </div>
                        
                    </div>
                        
                    
                </section>

        </div>
    </div>


      )
    

}





export default MarsHorizontalJupiter;