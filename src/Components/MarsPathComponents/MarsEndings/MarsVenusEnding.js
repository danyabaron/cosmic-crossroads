import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import VenusMouthOpen from '../../../assets/venus-art/venus-mouth-open.png';
import MarsGif from '../../../assets/mars-art/mars-art-official.gif';
import MarsStaticImg from '../../../assets/mars-art/mars-art-official1.png';
import VenusGifDefault from '../../../assets/venus-art/venus-default-GIF.gif';
import VenusGifAnnoyed from '../../../assets/venus-art/venus-annoyed-gif.gif';
import VenusGifSmirk from '../../../assets/venus-art/venus-smirk-gif.gif';
import VenusGifMouthOpen from '../../../assets/venus-art/venus-mouth-open-gif.gif';

import ButtonContainer from '../../ButtonContainer';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

// mars + venus ending - user ended with mars and venus on team: mars + venus in status bar

function MarsVenusEnding({ setScreen }) {

    const navigate = useNavigate();
    const paragraphRefs = useRef([]);
    const marsTextRef = useRef(null);
    const venusTextRef = useRef(null);

    // Reset paragraph refs array
    paragraphRefs.current = [];

    // Add to refs array function
    const addToParagraphRefs = (el) => {
        if (el && !paragraphRefs.current.includes(el)) {
            paragraphRefs.current.push(el);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        
        // Animate intro text divs from alternating sides with more dramatic timing
        paragraphRefs.current.forEach((element, index) => {
            const startX = index % 2 === 0 ? -150 : 150; // Increase distance for more dramatic entry
            
            gsap.fromTo(element.parentNode, // Target the parent div containing the paragraph
                { 
                    opacity: 0,
                    x: startX,
                },
                { 
                    opacity: 1,
                    x: 0,
                    duration: 1.5, // Longer duration for more dramatic effect
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: element.parentNode,
                        start: "top 75%", // Start animation when element is further down in viewport
                        end: "top 35%", // End animation when element is higher in viewport
                        toggleActions: "play reverse restart reverse",
                        scrub: 0.8, // Smoother scrubbing with more delay
                    }
                }
            );
        });
        
        // Fade in for Mars text section with more dramatic timing
        if (marsTextRef.current) {
            gsap.fromTo(marsTextRef.current, 
                { 
                    opacity: 0,
                    x: -80 // Increased distance
                },
                { 
                    opacity: 1,
                    x: 0,
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: marsTextRef.current,
                        start: "top 80%",
                        end: "top 40%", // Longer animation window
                        toggleActions: "play reverse restart reverse",
                        scrub: 0.8
                    }
                }
            );
        }
        
        // Fade in for Venus text section with more dramatic timing
        if (venusTextRef.current) {
            gsap.fromTo(venusTextRef.current, 
                { 
                    opacity: 0,
                    x: -80 // Increased distance
                },
                { 
                    opacity: 1,
                    x: 0,
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: venusTextRef.current,
                        start: "top 80%",
                        end: "top 40%", // Longer animation window
                        toggleActions: "play reverse restart reverse",
                        scrub: 0.8
                    }
                }
            );
        }
    }, []);

    return (
        <div className="bg-default-bg max-w-screen min-h-screen flex flex-col pt-14 justify-center items-center min-w-screen relative overflow-hidden">
             
             <section className='w-full min-h-screen flex flex-col pt-6  justify-center items-center gap-3'>
                <h1 className="text-white font-header text-3xl mb-5 mt-5 z-10">The Battle Begins...</h1>

                
                <div className='flex flex-row gap-3 justify-center items-center w-full'>
                    <img src={MarsGif} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Mars" />
                    <img src={VenusGifSmirk} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Venus" />
                </div>

                <div className='bg-main-black drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)]  w-1/2 flex justify-center items-center rounded-md p-6 shadow-xl'>
                    <p ref={addToParagraphRefs} className='text-white text-sm font-body text-center p-4'>
                            You chose to team up with Venus! Together, your combined strengths of action and diplomacy created a powerful alliance. 
                            Mars, with your traditional malefic qualities of boldness and drive, you brought the energy and determination needed to 
                            face the asteroid crisis head-on. 
                    </p>
                </div>

                <div className='bg-main-black drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)]  w-1/2 flex justify-center items-center rounded-md p-6 shadow-xl'>
                    <p ref={addToParagraphRefs} className='text-white text-sm font-body text-center p-4'>
                            Venus, with her benefic qualities of charm and diplomacy, softened your 
                            approach and helped you negotiate a peaceful resolution with the asteroids. 
                            However, by not choosing Jupiter, the planet of expansion and wisdom, 
                            you missed out on the opportunity to bring a broader perspective and optimism to the table. 
                    </p>
                </div>
                <div className='bg-main-black drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)]  w-1/2 flex justify-center items-center rounded-md p-6 shadow-xl'>
                    <p ref={addToParagraphRefs} className='text-white text-sm font-body text-center p-4'>
                        While your alliance with Venus was strong, the absence of Jupiter's influence meant that some long-term solutions to the 
                        solar system's challenges might have been overlooked. 
                        Nevertheless, your teamwork with Venus set a shining example of how action and diplomacy can work hand in hand to create harmony in the galaxy.
                    
                    </p>
                </div>
             </section>

             <section className='w-full min-h-screen flex flex-col gap-3 justify-center items-center'>
                <div id='mars-ending' className='flex flex-col gap-4 justify-center items-center w-full'>
                    <h1 className="text-white text-3xl mb-16 z-10"> Mars </h1>
                    <div className='flex flex-row gap-3 justify-center items-center w-full'>
                        <img src={MarsGif} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Mars" />
                        <p ref={marsTextRef} className='text-main-black rounded-lg p-6 font-body bg-white w-1/2'>
                            As Mars, your natural inclination for action and decisiveness played a key role in addressing the asteroid crisis. 
                            Your willingness to team up with Venus showcased your ability to adapt and collaborate, even when it wasn't your first instinct. 
                            Together, you and Venus were able to create a peaceful resolution, proving that even the most action-oriented forces 
                            can benefit from a touch of diplomacy.
                        </p>
                    </div>
                </div>
             </section>

             <section className='w-full min-h-screen flex flex-col gap-3 justify-center items-center'>
                <div id='venus-ending' className='flex flex-col gap-4 justify-center items-center w-full'>
                    <h1 className="text-white text-3xl mb-16 z-10"> Venus </h1>
                    <div className='flex flex-row gap-3 justify-center items-center w-full'>
                        <img src={VenusGifMouthOpen} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Venus" />
                        <p ref={venusTextRef} className='text-main-black rounded-lg p-6 font-body bg-white w-1/2'>
                            Venus brought her charm and grace to the forefront, using her benefic qualities to foster understanding and unity. 
                            She even suggested hosting a celebratory gathering for the asteroids to solidify the new alliance. 
                            Without Venus, the asteroids might have felt alienated or undervalued, but her diplomatic skills ensured they felt welcomed and appreciated. 
                            Her presence was instrumental in turning a potential conflict into a harmonious resolution.
                        </p>
                    </div>
                </div>
             </section>

        <button 
         className="w-36 h-10 mb-7 rounded-lg bg-button-blue text-white relative z-10 
          px-4 font-medium text-center flex items-center justify-center
          hover:bg-opacity-80 shadow-lg hover:shadow-xl transition-all duration-200" 
         onClick={() => navigate("/marsintro")}
       >
         Play Again
       </button>
        </div>
     );
}

export default MarsVenusEnding;