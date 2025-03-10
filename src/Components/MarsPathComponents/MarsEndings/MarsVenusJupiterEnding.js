import React, { useRef, useEffect } from 'react';
import MarsStaticImg from '../../../assets/mars-art/mars-art-official1.png';
import JupiterDefault from '../../../assets/jupiter-art/jupiter-art.png';
import VenusMouthOpen from '../../../assets/venus-art/venus-mouth-open.png';
import VenusAnnoyed from '../../../assets/venus-art/venus-annoyed.png';
import AsteroidAngry from '../../../assets/asteroid-art/asteroid-angry.png';
import AsteroidMouthOpen from '../../../assets/asteroid-art/asteroid-mouth-open.png';
import AsteroidHappy from '../../../assets/asteroid-art/asteroid-happy.png';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useLocation } from 'react-router-dom';

// Register plugins
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const MarsVenusJupiterEnding = () => {
  const bgRef = useRef(null);
  const marsRef = useRef(null);
  const jupiterRef = useRef(null);
  const venusRef = useRef(null);
  const location = useLocation();

  const asteroidMarsRef = useRef(null);
  const asteroidJupiterRef = useRef(null);
  const asteroidVenusRef = useRef(null);
  

  // Scroll to top when component mounts
  useEffect(() => {
    // Scroll to top of page on mount
    window.scrollTo(0, 0);
    
    // If there's a hash in the URL, clear it
    if (location.hash) {
      // Use replace state to avoid adding to history
      window.history.replaceState(
        null, 
        document.title, 
        location.pathname + location.search
      );
    }
  }, [location]);

  useGSAP(() => {
    
    
    // const mars = document.querySelector('.marsImgFight');
    // const jupiter = document.querySelector('.jupiterImgFight');
    // const venus = document.querySelector('.venusImgFight');
   
   

    // Mars entry animation - spiral from left
    gsap.fromTo(
      marsRef.current,
      { 
        opacity: 0,
        x: "-100vw", 
        y: "0", 
        scale: 0.2,
        rotation: -180
      },
      {
        opacity: 1,
        motionPath: {
          path: [
            {x: "-80vw", y: "10vh"},
            {x: "-60vw", y: "-20vh"},
            {x: "-40vw", y: "15vh"},
            {x: "-20vw", y: "-10vh"},
            {x: "0", y: "0"}
          ],
          curviness: 1.8
        },
        scale: 1,
        rotation: 360,
        duration: 3,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: marsRef.current.parentNode,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Jupiter entry animation - spiral from bottom
    gsap.fromTo(
      jupiterRef.current,
      { 
        opacity: 0,
        x: "0", 
        y: "100vh", 
        scale: 0.3,
        rotation: 180
      },
      {
        opacity: 1,
        motionPath: {
          path: [
            {x: "30vw", y: "80vh"},
            {x: "-25vw", y: "60vh"},
            {x: "20vw", y: "40vh"},
            {x: "-15vw", y: "20vh"},
            {x: "0", y: "0"}
          ],
          curviness: 2
        },
        scale: 1,
        rotation: -360,
        duration: 3.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: jupiterRef.current.parentNode,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Venus entry animation - spiral from right
    gsap.fromTo(
      venusRef.current,
      { 
        opacity: 0,
        x: "100vw", 
        y: "-20vh", 
        scale: 0.2,
        rotation: 180
      },
      {
        opacity: 1,
        motionPath: {
          path: [
            {x: "80vw", y: "-15vh"},
            {x: "60vw", y: "20vh"},
            {x: "40vw", y: "-15vh"},
            {x: "20vw", y: "10vh"},
            {x: "0", y: "0"}
          ],
          curviness: 1.5
        },
        scale: 1,
        rotation: -360,
        duration: 3,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: venusRef.current.parentNode,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        }
      }
    );


    // section animations


    // Move marsRef down to #mars-section as the user scrolls
    
  // Move marsRef down to #mars-section as the user scrolls
      gsap.to(marsRef.current, {
        y: "100vh", // Move down by the height of the viewport
        scrollTrigger: {
          trigger: "#mars-section", // Trigger when #mars-section enters the viewport
          start: "top bottom", // Start animation when the top of #mars-section hits the bottom of the viewport
          end: "top top", // End animation when the top of #mars-section hits the top of the viewport
          scrub: true, // Smoothly scrub through the animation as the user scrolls
          toggleActions: "play none none reverse", // Ensure the animation reverses when scrolling up
        },
      });

      // Mars fighting animation in #mars-section
      const asteroidMars = document.querySelector('.asteroidMars');

      gsap.to(marsRef.current, {
        motionPath: {
          path: [
            { x: 0, y: 0 }, // Start at current position
            { x: -100, y: -50 }, // Move left and up
            { x: -200, y: 0 }, // Move further left
            { x: -300, y: -50 }, // Move even further left and up
            { x: -400, y: 0 }, // Final position
          ],
          curviness: 1.5,
        },
        rotation: 360, // Rotate Mars during motion
        scale: 1.2, // Scale up Mars during motion
        scrollTrigger: {
          trigger: "#mars-section",
          start: "top 60%", // Start animation when the top of #mars-section is 60% from the top of the viewport
          end: "bottom 20%", // End animation when the bottom of #mars-section is 20% from the top of the viewport
          scrub: true, // Smoothly scrub through the animation
          toggleActions: "play none none reverse", // Ensure the animation reverses when scrolling up
        },
      });

      gsap.to(asteroidMars, {
        motionPath: {
          path: [
            { x: 0, y: 0 }, // Start at current position
            { x: 100, y: -100 }, // Move right and up
            { x: 200, y: 0 }, // Move further right
            { x: 300, y: -100 }, // Move even further right and up
            { x: 400, y: 0 }, // Final position
          ],
          curviness: 1.5,
        },
        rotation: -360, // Rotate the asteroid in the opposite direction
        scrollTrigger: {
          trigger: "#mars-section",
          start: "top 60%",
          end: "bottom 20%",
          // scrub: true, // Smoothly scrub through the animation
          toggleActions: "play none none reverse", // Ensure the animation reverses when scrolling up
        },
      });












  }, []);

  return (
    <div ref={bgRef} className="bg-default-bg w-full flex flex-col justify-center items-center min-w-screen relative pt-14
    bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden">

      {/* Parallax Section - Planets Enter */}
      <section id="top" className='w-full min-h-screen flex relative flex-col justify-center items-center'>
        <h1 className="text-white text-3xl mb-16 z-10">The Battle Begins...</h1>
        <div className="relative w-full h-[400px] flex flex-row gap-4 justify-center items-center">
          {/* Each planet in a separate div for independent animation */}
          <div className="" ref={marsRef}>
            <img src={MarsStaticImg} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Mars" />
          </div>
          <div className="" ref={jupiterRef}>
            <img src={JupiterDefault} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Jupiter" />
          </div>
          <div className="" ref={venusRef}>
            <img src={VenusMouthOpen} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Venus" />
          </div>
        </div>
        
      </section>

      <section id="mars-section" className='bg-mars-bg-reg w-screen min-h-screen flex flex-col gap-8 justify-center items-center'>
        
        <div className='relative flex flex-col gap-4 justify-center items-center w-full'>
          <h1 className="text-white text-3xl "> Mars </h1>

          {/* <div className="" ref={marsRef}>
            <img src={MarsStaticImg} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Mars" />
          </div>
        */}
            {/* <img src={MarsStaticImg} className="marsImgFight  w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Mars" /> */}
    
            <img src={AsteroidAngry} className=" asteroidMars w-[50px] h-auto max-w-full max-h-full object-contain" alt="Asteroid" />
          
          <p className='text-white font-body m-5'>As Mars, your willingness to work with others can be low. You made the practical decision to team up with your benefic friends, Venus and Jupiter. Mixing your motivation to take action, combined with Jupiter and Venus' optimism and charm, you were able to come to a friendly agreement with the asteroids.</p>
        </div>
      
      </section>





      <section id="jupiter-section" className='w-full min-h-screen flex flex-col gap-8 justify-center items-center'>
        <div className='flex flex-col gap-4 justify-center items-center w-full'>
          <h1 className="text-white text-3xl mb-16 z-10"> Jupiter </h1>
            <div className='jupiterImgFight'>
              <img src={JupiterDefault} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Mars" />

            </div>
            <div className='asteroidJupiter'>
              <img src={AsteroidAngry} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Asteroid" />
            </div>
          <p className='text-white font-body m-5'>
            Jupiter led the charge of negotiation with the asteroids. Jupiter was able to bargain some land
            of the solar system to the asteroids, and made the asteroids laugh. 
            Jupiter's jovial energy and humor helped a lot. Without Jupiter, the asteroids may have gotten
            more on the defense side, but Jupiter was able to form a friendly alliance with them.
          </p>
        </div>
      </section>

      <section id="venus-section" className='w-full min-h-screen flex flex-col gap-8 justify-center items-center'>
        <div className='flex flex-col gap-4 justify-center items-center w-full'>
          <h1 className="text-white text-3xl mb-16 z-10"> Venus </h1>
              <div className='venusImgFight'>
                <img src={VenusAnnoyed} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Mars" />

              </div>
              <div className='asteroidVenus'>
                <img src={AsteroidAngry} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Asteroid" />
              </div>
          <p className='text-white font-body m-5'>
            venus text here.
          </p>
        </div>
      </section>
    </div>

  );
};
   
export default MarsVenusJupiterEnding;