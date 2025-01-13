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
import VenusCloudShort from '../../assets/clouds/venus-cloud-short.png';
import VenusCloudLong from '../../assets/clouds/venus-cloud-long.png';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);




function MarsGame() {

    // const [choice, setChoice] = useState(null);
    const [screen, setScreen] = useState('start');

    console.log("Current screen:", screen); // Add this for debugging
            
        
        // Register GSAP plugins
        
        const container = useRef(null);

        useEffect(() => {
            console.log("Container ref inside useEffect:", container.current);
          }, [screen]); // Run only when the screen changes


       
        useGSAP(() => {
            if (['start', 'jupiter'].includes(screen) && container.current) {
                // if (screen === 'jupiter' && container.current) {
                    console.log("Running GSAP animation...");

            // Ensure DOM is ready before initializing GSAP
            // creaTe array of sections
            const sections = gsap.utils.toArray("section", container.current);
            const containerWidth = sections.length * 100;

            console.log("Container ref:", container.current);
                gsap.to(sections, {
                        xPercent: -100 * (sections.length - 1),
                        ease: "none",
                        scrollTrigger: {
                            trigger: container.current,
                            pin: true,
                            scrub: 3,
                            delay: 0.5,
                            markers: true, // Add this to debug
                            end: containerWidth * 5, // End after all sections have been scrolled through
                        
                        },

                });
                console.log("GSAP animation initialized");

                // console.log("We are on section", sections.map(section => section.id || section.className));
             }
            }, [screen]); // Run only when the screen changes
      

     

            useEffect(() => {
                // ONLY manage body overflow for overlay screens
                if (!['start', 'jupiter'].includes(screen)) {
                    document.body.style.overflow = 'hidden';
                    window.scrollTo(0, 0); // Reset scroll position
                } else {
                    document.body.style.overflow = 'unset';
                    
                }
                return () => {
                    document.body.style.overflow = 'unset';
                };
            }, [screen]);
        
        

  


    // USER STARTS AT VENUS' GROTTO. THE MAIN START SCREEN. VENUS IS THE BENEFIC PLANET. USER CAN CHOOSE TO STICK WITH MARS, THEIR MALEFIC PLANET, OR ADD VENUS TO THEIR TEAM. 
  

    return (
        <div className='relative'>

        {screen === 'start' && (
             //outer div to contain background and screen
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
        <div ref={container}  id="scroll-container" className=' flex flex-row gap-4 w-[600%] min-h-screen flex-nowrap pt-7 pl-7 overflow-x-hidden' >

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




                {/* container for SECOND scroll section / dialogue */}
                <section id="panel" className='  w-screen min-h-screen flex flex-col gap-14 '>
                    
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
                            As the other benefic, Venus tends to take the diplomatic approach when it comes to conflict. Venus wants to do things that are going to feel goooood, and tends to shy away from things that may be uncomfortable.

                        </div>

                </div>
                    



                    <div className='flex flex-row justify-center items-center w-full h-fit' id='animation-container'>
                        <div id='venus-animation' className='w-1/2 h-full bg-main-black opacity-40 rounded-md p-5 '>
                        
                            <p className='text-white'>venus animation here</p>
                    </div> 

                    </div>
                </section>


                {/* container for THIRD scroll section / dialogue */}
                <section id="panel" className=' w-screen min-h-screen flex flex-col justify-center'>

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
                                    <img className="w-[100px]  sm:w-[100px]  md:w-[100px]  lg:w-[150px] " src={MarsGif} alt="Venus Gif"/>
                                </div>

                            </div>

                    </div>
                    
                </section>

                 {/* container for FOURTH scroll section / dialogue */}
                <section id="panel" className=' w-screen min-h-screen flex flex-col justify-center'>
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
                <section id="panel" className='  w-screen min-h-screen flex flex-col justify-center'>
                        
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
                <section id="panel" className='  w-screen min-h-screen flex flex-col justify-center pr-5'>
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

                        <div id='button-container' className='flex flex-col items-center justify-center gap-4'>
                            {/* compromise button */}
                                <button
                                    onClick={() => {
                                    console.log("button clicked");
                                    // setChoice('benefic');
                                    setScreen('choose-venus'); // Navigate to choice screen
                                    console.log("screen set to choose-venus");
                                    }}
                                    className="bg-main-black text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600">
                                        Compromise with Venus
                                </button>

                            {/* stick with mars button */}
                                <button
                                        onClick={() => {
                                        // setChoice('malefic');
                                        setScreen('stick-mars'); // Navigate to choice screen
                                        }}
                                className="bg-main-black text-white px-4 py-2 rounded-md shadow-md">
                                Stick with your Malefic
                                </button>
                        </div>
                        
                    </div>
                        
                    
                </section>

        </div>
        
        







    </div>




    )}
       

       {/* USER CHOOSES TO COMPROMISE WITH VENUS, THE BENEFIC PLANET FRIEND. THIS ADDS VENUS TO THE STATUS BAR, AND ADDS VENUS TO THEIR TEAM. THEY ENTER JUPITER'S GROTTO WITH MARS AND VENUS 
       IN THEIR TEAM. NEED TO UPDATE THE STATUS BAR TO DISPLAY THIS. */}
        {screen === 'choose-venus' && (
             
                   
                    <div className="bg-venus-bg-reg fixed top-0 left-0 w-full h-full flex items-center justify-center">
                        <button
                        onClick={() => setScreen('jupiter')}
                        className="mt-8 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
                        >
                        Who's Next?
                        </button>
                    </div>

                    )}




        {/* USER CHOOSES TO STICK WITH MARS, THEIR MALEFIC PLANET/THEMSELVES. THIS DOES NOT CHANGE THE STATUS BAR, AND NO ONE GETS ADDED TO THEIR TEAM. STATUS BAR IS NOT UPDATED. */}
        {screen === 'stick-mars' && (
             
                   
             <div className="bg-mars-bg-reg fixed top-0 left-0 w-full h-full flex items-center justify-center">
                 <button
                 onClick={() => setScreen('jupiter')}
                 className="mt-8 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
                 >
                 Who's Next?
                 </button>
             </div>

             )}



         {/* START OF NEXT AND FINAL PATH OF MARS. CONVERSATION WITH JUPITER, THE BENEFIC PLANET */}

            {screen === 'jupiter' && (

            <div  className='bg-jupiter-bg-scroll pt-14 bg-center min-h-screen  overflow-x-hidden' id='mars-path-container'>
                    

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
            <div ref={container}  id="scroll-container" className=' flex flex-row gap-4 w-[600%] min-h-screen flex-nowrap pt-7 pl-7 overflow-x-hidden' >

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




                    {/* container for SECOND scroll section / dialogue */}
                    <section id="panel" className='  w-screen min-h-screen flex flex-col gap-14 '>
                        
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
                                As the other benefic, Venus tends to take the diplomatic approach when it comes to conflict. Venus wants to do things that are going to feel goooood, and tends to shy away from things that may be uncomfortable.

                            </div>

                    </div>
                        



                        <div className='flex flex-row justify-center items-center w-full h-fit' id='animation-container'>
                            <div id='venus-animation' className='w-1/2 h-full bg-main-black opacity-40 rounded-md p-5 '>
                            
                                <p className='text-white'>venus animation here</p>
                        </div> 

                        </div>
                    </section>


                    {/* container for THIRD scroll section / dialogue */}
                    <section id="panel" className=' w-screen min-h-screen flex flex-col justify-center'>

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
                                        <img className="w-[100px]  sm:w-[100px]  md:w-[100px]  lg:w-[150px] " src={MarsGif} alt="Venus Gif"/>
                                    </div>

                                </div>

                        </div>
                        
                    </section>

                    {/* container for FOURTH scroll section / dialogue */}
                    <section id="panel" className=' w-screen min-h-screen flex flex-col justify-center'>
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
                    <section id="panel" className='  w-screen min-h-screen flex flex-col justify-center'>
                            
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
                    <section id="panel" className='  w-screen min-h-screen flex flex-col justify-center pr-5'>
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

                            <div id='button-container' className='flex flex-col items-center justify-center gap-4'>
                                {/* compromise button */}
                                    <button
                                        onClick={() => {
                                        console.log("button clicked");
                                        // setChoice('benefic');
                                        setScreen('choose-venus'); // Navigate to choice screen
                                        console.log("screen set to choose-venus");
                                        }}
                                        className="bg-main-black text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600">
                                            Compromise with Venus
                                    </button>

                                {/* stick with mars button */}
                                    <button
                                            onClick={() => {
                                            // setChoice('malefic');
                                            setScreen('stick-mars'); // Navigate to choice screen
                                            }}
                                    className="bg-main-black text-white px-4 py-2 rounded-md shadow-md">
                                    Stick with your Malefic
                                    </button>
                            </div>
                            
                        </div>
                            
                        
                    </section>

            </div>









            </div>


            )}
               

                                            
       </div>

    );

    


        

    


    }


    
    



 




 
    









        

    






    // // JUPITER'S GROTTO/SCREEN. STATUS BAR IS UPDATED BASED ON WHAT THE USER CHOSE. THE NEXT SCREENS AFTER THIS ONE ARE DETERMINED BY THE STATUS BAR. NEED TO FIGURE THIS OUT.

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
















export default MarsGame;