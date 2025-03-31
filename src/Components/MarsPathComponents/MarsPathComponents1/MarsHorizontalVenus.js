import React, { useEffect, useState, useRef, use } from 'react';

import VenusMouthOpen from '../../../assets/venus-art/venus-mouth-open.png';
import MarsGif from '../../../assets/mars-art/mars-art-official.gif';
import MarsDefaultPng from '../../../assets/mars-art/mars-art-official1.png';
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
import Fireball from '../../../assets/other-art/fire.gif';
import { gsap } from "gsap";
import { useNavigate } from 'react-router-dom';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { TbLabelImportant } from 'react-icons/tb';

gsap.registerPlugin(ScrollTrigger);



function getRandomPosition(min, max) {
    return Math.random() * (max - min) + min;
  }

  

function MarsHorizontalVenus({ setScreen, addCharacter, characters }) {

    // venus bio popup state
    const [modalIsOpen, setIsOpen] = useState(false);

    // Toggle the popup
    const togglePopup = () => {
        setIsOpen(!modalIsOpen);
    };
    
    

    const navigate = useNavigate(); // Use navigate hook


    // console.log("MarsHorizontalVenus received addCharacter:", addCharacter); // Debugging

    const marsRef = useRef(null);
    const fireballContainerRef = useRef(null);
    const marsBattleRef = useRef(null);
    const asteroidContainerRef = useRef(null);

     // Declare variables outside the useGSAP callback
     let marsAnimation;
     let fireballTimeout;
     let fireballScrollTrigger;
     let asteroidScrollTrigger;
     let lightningInterval;



     // ASTEROID POSITIONING IN FOURTH PANEL ANIMATION
     const minDistance = 40;
     const maxRetries = 50;
 
     function generateAsteroidPositions(numAsteroids) {
         let asteroids = [];
         for (let i = 0; i < numAsteroids; i++) {
             let newAsteroid;
             let overlapping;
             let retries = 0;
             do {
                 overlapping = false;
                 newAsteroid = {
                     top: getRandomPosition(10, 90),
                     left: getRandomPosition(10, 30)
                 };
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
                     break;
                 }
             } while (overlapping);
             asteroids.push(newAsteroid);
         }
         return asteroids;
     }
 
     const asteroidPositions = generateAsteroidPositions(5);
   


        // FIRST PANEL ANIMATION


      useGSAP(() => {
        const marsDialogs = gsap.utils.toArray(".mars-dialogue");
        const venusDialogs = gsap.utils.toArray(".venus-dialogue");
        const maleficDialog1 = gsap.utils.toArray(".malefic-dialogue1");
        const maleficDialog2 = gsap.utils.toArray(".malefic-dialogue2");

        console.log(maleficDialog2);


    
        marsDialogs.forEach((dialog) => {
            gsap.fromTo(dialog,
                { x: "-100%", opacity: 0 },
                {
                    x: "0%",
                    opacity: 1,
                    duration: 2, // Faster animation
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: dialog,
                        start: "top 90%", // Start animation when just entering viewport
                        end: "top 60%", // End animation sooner
                        scrub: 0.5,  // More responsive scrubbing
                        toggleActions: "restart pause reverse pause", // Better behavior for scroll up/down
                        // markers: true,  // For debugging
                    }
                }
            );
        });
    
        venusDialogs.forEach((dialog) => {
            gsap.fromTo(dialog,
                { x: "100%", opacity: 0 },
                {
                    x: "0%",
                    opacity: 1,
                    duration: 2, // Faster animation
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: dialog,
                        start: "top 90%", // Start animation when just entering viewport
                        end: "top 60%", // End animation sooner
                        scrub: 0.5,  // More responsive scrubbing
                        toggleActions: "restart pause reverse pause", // Better behavior for scroll up/down
                        // markers: true,  // For debugging
                    }
                }
            );
        });

        maleficDialog1.forEach((dialog) => {
            gsap.fromTo(dialog,
                { x: "-100%", opacity: 0 },
                {
                    
                    x: "0%",
                    opacity: 1,
                    duration: 1.5, // Faster animation
                    delay: 0.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: '#malefic-text', // Target the panel
                       
                        start: "bottom center", // Start when the center of the panel reaches the center of viewport
                        // end: "bottom center", // End when bottom of panel reaches center
                        scrub: 0.5,  // More responsive scrubbing
                        toggleActions: "restart pause reverse pause", // Better behavior for scroll up/down
                        markers: {
                            startColor: "green",
                            endColor: "red",
                            fontSize: "12px",
                            indent: 10,
                            fontWeight: "bold",
                            id: "malefic-dialog-1"  // Custom ID for these markers
                        }
                    }
                }
            );
        });

        maleficDialog2.forEach((dialog) => {
            gsap.fromTo(dialog,
                { x: "100%", opacity: 0 },
                {
                   
                    x: "0%",
                    opacity: 1,
                    delay: 1,
                    duration: 2, // Faster animation
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: "#malefic-text", // Target the panel
                        start: "bottom center", // Start when the center of the panel reaches the center of viewport 
                        // end: "bottom center", // End when bottom of panel reaches center
                        scrub: 0.5,  // More responsive scrubbing
                        
                        toggleActions: "restart pause reverse pause", // Better behavior for scroll up/down
                        markers: {
                            startColor: "purple",
                            endColor: "blue", 
                            fontSize: "12px",
                            fontWeight: "bold",
                            id: "malefic-dialog-2"  // Custom ID for these markers
                        }
                    }
                }
            );
        });

      
        
}, []);


        // SECOND PANEL LINE AND ASTEROID ANIMATION
                            
        useGSAP(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".venus-line",
                    scrub: true,
                    pin: true,
                    start: "top top",
                    end: "+=100%", 
                    markers: true, // Remove this after debugging
                    onEnter: () => {
                        // Change images to the "open mouth" state when entering the trigger
                        // document.querySelector(".venus-annoyed").src = VenusMouthOpen;
                        // document.querySelectorAll(".asteroid-angry").forEach(img => img.src = AsteroidHappy);
                    },
                    onLeaveBack: () => {
                        document.querySelector(".venus-annoyed").src = VenusAnnoyedImg;
                        document.querySelectorAll(".asteroid-angry").forEach(img => img.src = AsteroidAngry);
                }
            }
            });
        
            // Animate the line
            tl.from(".line", {
                scaleX: 0,
                transformOrigin: "left center",
                ease: "none",
                duration: 2,
            }, 0);
        
            //  // Shake the background
            // tl.to(".venus-line", {
            //     x: () => gsap.utils.random(-10, 10),  // Shake horizontally
            //     y: () => gsap.utils.random(-5, 5),    // Shake vertically
            //     // rotation: () => gsap.utils.random(-5, 5),  // Add slight rotation
            //     duration: 0.2,
            //     repeat: 3,  // Repeat the shake a few times
            //     ease: "none",
            // }, 0); // Make sure the shake happens when the animation starts
        
            // Move Venus and Asteroids
            tl.to(".venus-annoyed, .asteroid-angry", {
                x: "50vw", 
                ease: "power2.out",
                duration: 2,
                scale: 1, // Ensure scale remains at 1 (no shrinking)
            }, "<");
        
            // Add the glow effect (this will trigger only once)
            tl.to(".venus-annoyed, .asteroid-angry", {
                filter: "drop-shadow(0px 0px 10px rgba(255, 215, 0, 1))",
                duration: 0.5, 
                ease: "power1.inOut",
            }, 0.5);

        
            // Midway point: Change images only once
            tl.add(() => {
                // Change Venus' image to mouth open
                document.querySelector(".venus-annoyed").src = VenusMouthOpen;
        
                // Change asteroid images to happy at the midway point
                document.querySelectorAll(".asteroid-angry").forEach(img => img.src = AsteroidHappy);
            }, tl.duration() / 2); // Trigger midway point
        
            // Optional: Add a subtle effect for Venus and asteroids after the image change
            tl.to(".venus-annoyed, .asteroid-angry", {
                scale: 1, // Ensure scale stays at 1
                rotation: 0, // Reset rotation
                duration: 1,
                ease: "power2.out",
            }, tl.duration() / 2 + 0.5); // After the image change
        }, []);
            



        // FOURTH PANEL / MARS SHOOTING FIREBALLS ANI
         // FOURTH PANEL / MARS SHOOTING FIREBALLS ANI
         useGSAP(() => {
            // Mars movement (side to side)
            
            marsAnimation = gsap.to(marsRef.current, {
                x: 600,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: marsBattleRef.current,
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play none none none",
                },
            });
        
         

            // Function to shoot multiple fireballs
            const shootFireball = () => {
                const marsRect = marsRef.current.getBoundingClientRect(); // Get Mars' position on screen

                // Number of fireballs to shoot at once
                const fireballsToShoot = 5;  // You can adjust this number to shoot more or less fireballs

                for (let i = 0; i < fireballsToShoot; i++) {
                    // Create a new fireball element for each shot
                    const fireball = document.createElement("img");
                    fireball.src = Fireball;  // Use your fireball image
                    fireball.className = "absolute w-10 h-10";  // Adjust size as needed
                    fireball.style.left = `${marsRect.left + marsRect.width / 2 - 25}px`; // Center fireball relative to Mars
                    fireball.style.top = `${marsRect.top + marsRect.height / 2}px`;
                    fireballContainerRef.current.appendChild(fireball);

                    // Randomize the direction for each fireball
                    const randomX = Math.random() * 200 - 100;  // Random horizontal movement between -100 and 100
                    const randomY = Math.random() * -400 - 200; // Random vertical movement between -200 and -600
                    const randomDuration = Math.random() * 2 + 2; // Random duration between 2 and 4 seconds

                    // Animate the fireball's movement
                    gsap.fromTo(
                        fireball,
                        { x: 0, y: 0, opacity: 1 },
                        {
                            x: randomX,         // Fireball moves in a random horizontal direction
                            y: randomY,         // Fireball moves in a random vertical direction
                            duration: randomDuration, // Random duration for a slow effect
                            opacity: 0,          // Fade out the fireball
                            ease: "power2.out",  // Smooth easing
                            onComplete: () => fireball.remove(), // Remove after animation completes
                        }
                    );
                }
            };

            // Function to continuously shoot multiple fireballs with a small delay
            const shootFireballsContinuously = () => {
                fireballTimeout = setInterval(shootFireball, 1000); // Shoots multiple fireballs every 1000ms (1 second)
            };

            // Start shooting fireballs when ScrollTrigger activates
            fireballScrollTrigger = ScrollTrigger.create({
                trigger: marsBattleRef.current,
                start: "top center",
                end: "bottom center",
                onEnter: shootFireballsContinuously, // Start shooting when ScrollTrigger enters
                onLeaveBack: () => clearInterval(fireballTimeout),  // Stop shooting when scrolling back
                toggleActions: "play none none none", // Only play on enter
            });

            // Create falling asteroids
            const createAsteroids = () => {
                const asteroidCount = 5; // Limit the number of asteroids created at once
                const existingAsteroids = asteroidContainerRef.current.querySelectorAll('img'); // Find existing asteroids
        
                // Avoid generating too many asteroids by checking existing ones
                if (existingAsteroids.length >= 10) return; // Only allow up to 10 asteroids on screen at a time
        
                for (let i = 0; i < asteroidCount; i++) {
                    const asteroid = document.createElement("img");
                    asteroid.src = AsteroidAngry;  // Use actual asteroid image
                    asteroid.className = "absolute w-10 h-10 z-0";
                    asteroid.style.left = `${Math.random() * 100}vw`; // Randomize starting position
                    asteroid.style.top = `-50px`; // Start above the screen
                    asteroidContainerRef.current.appendChild(asteroid);
        
                    // Continuous falling + regenerate at top once out of view
                    gsap.to(asteroid, {
                        y: "100vh", // Move down the screen
                        opacity: 1,
                        duration: Math.random() * 3 + 2, // Random speed
                        ease: "linear",
                        onComplete: () => {
                            asteroid.remove(); // Remove asteroid once it hits the bottom
                            createAsteroids(); // Call to regenerate another asteroid
                        },
                    });
                }
            };

               // Asteroid falling trigger (Continuous falling)
               asteroidScrollTrigger = ScrollTrigger.create({
                trigger: marsBattleRef.current,
                start: "top center",
                end: "bottom center",
                onEnter: createAsteroids,
                onEnterBack: createAsteroids,
                toggleActions: "play none none none", // Allows for continuous asteroid generation as you scroll up and down


            });


            const createLightning = () => {
                // console.log("Lightning created!");
            
                // Ensure you have a container with id 'lightningContainer' in your HTML
                const lightningContainer = document.getElementById("lightningContainer");
                if (!lightningContainer) {
                    console.warn("No lightningContainer found. Lightning won't be created.");
                    return;
                }
            
                const lightning = document.createElement("div");
                lightning.classList.add("absolute", "top-0", "left-1/2", "w-[4px]", "h-full", "bg-[#FFFF00]", "z-[9999]", "pointer-events-none");
            
                // Create a zigzag pattern for the lightning
                const createLightningParts = () => {
                    const parts = [];
                    let currentTop = 0;
            
                    // Generate a few zigzag segments
                    for (let i = 0; i < 5; i++) {
                        const part = document.createElement("div");
                        part.classList.add("absolute", "bg-[#FFFF00]", "z-[9999]", "pointer-events-none");
            
                        const left = Math.random() * 20 + 40; // Randomize horizontal position
                        const height = Math.random() * 50 + 30; // Randomize the length of each part
                        const rotate = Math.random() * 60 - 30; // Add some rotation for the zigzag effect
            
                        part.style.left = `${left}%`; // Random horizontal position along the top
                        part.style.top = `${currentTop}px`;
                        part.style.width = "6px";
                        part.style.height = `${height}px`;
                        part.style.transform = `rotate(${rotate}deg)`;
                        currentTop += height;  // Update top for next part
            
                        parts.push(part);
                    }
            
                    return parts;
                };
            
                const lightningParts = createLightningParts();
                lightningParts.forEach(part => lightning.appendChild(part));
                lightningContainer.appendChild(lightning);
            
                // Animate the lightning with GSAP
                gsap.fromTo(lightning, {
                    opacity: 0,
                    scale: 0.1,
                    rotation: Math.random() * 90 - 45, // Random initial rotation
                    top: "-10%", // Start the lightning slightly above the section (optional)
                }, {
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    top: "0%", // Set the lightning to be at the top of the section
                    duration: 0.2,
                    ease: "power2.inOut",
                    onComplete: () => {
                        gsap.to(lightning, {
                            opacity: 0,
                            scale: 0.1,
                            duration: 0.3,
                            ease: "power2.out",
                            onComplete: () => lightning.remove(),
                        });
                    },
                });
            
                // Add background fade to black
                gsap.to('.mars-battle', {
                    backgroundColor: "#000000",  // Set to black
                    duration: 0.2,
                    ease: "power2.inOut",
                    onComplete: () => {
                        gsap.to('.mars-battle', {
                            backgroundColor: "initial",  // Reverts back to white
                            duration: 0.5,
                            ease: "power2.out",
                        });
                    },
                });
            };
            
            // Trigger lightning every 5 seconds with a random delay between strikes
           lightningInterval =  setInterval(() => {
                createLightning(); // Create lightning every 5 seconds
            }, Math.random() * 3000 + 2000); // Randomize the time between strikes (2-5 seconds)


            return () => {
                if (marsAnimation) marsAnimation.kill();
                if (fireballTimeout) clearInterval(fireballTimeout);
                if (fireballScrollTrigger) fireballScrollTrigger.kill();
                if (asteroidScrollTrigger) asteroidScrollTrigger.kill();
                if (lightningInterval) clearInterval(lightningInterval);
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
            
         
           
        
        }, []);
           
        
        //mount to top of page
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    

    
    
    

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
        <div className='bg-venus-bg-reg w-full min-w-screen relative pt-14 bg-center overflow-x-hidden' id='venus-path-container'>
            {/* container for the venus-grotto portion at top left of screen */}
            <div className='flex flex-col w-2/3 md:w-1/2 h-fit mt-10 ml-5 gap-5 ' id='venus-grotto-container'>
                {/* container for the top black box */}
                <div className=' flex flex-col md:flex-row lg:flex-row gap-8 bg-main-black p-5 text-white rounded-md items-center' id='venus-bio-text-container'>
                    <div className='flex flex-col gap-4' id='venus-grotto-text'>
                        <h1 className='text-xl font-header'>Venus' Grotto</h1>
                        <p className='text-sm'> Keep scrolling to learn about Venus and what she thinks about the asteroids coming. Learn more about your benefic friend!</p>
                        <p className='text-xs'>Traits: 
                            <span className='text-[#D77BBA]'> positivity</span>,  
                            <span className='text-[#CF8242]'> love</span>,
                            <span className='text-[#A40073]'> abundance</span>,
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center
                     cursor-pointer' onClick={togglePopup} id='venus-bio'>
                        <h1 className='text-sm text-nowrap'>View Venus' Bio</h1>
                        <img className="md:max-w-[65px] h-auto hover:scale-110 transition-transform duration-200 ease-in-out" src={VenusMouthOpen} alt="Venus Bio Image"/>
                    </div>
                </div>

                {/* Venus Bio Popup */}
            {modalIsOpen && (
                <div className="fixed inset-0 bg-main-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-main-black text-black p-6 rounded-lg w-96 drop-shadow-[0_10px_20px_rgba(215,123,186,0.6)] shadow-lg relative">
                        {/* Close Button */}
                        <button
                            className="absolute top-2 right-3 text-lg font-bold
                            hover:scale-110 transition-transform duration-200 ease-in-out text-white hover:text-venus-pink"
                            onClick={togglePopup}
                        >
                            ✖
                        </button>

                        <div className='flex justify-center items-center flex-col gap-2 pt-5'>

                            {/* Venus Bio Content */}
                            <h2 className="text-xl text-white font-bold font-header">VENUS</h2>

                            <img className="w-[80px] sm:w-[60px] md:w-[80px] lg:w-[80px]" src={VenusGifMouthOpen} alt="Venus Bio Image"/>
                        </div>

                        <div className="flex flex-col gap-2 text-left text-sm w-full mt-4 px-7 text-white">
                            <p><span className="font-bold text-[#D77BBA]">Planet:</span> Venus</p>
                            <p><span className="font-bold text-[#D77BBA]">Dignity:</span> Benefic</p>
                            <p><span className="font-bold text-[#D77BBA]">Rules the Zodiacs:</span> Taurus & Libra</p>
                            <p><span className="font-bold text-[#D77BBA]">Representations:</span> beauty, love, pleasure, sensuality, harmony, romance, parties</p>
                            <p><span className="font-bold text-[#D77BBA]">Color:</span> Pink</p>
                            <p className="mt-2">Venus likes to throw parties and spread love and cheer. They like to adorn 
                                themselves with lovers, friends, business acquaintances, and family. Venus likes to 
                                solve conflict through diplomacy and harmony 
                                and would rather indulge than restrict.</p>
                        </div>
                    </div>
                </div>
            )}

                {/* container for the bottom black box */}
                <div className='bg-main-black rounded-md w-52 p-5' id='scroll-text-container'>
                    <p className='text-xs text-white '>Scroll down or 
                        use your UP or DOWN arrow keys to scroll vertically.</p>
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
                <section id="panel" className='venus-line relative w-full min-w-screen min-h-screen flex flex-col justify-start pt-20'>
    
                    <div id='container-panel-venus' className='flex w-full justify-between flex-col md:flex-row px-10 md:px-40 '>
                        
                        <div id='venus-dialogue-2' className='flex flex-row w-fit h-fit mb-8'>
                            <div id='venus-pic' className='h-fit mt-28'>
                                <img className="w-[100px] h-auto" src={VenusGifDefault} alt="Venus Gif"/>
                            </div>
                            <div id ='venus-text' className='flex mb-14 w-fit md:w-72 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                                Maybe the asteroid is lonely and that's why it's coming over here. you need to stop asserting dominance for no reason. I probably could charm them with my beauty..
                            </div>
                        </div> 
                        <div id='benefic-text' className='relative flex w-fit md:w-96 h-fit bg-white rounded-md font-body text-wrap p-5 mr-8 text-xs md:text-sm'>
                            <img id='corner-black-sparkle' className='absolute w-[100px] h-auto max-w-full max-h-full object-contain -top-8 -right-11' loading='lazy' src={YellowSparkle}/>
                            Venus tends to take the diplomatic approach when it comes to conflict. Venus wants to do things that are going to feel goooood, and tends to shy away from things that may be uncomfortable.
                        </div>
                    
                    </div>

                    <div className='flex justify-center items-center mb-12 w-full'>
                        <h1 className='font-header text-white text-2xl text-center px-4'>
                            Scroll your mouse to see Venus use her beauty to charm the asteroids!
                        </h1>
                    </div>

                    <div id='animation-container' className="relative gap-3 w-full h-[150px] mb-10">
                        {/* Venus Annoyed Image */}
                        <img className='venus-annoyed absolute z-10 left-0 w-[100px] h-auto' src={VenusAnnoyedImg} alt="Venus Annoyed Image"/>

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

                    <div className='line-container relative w-full h-8 flex flex-col gap-2 justify-center items-center mb-10'>
                        <span className="line w-full h-2 p-2 m-auto relative inline-block z-0 bg-white"></span>
                    </div>
                </section>

            

                {/* container for THIRD scroll section / dialogue */}
                <section id="panel" className='malefic-text w-screen min-h-screen relative mt-6 flex flex-col'>
                    <div id='malefic-text' className='items-center flex flex-col gap-14'>
                        <div id='mars-dialogue' className='malefic-dialogue1 flex flex-row w-fit h-fit self-start relative ml-44 p-5'>
                            
                            <div id='mars-pic' className='mt-14'>
                                <img id='mars' className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" src={MarsGif} alt="Mars Gif"/>
                            </div>
                            <div id ='mars-text' className=' w-96 relative h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                            <img id='corner-asteroid' className='absolute w-[40px] h-auto max-w-full max-h-full object-contain -top-4 -right-3 rotate-12' loading='lazy' src={AsteroidMouthOpen}/>
                                As a Malefic planet, you feel like you need to push people, maybe in not the best of ways. Sometimes that means that people can be uncomfortable with your energy. However, your energy pushes people to be stronger, and better. You tend to take the more aggressive approach.
                            </div>
                        </div>
                        <div id='mars-dialogue' className='malefic-dialogue2 flex flex-row w-fit h-fit self-end mr-44 p-5'>
                            <div id ='mars-text' className='flex w-96 h-fit relative bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                                <img id='corner-black-sparkle' className='absolute w-[100px] h-auto max-w-full max-h-full object-contain -top-11 -left-11' loading='lazy' src={BlackSparkle}/>
                                Waiting to take the offense side is difficult for you. You are prone to taking action immediately and channeling your inner warrior.
                            </div>
                            <div id='mars-pic' className='mt-14'>
                                <img className="w-[100px] sm:w/[60px] md:w/[80px] lg:w/[100px]" src={MarsGif} alt="Venus Gif"/>
                            </div>
                        </div>
                    </div>
                </section>

                {/* container for FOURTH scroll section / dialogue */}
                <section id="panel" className='mars-battle w-screen min-h-screen relative flex flex-col justify-center'>
                    
                    {/* Mars Battle Header - positioned above the animation container */}
                    <div className="absolute top-10 w-full z-10 text-center">
                        <h1 className='text-2xl font-header text-white px-4 py-2 bg-black bg-opacity-50 rounded-md inline-block'>
                            Mars Shows His Power!
                        </h1>
                    </div>
                    
                    <div ref={marsBattleRef} className="relative w-screen h-screen overflow-hidden bg-black" id="mars-battle">
                        {/* Mars */}
                        <img 
                            ref={marsRef}  // ADD THIS
                            className="absolute bottom-10 left-[30%] w-[100px]" 
                            id="mars" 
                            src={MarsDefaultPng} 
                            alt="Mars"
                        />

                        {/* Fireball Container */}
                        <div ref={fireballContainerRef} id="fireball-container" className="absolute w-full h-full flex items-center"></div>

                        {/* Asteroid container */}
                        <div ref={asteroidContainerRef} id="asteroid-container" className="absolute w-full h-full"></div>
                        <div id="lightningContainer" className="absolute top-0 left-0 w-full h-full pointer-events-none"></div>

                    </div>
                   

                </section>

                {/* container for SIXTH/FINAL scroll section / dialogue */}
                <section id="panel" className='relative w-screen min-h-screen flex flex-col justify-center pr-5'>
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
                                characters={characters}
                                addCharacter={addCharacter}
                            />
                        </div>
                    </div>
                </section>
            </div>
        
    );
}

export default MarsHorizontalVenus;