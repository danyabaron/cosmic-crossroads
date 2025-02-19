import React, { useEffect, useState, useRef } from 'react';

import VenusMouthOpen from '../../../assets/venus-art/venus-mouth-open.png';
import MarsGif from '../../../assets/mars-art/mars-art-official.gif';
import VenusGifAnnoyed from '../../../assets/venus-art/venus-annoyed-gif.gif';
import VenusGifDefault from '../../../assets/venus-art/venus-default-GIF.gif';
import VenusGifMouthOpen from '../../../assets/venus-art/venus-mouth-open-gif.gif';
import VenusAnnoyedImg from '../../../assets/venus-art/venus-annoyed.png';
import VenusDefaultImg from '../../../assets/venus-art/venus-default.png';
import ButtonContainer from '../../ButtonContainer';
import AsteroidMouthOpen from '../../../assets/asteroid-art/asteroid-mouth-open.png'; 
import AsteroidAngry from '../../../assets/asteroid-art/asteroid-angry.png';
import AsteroidHappy from '../../../assets/asteroid-art/asteroid-happy.png';
import YellowSparkle from '../../../assets/other-art/yellow-sparkle.png';
import BlackSparkle from '../../../assets/other-art/black-sparkle.png';  
import { gsap } from "gsap";
import { useNavigate } from 'react-router-dom';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);



function getRandomPosition(min, max) {
    return Math.random() * (max - min) + min;
  }

  

function MarsHorizontalVenus({ setScreen, addCharacter }) {

    const [decisionMade, setDecisionMade] = useState(false); // Track if decision is made
    // const container = useRef(null);
    

    const navigate = useNavigate(); // Use navigate hook


    console.log("MarsHorizontalVenus received addCharacter:", addCharacter); // Debugging

    const minDistance = 40; // Minimum distance between asteroids (adjust as needed)
    const maxRetries = 50;  // Prevent infinite loops

    function generateAsteroidPositions(numAsteroids) {
        let asteroids = [];

        for (let i = 0; i < numAsteroids; i++) {
            let newAsteroid;
            let overlapping;
            let retries = 0;

            do {
                overlapping = false;
                newAsteroid = {
                    top: getRandomPosition(10, 90),  // Random top position between 10 and 60
                    left: getRandomPosition(10, 30) // Random left position between 10 and 30
                };

                // Check against all existing asteroids
                for (let asteroid of asteroids) {
                    let dx = newAsteroid.left - asteroid.left;
                    let dy = newAsteroid.top - asteroid.top;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < minDistance) {
                        overlapping = true;
                        break;
                    }
                }

                retries++;
                if (retries > maxRetries) {
                    console.warn("Max retries reached, placing asteroid anyway.");
                    break; // Avoid infinite loop in rare cases
                }

            } while (overlapping);

            asteroids.push(newAsteroid);
        }

        return asteroids;
    }

    const asteroidPositions = generateAsteroidPositions(5);

      // Logging asteroid positions correctly
        asteroidPositions.forEach((position, index) => {
            console.log(`Asteroid ${index}: top = ${position.top}, left = ${position.left}`);
        });
   



      useGSAP(() => {
        const marsDialogs = gsap.utils.toArray(".mars-dialogue");
        const venusDialogs = gsap.utils.toArray(".venus-dialogue");
    
       
    
        // Mars Dialog Animations (slower and smoother)
        marsDialogs.forEach((dialog) => {
            gsap.fromTo(dialog,
                { x: "-100%", opacity: 0 },
                {
                    x: "0%",
                    opacity: 1,
                    duration: 3, // Slower animation
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: dialog,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: 1,  // Keeps it synced with the scroll
                        // markers: true,  // Optional markers for debugging
                    }
                }
            );
        });
    
        // Venus Dialog Animations (slower and smoother)
        venusDialogs.forEach((dialog) => {
            gsap.fromTo(dialog,
                { x: "100%", opacity: 0 },
                {
                    x: "0%",
                    opacity: 1,
                    duration: 3, // Slower animation
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: dialog,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: 1,  // Keeps it synced with the scroll
                        // markers: true,  // Optional markers for debugging
                    }
                }
            );
        });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".venus-line",
                        scrub: true,
                        pin: true,
                        start: "top top", // Start pinning when the top of .venus-line reaches the top of the viewport
                        end: "+=100%", // Increase this value to match the animation duration
                        markers: true, // Debugging
                    }
                });
            
                tl.from(".line", {
                    scaleX: 0,
                    transformOrigin: "left center",
                    ease: "none",
                    duration: 2, // Match this with the `end` value
                }, 0); // Start immediately

              
                   // Move Venus and Asteroids across the screen with the line
                tl.to(".venus-annoyed, .asteroid-angry", {
                    x: "50vw", // Moves them to the middle of the screen
                    ease: "power2.out",
                    duration: 2
                }, "<"); // Sync with the line animation

                // Change images at the midway point
                tl.add(() => {
                    // Change Venus' image when the line reaches the middle
                    document.querySelector(".venus-annoyed").src = VenusMouthOpen;

                    // Change asteroid images to happy at the midway point
                    document.querySelectorAll(".asteroid-angry").forEach(img => img.src = AsteroidHappy);
                }, tl.duration() / 2); // Trigger halfway through the animation




            }, []);

                    // tl.fromTo("#animation-container .line", {
                    //     scaleX: 0,
                    //     transformOrigin: "left center",
                    // }, {
                    //     scaleX: 1,
                    //     ease: "power2.out",
                    //     duration: 2,
                    // });





        // let tl = gsap.timeline({
        //     scrollTrigger: {
        //       trigger: "#mars-venus-panel1",
        //       start: "top top",
        //       end: "+=100%", // Adjust this to match your animation duration
        //       pin: true, // Keeps it fixed
        //       scrub: true, // Ensures smooth animation with scrolling
        //       onEnter: () => console.log("Pinned!"),
        //       onLeave: () => console.log("Unpinned!"),
        //     }
        //   });
          
        //   // Animate the line while #mars-venus-panel1 is pinned
        //   tl.to(".line", {
        //     scaleX: 1, // Example animation
        //     duration: 2, 
        //     ease: "power1.out"
        //   });
          
        //   // Add a delay before unpinning to ensure smooth transition
        //   tl.to("#mars-venus-panel1", {
        //     opacity: 1, // Optional transition effect
        //     duration: 1,
        //     onComplete: () => {
        //       ScrollTrigger.getById("#mars-venus-panel1")?.kill(); // Ensures it unpins
        //     }
        //   });
        
        
    

    
    
    

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
        <div className='bg-venus-bg-scroll w-full min-w-screen relative pt-14 bg-center overflow-x-hidden ' id='mars-path-container'>
            {/* container for the venus-grotto portion at top left of screen */}
            <div className='flex flex-col w-2/3 md:w-1/2 h-fit mt-10 ml-5 gap-5' id='venus-grotto-container'>
                {/* container for the top black box */}
                <div className='flex flex-col md:flex-row lg:flex-row gap-8 bg-main-black p-5 text-white rounded-md items-center' id='venus-bio-text-container'>
                    <div className='flex flex-col gap-4' id='venus-grotto-text'>
                        <h1 className='text-xl font-header'>Venus' Grotto</h1>
                        <p className='text-sm'> Keep scrolling to learn about Venus and what she thinks about the asteroids coming. Learn more about your benefic friend!</p>
                        <p className='text-xs'>Traits: positivity, love, abundance</p>
                    </div>
                    <div className='flex flex-col items-center justify-center' id='venus-bio'>
                        <h1 className='text-sm text-nowrap'>View Venus' Bio</h1>
                        <img className="md:max-w-[65px] h-auto" src={VenusMouthOpen} alt="Venus Bio Image"/>
                    </div>
                </div>

                {/* container for the bottom black box */}
                <div className='bg-main-black rounded-md w-52 p-5' id='scroll-text-container'>
                    <p className='text-xs text-white '>Use your L or R arrow keys to scroll horizontally or scroll.</p>
                </div>
            </div>

            
                {/* container for FIRST scroll section / dialogue */}

                <section id="panel" className='mars-venus-panel1 w-full min-h-screen flex flex-col gap-8'>

                    <div id='container-panel-mars' className='flex flex-col w-full h-full pt-12 justify-between'>

                        <div id='' className='mars-dialogue flex flex-row w-fit h-fit mt-9 ml-12'>
                            <div id='mars-pic' className='mt-14'>
                                <img className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" src={MarsGif} alt="Mars Gif"/>
                            </div>
                            <div id ='mars-text' className='flex w-64 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                                Oof.. why is everything so bright and pink in here? We must be at Venus’ place... I wanna go home already...
                            </div>
                        </div>

                        <div id='container-panel-venus' className='flex flex-row w-full h-full justify-end'>
                            <div id='' className='venus-dialogue flex flex-row mr-8 w-fit h-fit'>
                                <div id='venus-pic' className='mt-14'>
                                    <img className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" src={VenusGifAnnoyed} alt="Venus Gif"/>
                                </div>
                                <div id ='venus-text' className='flex w-64 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                                    Ohhhhh look who it is. Mars. Heyyy Mars. Let me guess. You want to go to war?
                                </div>
                            </div>
                        </div>

                        <div id='' className='mars-dialogue flex flex-row w-full h-fit mt-9 justify-center'>
                            <div id='mars-pic' className='mt-14'>
                                <img className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" src={MarsGif} alt="Venus Gif"/>
                            </div>
                            <div id ='mars-text' className='flex max-w-64 h-fit bg-white rounded-md font-body break-words p-5 text-xs md:text-sm'>
                                Well yeah. I do. Unless you had something better in mind?
                            </div>
                        </div>
                    </div>

                    
                </section>

                {/* container for SECOND scroll section / dialogue */}
                <section  id="panel" className='venus-line relative  w-full min-w-screen min-h-screen flex flex-col gap-24 justify-center items-center'>
                    
                    <div id='container-panel-venus' className='flex w-full justify-between flex-col md:flex-row px-40'>
                        
                        <div id='venus-dialogue-2' className='flex flex-row w-fit h-fit'>
                            <div id='venus-pic' className='h-fit mt-28'>
                                <img className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" src={VenusGifDefault} alt="Venus Gif"/>
                            </div>
                            <div id ='venus-text' className='flex mb-14 w-fit md:w-72 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                                Maybe the asteroid is lonely and that’s why it’s coming over here. you need to stop asserting dominance for no reason. I probably could charm them with my beauty..
                            </div>
                        </div> 
                        <div id='benefic-text' className='relative flex w-fit md:w-96 h-fit bg-white rounded-md font-body text-wrap p-5 mr-8 text-xs md:text-sm'>
                        <img id='corner-black-sparkle' className='absolute w-[100px] h-auto max-w-full max-h-full object-contain -top-8 -right-11' loading='lazy' src={YellowSparkle}/>
                            Venus tends to take the diplomatic approach when it comes to conflict. Venus wants to do things that are going to feel goooood, and tends to shy away from things that may be uncomfortable.
                        </div>
                    
                    </div>

                    <div className="relative top-auto left-0 w-full h-[100px] z-10">
                            {/* Venus Annoyed Image */}
                            <img className='venus-annoyed absolute z-10 left-0 w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]' src={VenusAnnoyedImg} alt="Venus Annoyed Image"/>

                                {/* Asteroids */}
                                {asteroidPositions.map((position, index) => (
                                   
                                <img
                                    key={index}
                                    className="asteroid-angry absolute w-[50px] h-auto max-w-full max-h-full object-contain"
                                    src={AsteroidAngry}
                                    alt={`Asteroid ${index}`}
                                    style={{
                                    top: `${position.top}%`,  // Using the random top value
                                    left: `${position.left}%`,  // Using the random left value
                                    
                                    }}
                                />
                                ))}
                               
                    </div>

                    <div className='line-container relative w-full h-8 flex flex-col gap-2 justify-center items-center' >

                        

                        {/* <img className='asteroid-angry absolute w-[40px] h-auto max-w-full max-h-full object-contain -top-10 left-40' src={AsteroidAngry} alt="Asteroid Angry Image"/> */}
                       

                       
                            <span className="line w-full h-2 p-2 m-auto relative inline-block z-0 bg-white"></span>
                            
                        
                    </div>
                </section>

            

                {/* container for THIRD scroll section / dialogue */}
                <section id="panel" className='w-screen min-h-screen relative flex flex-col'>
                    <div id='container-panel-mars' className='items-center flex flex-col gap-14'>
                        <div id='mars-dialogue' className='flex flex-row w-fit h-fit self-start relative ml-44 p-5'>
                            
                            <div id='mars-pic' className='mt-14'>
                                <img className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" src={MarsGif} alt="Mars Gif"/>
                            </div>
                            <div id ='mars-text' className=' w-96 relative h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                            <img id='corner-asteroid' className='absolute w-[40px] h-auto max-w-full max-h-full object-contain -top-4 -right-3 rotate-12' loading='lazy' src={AsteroidMouthOpen}/>
                                As a Malefic planet, you feel like you need to push people, maybe in not the best of ways. Sometimes that means that people can be uncomfortable with your energy. However, your energy pushes people to be stronger, and better. You tend to take the more aggressive approach.
                            </div>
                        </div>
                        <div id='mars-dialogue' className='flex flex-row w-fit h-fit self-end mr-44 p-5'>
                            <div id ='mars-text' className='flex w-96 h-fit relative bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                                <img id='corner-black-sparkle' className='absolute w-[100px] h-auto max-w-full max-h-full object-contain -top-11 -left-11' loading='lazy' src={BlackSparkle}/>
                                Waiting to take the offense side is difficult for you. You are prone to taking action immediately and channeling your inner warrior.
                            </div>
                            <div id='mars-pic' className='mt-14'>
                                <img className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" src={MarsGif} alt="Venus Gif"/>
                            </div>
                        </div>
                    </div>
                </section>

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
                    <div id='container-panel' className='flex flex-col items-center gap-14'>
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
                    </div>
                </section> */}
            </div>
        
    );
}

export default MarsHorizontalVenus;