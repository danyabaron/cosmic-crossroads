import React, { useEffect, useState, useRef } from 'react';
// import 'locomotive-scroll/dist/locomotive-scroll.css';
import VenusMouthOpen from '../../../assets/venus-art/venus-mouth-open.png';
import MarsGif from '../../../assets/mars-art/mars-art-official.gif';
import VenusGifAnnoyed from '../../../assets/venus-art/venus-annoyed-gif.gif';
import VenusGifMouthOpen from '../../../assets/venus-art/venus-mouth-open-gif.gif';
import VenusGifDefault from '../../../assets/venus-art/venus-default-GIF.gif';
import ButtonContainer from '../../ButtonContainer';
import { gsap } from "gsap";
import { useNavigate } from 'react-router-dom';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { SiTrueup } from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

function MarsHorizontalVenus({ setScreen, addCharacter }) {

    const [decisionMade, setDecisionMade] = useState(false); // Track if decision is made
    const container = useRef(null);
    const lineRef = useRef(null); // Ref for the animated line

    const navigate = useNavigate(); // Use navigate hook


    console.log("MarsHorizontalVenus received addCharacter:", addCharacter); // Debugging



    useGSAP(() => {
        const sections = gsap.utils.toArray(".panel");
        const containerWidth = sections.length * 100;
    
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".container",
            pin: true,
            // pinSpacing: false,
            scrub: 2,
            delay: 0.5,
            // markers: true,
            start: "top top",
            // end: () => "+=" + document.querySelector(".container").offsetWidth,
            end: () => "+=" + containerWidth, 
            // Disable scrolling after decision
            // onEnter: () => decisionMade && container.current.style.pointerEvents == 'none',
          },
        });
    });

    // useGSAP(() => {
    //     gsap.from(".line", {
    //         scrollTrigger: {
    //           trigger: ".line-container",
    //           scrub: true,
    //           pin: true,
    //           markers: true,
    //           start: "top left",
    //           end: "+=100%"
    //         },
    //         scaleX: 0, 
    //         transformOrigin: "left center", 
    //         ease: "none"
    //       });
    // }, []);
        
            

    //      // Animate the line element (from 0 to full width)
    //      tl.fromTo(lineRef.current, {
    //         scaleX: 0, // Start from 0 width
    //         transformOrigin: "left center", // Transform origin from the left
    //     }, {
    //         scaleX: 1, // End at full width
    //         duration: 3, // Duration for the smooth animation
    //         ease: "power2.out", // Smooth easing
    //     });

    //     return () => tl.kill(); // Clean up timeline on component unmount
    // }, []);
    
    

    // const tl = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".venus-panel",
    //         scrub: true,
    //         pin: true,
    //         // pinSpacing: false,
    //         start: "top right",
    //         end: "+=100%",
    //         // markers: true,
    //         onEnter: () => {
    //             // Pause scrollTrigger until line animation is finished
    //             tl.pause();
    //         },
    //         onLeaveBack: () => {
    //             // Resume scrollTrigger once the animation is finished and we're leaving the section
    //             tl.resume();
    //         },
    //       }
    //     });

          // Force recalculation of the ScrollTrigger layout
        // ScrollTrigger.refresh();  // Refresh ScrollTrigger to ensure proper layout

        // return () => tl.kill();

        //   Animate the line from left to right
        //   tl.from(".line", {
        //     scaleX: 0,
        //     transformOrigin: "left center",
        //     ease: "none",
        //   }, 0) // Start immediately
          
        // }, []);



        //   tl.from(lineRef.current, {
        //     scaleX: 0,
        //     transformOrigin: "left center",
        //     ease: "none",
        //   }, 0) // Start immediately
        //   .fromTo(".asteroid", 
        //     { x: "-60vw" }, // Start off-screen to the left
        //     { x: "0", rotation: -360, ease: "none" }, 
        //     0 // Start at the same time as the line
        //   );


    const buttons = [
        {
            text: "Compromise with Venus",
            style: "bg-main-black text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600",
            screen: "choose-venus-1",
            addCharacter: "Venus",
            onClick: () => {
                navigate("/choose-venus-1"); // Navigate to the new route
            }
        },
        {
            text: "Stick with your Malefic",
            style: "bg-main-black text-white px-4 py-2 rounded-md shadow-md",
            screen: "stick-mars-1",
            addCharacter: "Mars",
            onClick: () => {
                navigate("/stick-mars-1"); // Navigate to the new route
            }
        }
    ];

    return (

        <div ref={container} className='container' style={{display: 'flex', flexWrap:'nowrap', height:'100vh', width: "100vw", paddingTop: '55px'}}>

        <section id='first-panel' className="panel bg-jupiter-purple">
            {/* <div className="overlay absolute opacity-0 inset-0 bg-transparent"></div> */}
                panel 1
            
    
            </section>
            
            <section id='second-panel' className="panel flex-col justify-center bg-mars-red">
                {/* <div className="overlay absolute opacity-0 inset-0 bg-transparent"></div> */}
                    panel 2

                    <div className='line-container  h-20'>
                        <span ref={lineRef} className="line w-[100%] h-[8px] relative inline-block mx-3 bg-white"></span>
                    </div>
            
    
            </section>

            <section id='third-panel' className="panel bg-main-black">
                {/* <div className="overlay absolute opacity-0 inset-0 bg-transparent"></div> */}
                
                panel 3
                
                
        
                </section>
        </div>
     
    );
}

export default MarsHorizontalVenus;



{/* <div className='container overflow-x-hidden overflow-y-hidden relative bg-venus-bg-scroll pt-14 bg-center w-[800%] min-h-screen' id='mars-path-container'>
{/* container for the venus-grotto portion at top left of screen */}
{/* <div className='flex flex-col w-2/3 md:w-1/2 h-fit mt-10 ml-5 gap-5' id='venus-grotto-container'>  */}
    {/* container for the top black box */}
    {/* <div className='flex flex-col md:flex-row lg:flex-row gap-8 bg-main-black p-5 text-white rounded-md items-center' id='venus-bio-text-container'>
        <div className='flex flex-col gap-4' id='venus-grotto-text'>
            <h1 className='text-xl font-header'>Venus' Grotto</h1>
            <p className='text-sm'> Keep scrolling to learn about Venus and what she thinks about the asteroids coming. Learn more about your benefic friend!</p>
            <p className='text-xs'>Traits: positivity, love, abundance</p>
        </div>
        <div className='flex flex-col items-center justify-center' id='venus-bio'>
            <h1 className='text-sm text-nowrap'>View Venus' Bio</h1>
            <img className="md:max-w-[65px] h-auto" src={VenusMouthOpen} alt="Venus Bio Image"/>
        </div>
    </div> */}

    {/* container for the bottom black box */}
    {/* <div className='bg-main-black rounded-md w-52 p-5' id='scroll-text-container'>
        <p className='text-xs text-white '>Use your L or R arrow keys to scroll horizontally or scroll.</p>
    </div>
</div> */}

{/* HORIZONTAL SCROLL SECTION */}
{/* <div ref={container} id="scroll-container" className='overflow-x-hidden flex flex-row gap-4 w-full h-fit flex-nowrap pt-7 pl-7 '> */}
    {/* container for FIRST scroll section / dialogue */}
    {/* <section id="panel" className='w-screen m-8 flex-shrink-0 min-h-screen border-main-black border-2 flex flex-col gap-14'>

        yo yo yo */}
        {/* <div id='container-panel-mars' className='flex flex-row w-full h-fit pt-12 justify-between'>
            <div id='mars-dialogue' className='flex flex-row w-fit h-fit mt-9 '>
                <div id='mars-pic' className='mt-14'>
                    <img className="w-[100px] sm:w/[100px] md:w/[100px] lg:w/[150px]" src={MarsGif} alt="Mars Gif"/>
                </div>
                <div id ='mars-text' className='flex w-64 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                    Oof.. why is everything so bright and pink in here? We must be at Venus’ place... I wanna go home already...
                </div>
            </div>
            <div id='mars-dialogue' className='flex flex-row w-fit h-fit mt-9'>
                <div id='mars-pic' className='mt-14'>
                    <img className="w/[100px] sm:w/[100px] md:w/[100px] lg:w/[150px]" src={MarsGif} alt="Venus Gif"/>
                </div>
                <div id ='mars-text' className='flex w-64 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                    Well yeah. I do. Unless you had something better in mind?
                </div>
            </div>
        </div>

        <div id='container-panel-venus' className='flex flex-row w-full h-full justify-center '>
            <div id='venus-dialogue' className='flex flex-row w-fit h-fit'>
                <div id='venus-pic' className='mt-14'>
                    <img className="w/[100px] sm:w/[100px] md:w/[100px] lg:w/[150px]" src={VenusGifAnnoyed} alt="Venus Gif"/>
                </div>
                <div id ='venus-text' className='flex w-64 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                    Ohhhhh look who it is. Mars. Heyyy Mars. Let me guess. You want to go to war?
                </div>
            </div>
        </div> */}
    {/* </section> */}
    {/* w-screen h-screen flex justify-center items-center relative */}

    {/* container for SECOND scroll section / dialogue */}
    {/* <section id='panel' className='venus-panel m-8 relative  border-white border-2 w-screen flex-shrink-0 min-h-screen flex flex-col gap-14'> */}
        {/* <div id='container-panel-venus' className='flex w-full h-fit pt-12 justify-between gap-6 flex-col md:flex-row pl-5 pr-5'>
            <div id='venus-dialogue-2' className='flex flex-row w-fit h-fit'>
                <div id='venus-pic' className='mt-14'>
                    <img className="w/[100px] sm:w/[100px] md:w/[100px] lg:w/[150px]" src={VenusGifDefault} alt="Venus Gif"/>
                </div>
                <div id ='venus-text' className='flex w-fit md:w-72 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                    Maybe the asteroid is lonely and that’s why it’s coming over here. you need to stop asserting dominance for no reason. I probably could charm them with my beauty..
                </div>
            </div> 
            <div id='benefic-text' className='flex w-fit md:w-96 h-fit bg-white rounded-md font-body text-wrap p-5 mr-8 text-xs md:text-sm'>
                Venus tends to take the diplomatic approach when it comes to conflict. Venus wants to do things that are going to feel goooood, and tends to shy away from things that may be uncomfortable.
            </div>
        </div> */}

        {/* <div className='w-full h-full flex flex-col gap-2 justify-center items-center' id='line-container'> */}
            {/* <div id='venus-animation' className='w-1/2 h-full bg-main-black opacity-40 rounded-md p-5'> */}
                {/* <span className="line w-1/2 h-full p-2 m-auto relative inline-block bg-white"></span>
                <p className="text-white mt-4">venus animation here</p>
            </div> */}
        {/* </div>
    </section> */}

    {/* container for THIRD scroll section / dialogue */}
    {/* <section id="panel" className='w-screen min-h-screen relative flex flex-col justify-center'>
        <div id='container-panel-mars' className='items-center flex flex-col gap-14'>
            <div id='mars-dialogue' className='flex flex-row w-fit h-fit self-start p-5'>
                <div id='mars-pic' className='mt-14'>
                    <img className="w/[100px] sm:w/[100px] md:w/[100px] lg:w/[150px]" src={MarsGif} alt="Mars Gif"/>
                </div>
                <div id ='mars-text' className='flex w-96 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                    As a Malefic planet, you feel like you need to push people, maybe in not the best of ways. Sometimes that means that people can be uncomfortable with your energy. However, your energy pushes people to be stronger, and better. You tend to take the more aggressive approach.
                </div>
            </div>
            <div id='mars-dialogue' className='flex flex-row w-fit h-fit self-end p-5'>
                <div id ='mars-text' className='flex w-96 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                    Waiting to take the offense side is difficult for you. You are prone to taking action immediately and channeling your inner warrior.
                </div>
                <div id='mars-pic' className='mt-14'>
                    <img className="w/[100px] sm:w/[100px] md:w/[100px] lg:w/[150px]" src={MarsGif} alt="Venus Gif"/>
                </div>
            </div>
        </div>
    </section> */}

    {/* container for FOURTH scroll section / dialogue */}
    {/* <section id="panel" className='w-screen min-h-screen relative flex flex-col justify-center'>
        <div id='container-panel-mars' className='items-center flex flex-col'>
            <div id='mars-dialogue' className='flex flex-row w-fit h-fit p-5'>
                <div id='mars-pic' className='mt-14'>
                    <img className="w/[100px] sm:w/[100px] md:w/[100px] lg:w/[150px]" src={MarsGif} alt="Mars Gif"/>
                </div>
                <div id ='mars-text' className='flex w-96 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                    mars animation here
                </div>
            </div>
        </div>
    </section> */}

    {/* container for FIFTH scroll section / dialogue */}
    {/* <section id="panel" className='relative w-screen min-h-screen flex flex-col justify-center'>
        <div id='container-panel' className='flex flex-col items-center gap-14'>
            <div id='venus-dialogue' className='flex flex-row w-fit h-fit self-start p-7 ml-9'>
                <div id='venus-pic' className='mt-14'>
                    <img className="w/[100px] sm:w/[100px] md:w/[100px] lg:w/[150px]" src={VenusGifDefault} alt="Venus Gif"/>
                </div>
                <div id ='venus-text' className='flex w-fit md:w-72 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                    Mars, we need to make these asteroids feel GOOD! With my beauty.. of course.
                </div>
            </div> 
            <div id='mars-dialogue' className='flex flex-row w-fit h-fit self-end p-7 mr-9'>
                <div id='mars-pic' className='mt-14'>
                    <img className="w/[100px] sm:w/[100px] md:w/[100px] lg:w/[150px]" src={MarsGif} alt="Mars Gif"/>
                </div>
                <div id ='mars-text' className='flex w-96 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                    mars animation here
                </div>
            </div>
        </div>
    </section> */}

    {/* container for SIXTH/FINAL scroll section / dialogue */}
    {/* <section id="panel" className='relative w-screen min-h-screen flex flex-col justify-center pr-5'>

        yo yo yo 2 */}
        {/* <div id='container-panel' className='flex flex-col items-center gap-14'>
            <div id='header' className='font-header text-white font-bold'>
                <h1>Decision Time: 15 seconds</h1>
            </div>
            <div id='planet-pics' className='flex flex-row gap-5 items-center justify-center w-full h-fit'>
                <img className="w/[100px] sm:w/[100px] md:w/[100px] lg:w/[150px]" src={MarsGif} alt="Mars Gif"/>
                <img className="w/[100px] sm:w/[100px] md:w/[100px] lg:w/[150px]" src={VenusGifMouthOpen} alt="Mars Gif"/>
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
                    addCharacter={addCharacter}
                />
            </div>
        </div> */}
    {/* </section>
</div>
</div> */}