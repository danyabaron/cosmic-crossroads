import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import VenusMouthOpen from '../../assets/venus-art/venus-mouth-open.png';
import MarsGif from '../../assets/mars-art/mars-art-official.gif';
import MarsStaticImg from '../../assets/mars-art/mars-art-official1.png';
import VenusGifDefault from '../../assets/venus-art/venus-default-GIF.gif';
import VenusGifAnnoyed from '../../assets/venus-art/venus-annoyed-gif.gif';
import VenusGifSmirk from '../../assets/venus-art/venus-smirk-gif.gif';
import VenusGifMouthOpen from '../../assets/venus-art/venus-mouth-open-gif.gif';
import JupiterDefault from '../../assets/jupiter-art/jupiter-art.png';
import JupiterGif from '../../assets/jupiter-art/jupiter-art-gif.gif';
import JupiterAnnoyedGif from '../../assets/jupiter-art/jupiter-art-annoyed-gif.gif';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);



function MarsGame() {

  


        // Register GSAP plugins

        // const container = useRef(document.querySelector("#scroll-container"));
        const container = useRef();
       
        useGSAP(() => {

            // Ensure DOM is ready before initializing GSAP
            // creaTe array of sections
            const sections = gsap.utils.toArray("section", container.current);
            const containerWidth = sections.length * 100;

          
                gsap.to(sections, {
                        xPercent: -100 * (sections.length - 1),
                        ease: "none",
                        scrollTrigger: {
                            trigger: container.current,
                            // start: "top left",
                            pin: true,
                            scrub: 1,
                            delay: 0.5,
                            // snap: {
                            //     snapTo: 1 / (sections.length - 1), // Snap to the nearest integer section
                            //     duration: 0.2, // Duration of snapping animation
                            //     delay: 0.5, // Delay before snapping takes effect
                            //     ease: "power1.inOut", // Smooth easing for snapping
                            //   },
                              markers: true, // Add this to debug
                            end: "+=5000",
                            // end: "+=" + containerWidth, 
                        
                        },

                });

                console.log("We are on section", sections.map(section => section.id || section.className));
            });

     

  


    // USER STARTS AT VENUS' GROTTO. THE MAIN START SCREEN. VENUS IS THE BENEFIC PLANET. USER CAN CHOOSE TO STICK WITH MARS, THEIR MALEFIC PLANET, OR ADD VENUS TO THEIR TEAM. 
    // if (screen === 'venus') {

    return (


        //outer div to contain background and screen
        <div  className='bg-venus-bg-scroll pt-14 bg-center min-h-screen  overflow-x-hidden' id='mars-path-container'>


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

            {/* ref={container} */}
            
            <div ref={container}  id="scroll-container" className=' flex w-[600%] h-full flex-nowrap p-7 overflow-x-hidden' >

                        {/* container for first scroll section / dialogue */}
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


                    {/* container for second scroll section / dialogue */}
                    <section id="panel" className=' bg-venus-pink w-screen flex min-h-screen mt-4 ml-5 mb-4 p-9'>
                        
                        <div id='venus-dialogue-2' className='flex flex-row w-fit h-fit mt-9 absolute top-0 '>

                            <div id='venus-pic' className='mt-14'>
                                <img className="w-[100px]  sm:w-[100px]  md:w-[100px]  lg:w-[150px] " src={VenusGifDefault} alt="Venus Gif"/>
                            </div>
                            
                            <div id ='venus-text' className='flex w-72 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                            Maybe the asteroid is lonely and that’s why it’s coming over here. you need to stop asserting dominance for no reason. I probably could charm them with my beauty..
                            </div>

                        </div> 

                        <div className='flex justify-center absolute mt-52 items-center w-full h-fit' id='animation-container'>
                            <div id='venus-animation' className='w-1/2 h-72 bg-main-black opacity-40 rounded-md p-5 '>
                            
                                <p className='text-white'>venus animation here</p>



                            </div> 

                        </div>

                        <div id='benefic-text' className='flex w-96 h-fit bg-white rounded-md absolute right-24 font-body text-wrap p-5 text-xs md:text-sm'>
                        As the other benefic, Venus tends to take the diplomatic approach when it comes to conflict. Venus wants to do things that are going to feel goooood, and tends to shy away from things that may be uncomfortable.
                    
                        </div>
                      
                            
                        
                    </section>
                    <section id="panel" className=' bg-jupiter-purple w-screen min-h-screen mt-4 ml-5 mb-4 p-9'>
                        hi hi hi hi hi hi hi 
                            
                        
                    </section>
                    <section id="panel" className=' bg-team-gray w-screen min-h-screen mt-4 ml-5 mb-4 p-9'>
                        hi hi hi hi hi hi hi 
                            
                        
                    </section>
                    <section id="panel" className=' bg-white w-screen min-h-screen mt-4 ml-5 mb-4 p-9'>
                        hi hi hi hi hi hi hi 
                            
                        
                    </section>

            </div>
            
            







        </div>
 

    );







}


export default MarsGame;


     // USER CHOOSES TO COMPROMISE WITH VENUS, THE BENEFIC PLANET FRIEND. THIS ADDS VENUS TO THE STATUS BAR, AND ADDS VENUS TO THEIR TEAM. THEY ENTER JUPITER'S GROTTO WITH MARS AND VENUS 
    // IN THEIR TEAM. NEED TO UPDATE THE STATUS BAR TO DISPLAY THIS.
    // if (screen === 'choose-venus') {

        
    //     return (
    //         <div className="bg-venus-bg-reg min-w-screen min-h-screen flex items-center justify-center">
          
    //         <button
    //           onClick={() => setScreen('jupiter')}
    //           className="mt-8 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
    //         >
    //           Who's Next?
    //         </button>
    //       </div>
    //     )

        

    // }



    // USER CHOOSES TO STICK WITH MARS, THEIR MALEFIC PLANET/THEMSELVES. THIS DOES NOT CHANGE THE STATUS BAR, AND NO ONE GETS ADDED TO THEIR TEAM. STATUS BAR IS NOT UPDATED.
    // if (screen ==='stick-mars'){

    //     return (
    //         <div className="bg-mars-bg-reg min-w-screen min-h-screen flex items-center justify-center">
          
    //         <button
    //           onClick={() => setScreen('jupiter')}
    //           className="mt-8 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
    //         >
    //           Who's Next?
    //         </button>
    //       </div>
    //     )

    // }

   


    // JUPITER'S GROTTO/SCREEN. STATUS BAR IS UPDATED BASED ON WHAT THE USER CHOSE. THE NEXT SCREENS AFTER THIS ONE ARE DETERMINED BY THE STATUS BAR. NEED TO FIGURE THIS OUT.

    // if (screen === 'jupiter') {

    //     return (
    //         <div className='bg-jupiter-bg-scroll min-w-screen min-h-screen'>
    
       
    //         <div className=' flex flex-row items-start pt-12' data-scroll-container id='venus-scroll-container'>
    //            <div data-scroll-section className='w-full h-screen items-center justify-start p-6'>
                        
    //                 <div data-scroll className='flex flex-col gap-4 '>
    //                     <div data-scroll className='bg-main-black text-white rounded-md text-xs md:text-sm lg:text-base shadow-md flex flex-row items-center justify-center
    //                         text-wrap w-[400px] md:w-[700px] lg:w-[700px] p-6 gap-10' id='venus-grotto'>
    //                             <div className='flex flex-col items-start gap-2' id='venus-grotto-text'>
    //                                 <h1 className='text-base font-header md:text-xl lg:text-2xl'>Jupiter's Grotto </h1>
    //                                     <p className='text-xs md:text-sm'>
    //                                         Keep scrolling to learn about Jupiter and what they think about the asteroids coming. 
    //                                         Learn more about your benefic friend!
    
    //                                     </p>
    //                                     <p className='text-xs md:text lg:text-sm'>
    //                                         Traits: <span className='text-venus-pink'>positivity</span>, <span className='text-[#CF8242]'>love</span>, <span className='text-[#A40073]'>harmony</span>
    //                                     </p>
    //                         </div>
    //                         <div className='flex flex-col items-center' id='venus-bio'>
    //                             <h1 className='whitespace-nowrap text-base sm:text-sm'>View Jupiter's Bio</h1>
    //                             <img className="md:max-w-[65px] h-auto" src={JupiterDefault} alt="Venus Bio Image"/>
                                
    
    //                         </div>
                           
    
    //                     </div>
    
    //                     <div data-scroll className='bg-main-black text-white rounded-md text-xs md:text-sm lg:text-base shadow-md flex flex-row px-4 py-2 items-center justify-center
    //                         text-wrap w-[160px] md:w-[260px]' id='scroll-text'>
    //                             <h1 className='text-xs md:text-sm'> Scroll right or press your L or R arrow keys to move</h1>
    //                         </div>
    
    //                     </div>
                        
    
    
    //                       <p className=''>
    
    //                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate euismod nunc, id sagittis quam vestibulum nec. Praesent aliquam nisi non orci faucibus posuere in sit amet sem. Donec aliquam sed erat eu viverra. Proin consectetur, erat eget condimentum dignissim, erat tortor egestas erat, et consequat augue ante sit amet risus. Praesent id diam non est rhoncus interdum id sit amet sem. Ut cursus neque risus, non molestie tortor eleifend non. Aenean et est a est sagittis interdum. Quisque vulputate, nulla eget vestibulum finibus, turpis ligula pretium lectus, eget finibus ipsum metus a sem. Ut consectetur libero vitae mauris dapibus mattis.
    
    // Mauris at lacinia nisl. Nam et fermentum tellus. Suspendisse potenti. Fusce non elementum lacus, ut venenatis nisl. Proin pulvinar quam eu massa ultricies aliquet. Curabitur finibus, diam varius condimentum accumsan, felis augue tempor massa, quis tristique nibh justo in eros. Donec pretium, nulla vel tristique eleifend, dui neque aliquet sem, eget cursus nibh metus quis nisi. Etiam fringilla aliquet risus, sit amet imperdiet libero malesuada eu. Vivamus accumsan ullamcorper lacus, sit amet congue leo ultricies eu.
    
    // Curabitur Morbi laoreet, orci in semper suscipit, lectus massa blandit mi, 
    
                           
    //                     </p>   
    //                     <div className='flex flex-row w-fit h-fit mt-12' id='mars-dialogue-1'>
    //                             <div className='mt-9' id='mars-image'>
    //                                 <img className="w-[100px]  sm:w-[100px]  md:w-[100px]  lg:w-[150px] " src={MarsGif} alt="Mars Gif"/>
    //                             </div>
    //                         <div className='' id='mars-text-1'>
    //                             <div className="bg-white text-main-black rounded-md text-xs md:text-sm lg:text-base flex items-center justify-center 
    //                              text-wrap shadow-lg md:w-[382px] px-4 py-2" >
    //                                 <p>
    //                                     Oof.. why is everything so bright and pink in here? We must be at Venus’ place... I wanna go home already...
    //                                 </p>
    //                             </div>
    //                         </div>
    
                            
                            
    //                     </div>
    
                       
    
    
                        
    //                 </div>
            
    //         </div>
    //     </div>
    
    //     );
    // }








