import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import 'locomotive-scroll/dist/locomotive-scroll.css';
import VenusMouthOpen from '../../assets/venus-art/venus-mouth-open.png';
import MarsGif from '../../assets/mars-art/mars-art-official.gif';
import MarsStaticImg from '../../assets/mars-art/mars-art.png';
import VenusGifDefault from '../../assets/venus-art/venus-default-GIF.gif';
import VenusGifAnnoyed from '../../assets/venus-art/venus-annoyed-gif.gif';
import VenusGifSmirk from '../../assets/venus-art/venus-smirk-gif.gif';
import VenusGifMouthOpen from '../../assets/venus-art/venus-mouth-open-gif.gif';
import VenusCloudShort from '../../assets/clouds/venus-cloud-short.png';
import VenusCloudLong from '../../assets/clouds/venus-cloud-long.png';
import ButtonContainer from '../ButtonContainer';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);


function MarsHorizontal1({ setScreen }) {

    // const [screen, setScreen] = useState(null);
    const container = useRef(null);
    const venusLineRef = useRef(null); // Ref for venus-line section
    const lineRef = useRef(null); // Ref for the animated line


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
            // pinSpacing: false,
            markers: true,
            end: containerWidth * 5,
          },
        });
      }, []);

    useGSAP(() => {
        gsap.from(".line", {
            scrollTrigger: {
                trigger: venusLineRef.current,
                start: "left top",
                end: "bottom top",
                pin: true,
                scrub: true,
                markers: true,
            },
            scaleX: 0,
            transformOrigin: "left center",
            ease: "none"
        });
    }, []);

    // useGSAP(() => {
    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: venusLineRef.current,
    //             start: "left left", // Trigger when the left edge of venusLineRef hits the left side of the viewport
    //             end: "+=100%", // Duration: 100% of scrollable distance
    //             pin: venusLineRef.current, // Pin the element during the animation
    //             scrub: true, // Synchronize the animation with the scroll
    //             markers: true, // Debugging markers to see trigger points
    //             onEnter: () => {
    //                 console.log("Animation started!");
    //             },
    //             onLeave: () => {
    //                 console.log("Animation ended!");
    //             },
              
    //         },
    //     });
    
    //     // Line animation
    //     tl.fromTo(
    //         lineRef.current,
    //         { scaleX: 0, transformOrigin: "left center" },
    //         { scaleX: 1, duration: 1, ease: "power2.inOut" }
    //     );
    
    //     // Add more animations if needed
    //     // tl.to(
    //     //     venusLineRef.current,
    //     //     // { backgroundColor: "#f0c", duration: 0.5 },
    //     //     // "<" // Syncs with the line animation
    //     // );
    // }, []);
    



    
    const buttons = [
        {
            text: "Compromise with Venus",
            style: "bg-main-black text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600",
            screen: "choose-venus-1"
        },
        {
            text: "Stick with your Malefic",
            style: "bg-main-black text-white px-4 py-2 rounded-md shadow-md",
            screen: "stick-mars-1"
        }
    ];

      return (

        <div  className='bg-venus-bg-scroll pt-14 bg-center min-h-screen overflow-x-hidden' id='mars-path-container'>
           

        {/* container for the venus-grotto portion at top left of screen */}
       <div className='flex flex-col w-2/3 md:w-1/2 h-fit mt-10 ml-5 gap-5' id='venus-grotto-container'>

                        {/* container for the top black box */}
                        <div className='flex flex-col md:flex-row lg:flex-row gap-8 bg-main-black p-5
                         text-white rounded-md items-center' id='venus-bio-text-container'>
                            <div className='flex flex-col gap-4' id='venus-grotto-text'>
                                    <h1 className='text-xl font-header'>Venus' Grotto</h1>
                                    <p className='text-sm'> Keep scrolling to learn about Venus 
                                        and what she thinks about the asteroids coming. 
                                    Learn more about your benefic friend!</p>
                                    <p className='text-xs'>
                                        Traits: positivity, love, abundance
                                    </p>
                                </div>
                            <div className='flex flex-col items-center justify-center' id='venus-bio'>
                                <h1 className='text-sm text-nowrap'>View Venus' Bio</h1>
                                <img className="md:max-w-[65px] h-auto" src={VenusMouthOpen} alt="Venus Bio Image"/>
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
        <div ref={container}  id="scroll-container" className=' flex flex-row gap-4 w-[600%] h-fit flex-nowrap pt-7 pl-7 overflow-x-hidden' >

                {/* container for FIRST scroll section / dialogue */}
                <section id="panel" className=' w-screen min-h-screen flex flex-col gap-14'>

                    <div id='container-panel-mars' className='flex flex-row w-full h-fit pt-12 justify-between'>
                        
                        <div id='mars-dialogue' className='flex flex-row w-fit h-fit mt-9 '>

                            <div id='mars-pic' className='mt-14'>
                                <img className="w-[100px]  sm:w-[100px]  md:w-[100px]  lg:w-[150px] " src={MarsGif} alt="Mars Gif"/>
                            </div>
                            <div id ='mars-text' className='flex w-64 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                                Oof.. why is everything so bright and pink in here? We must be at Venus’ place... I wanna go home already...
                            </div>

                        </div>


                            <div id='mars-dialogue' className='flex flex-row w-fit h-fit mt-9'>
                                <div id='mars-pic' className='mt-14'>
                                    <img className="w-[100px]  sm:w-[100px]  md:w-[100px]  lg:w-[150px] " src={MarsGif} alt="Venus Gif"/>
                                </div>
                                <div id ='mars-text' className='flex w-64 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                                    Well yeah. I do. Unless you had something better in mind? 
                                </div>

                            </div>


                    </div>


                <div id='container-panel-venus' className='flex flex-row w-full h-full justify-center '>
                    <div id='venus-dialogue' className='flex flex-row w-fit h-fit'>

                        <div id='venus-pic' className='mt-14'>
                            <img className="w-[100px]  sm:w-[100px]  md:w-[100px]  lg:w-[150px] " src={VenusGifAnnoyed} alt="Venus Gif"/>
                        </div>
                        <div id ='venus-text' className='flex w-64 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                            Ohhhhh look who it is. Mars. Heyyy Mars. Let me guess. You want to go to war?
                        </div>

                    </div>

                    
                </div>                        
                    
                </section>




                {/* container for SECOND scroll section / dialogue THIS IS WHERE THE LINE ANIMATION SHOULD BE PINNED TO THE FRAME*/}
                <section ref={venusLineRef} id="panel" className='venus-line relative bg-mars-red w-screen min-h-screen flex flex-col justify-center gap-14 '>
                    
                    <div id='container-panel-venus' className='flex w-full h-fit pt-12 justify-between
                    gap-6 flex-col md:flex-row pl-5 pr-5'>

                    <div id='venus-dialogue-2' className='flex flex-row w-fit h-fit'>

                        <div id='venus-pic' className='mt-14'>
                            <img className="w-[100px]  sm:w-[100px]  md:w-[100px]  lg:w-[150px] " src={VenusGifDefault} alt="Venus Gif"/>
                        </div>

                        <div id ='venus-text' className='flex w-fit md:w-72 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                            Maybe the asteroid is lonely and that’s why it’s coming over here. you need to stop asserting dominance for no reason. I probably could charm them with my beauty..
                        </div>

                        </div> 

                        <div id='benefic-text' className='flex w-fit md:w-96 h-fit bg-white rounded-md font-body text-wrap p-5 mr-8 text-xs md:text-sm'>
                            Venus tends to take the diplomatic approach when it comes to conflict. 
                            Venus wants to do things that are going to feel goooood, and tends to shy away from things that may be uncomfortable.

                        </div>

                </div>
                    



                    <div className='flex flex-row justify-center items-center w-full h-fit' id='animation-container'>
                        <div id='venus-animation' className='w-1/2 h-full bg-main-black opacity-40 rounded-md p-5 '>
                        
                        <div ref={lineRef} className="line w-full max-w-[800px] h-2 bg-white"></div>
                            <p className="text-white mt-4">venus animation here</p>
            
                    </div> 

                    </div>
                </section>


                {/* container for THIRD scroll section / dialogue */}
                <section id="panel" className=' w-screen min-h-screen relative flex flex-col justify-center'>

                    <div id='container-panel-mars' className='items-center flex flex-col gap-14'>


                        <div id='mars-dialogue' className='flex flex-row w-fit h-fit self-start p-5'>

                            <div id='mars-pic' className='mt-14'>
                                <img className="w-[100px]  sm:w-[100px]  md:w-[100px]  lg:w-[150px] " src={MarsGif} alt="Mars Gif"/>
                            </div>
                            <div id ='mars-text' className='flex w-96 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                                As a Malefic planet, you feel like you need to push people, maybe in not the best of ways. Sometimes that means that people
                                can be uncomfortable with your energy. However, your energy pushes people to be stronger, and better. You tend to take the more aggressive approach. 
                            </div>

                            </div>


                            <div id='mars-dialogue' className='flex flex-row w-fit h-fit self-end p-5'>

                                <div id ='mars-text' className='flex w-96 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                                Waiting to take the offense side is difficult for you. You are prone to taking action immediately and channeling your inner warrior.
                                </div>

                                
                                <div id='mars-pic' className='mt-14'>
                                    <img className="w-[100px]  sm:w-[100px]  md:w-[100px]  lg:w-[150px] " src={MarsGif} alt="Venus Gif"/>
                                </div>

                            </div>

                    </div>
                    
                </section>

                 {/* container for FOURTH scroll section / dialogue */}
                <section id="panel" className=' w-screen min-h-screen relative flex flex-col justify-center'>
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
                        
                    
                </section>

                 {/* container for FIFTH scroll section / dialogue */}
                <section id="panel" className=' relative w-screen min-h-screen flex flex-col justify-center'>
                        
                    <div id='container-panel' className='flex flex-col items-center gap-14'>

                            <div id='venus-dialogue' className='flex flex-row w-fit h-fit self-start p-7 ml-9'>

                                <div id='venus-pic' className='mt-14'>
                                    <img className="w-[100px]  sm:w-[100px]  md:w-[100px]  lg:w-[150px] " src={VenusGifDefault} alt="Venus Gif"/>
                                </div>

                                <div id ='venus-text' className='flex w-fit md:w-72 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                                    Mars, we need to make these asteroids feel GOOD! With my beauty.. of course.
                                </div>

                            </div> 

                            <div id='mars-dialogue' className='flex flex-row w-fit h-fit self-end p-7 mr-9'>

                                <div id='mars-pic' className='mt-14'>
                                    <img className="w-[100px]  sm:w-[100px]  md:w-[100px]  lg:w-[150px] " src={MarsGif} alt="Mars Gif"/>
                                </div>
                                <div id ='mars-text' className='flex w-96 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                                    mars animation here
                                </div>

                            </div>
                    </div>
            </section>
               
               
               
               
               
                {/* container for SIXTH/FINAL scroll section / dialogue */}
                <section id="panel" className=' relative w-screen min-h-screen flex flex-col justify-center pr-5'>
                    <div id='container-panel' className='flex flex-col items-center gap-14'>
                        
                        <div id='header' className='font-header text-white font-bold'>
                            <h1>Decision Time: 15 seconds</h1>
                        </div>

                        <div id='planet-pics' className='flex flex-row gap-5 items-center justify-center w-full h-fit'>
                            <img className="w-[100px]  sm:w-[100px]  md:w-[100px]  lg:w-[150px] " src={MarsGif} alt="Mars Gif"/>
                            <img className="w-[100px]  sm:w-[100px]  md:w-[100px]  lg:w-[150px] " src={VenusGifMouthOpen} alt="Mars Gif"/>
                            
                        </div>

                        <div id='decision-text' className='flex w-1/3 h-fit bg-white text-main-black rounded-md shadow-md font-body text-wrap p-5 text-xs md:text-sm'>
                            It’s up to you to decide if you want to compromise with Venus, or fight the asteroids in the way that you want to. The decision is yours.
                        </div>

                        <div id='button-container-wrapper'>
                            <ButtonContainer 
                                setScreen={setScreen} 
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



export default MarsHorizontal1;