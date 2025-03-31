import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MarsStaticImg from '../../../assets/mars-art/mars-art-official1.png';
import JupiterDefault from '../../../assets/jupiter-art/jupiter-art.png';
import VenusMouthOpen from '../../../assets/venus-art/venus-mouth-open.png';
import MarsGif from '../../../assets/mars-art/mars-art-official.gif';
import JupiterGif from '../../../assets/jupiter-art/jupiter-art-gif.gif';
import VenusGif from '../../../assets/venus-art/venus-mouth-open-gif.gif';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// Register plugins
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const MarsVenusJupiterEnding = () => {
  const bgRef = useRef(null);
  const marsRef = useRef(null);
  const jupiterRef = useRef(null);
  const venusRef = useRef(null);
  const navigate = useNavigate(); 
  
  // Add useEffect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    // Background transition as story unfolds
    gsap.to(bgRef.current, {
      backgroundColor: "#ffedc2", // From dark to warm golden light
      scrollTrigger: {
        trigger: bgRef.current,
        start: "top top",
        end: "bottom center",
        scrub: 1,
      },
    });

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
  }, []);

  return (
    <div ref={bgRef} className="bg-default-bg flex flex-col justify-center items-center min-w-screen relative pt-14 overflow-hidden">
      {/* Parallax Section - Planets Enter */}
      <section className='w-full min-h-screen flex relative flex-col justify-center items-center'>
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

      <section className='w-full min-h-screen flex flex-col gap-3 justify-center items-center'>
        <div id = 'mars-ending' className='flex flex-col gap-4 justify-center items-center w-full'>
          <h1 className="text-white text-3xl mb-16 z-10"> Mars </h1>
          <img src={MarsGif} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Mars" />
          <p className='text-white font-body w-1/2'>As Mars, your willingness to work with others can be low.
            You made the practical decision to team up with your benefic friends, Venus and Jupiter.
            Mixing your motivation to take action, combined with Jupiter and Venus' optimisim and charm,
            you were able to come to a friendly agreement with the asteroids.
          </p>
        </div>
      </section>

      <section className='w-full min-h-screen flex flex-col gap-2 justify-center items-center'>
        <div id = 'mars-ending' className='flex flex-col gap-4 justify-center items-center w-full'>
          <h1 className="text-white text-3xl mb-16 z-10"> Jupiter </h1>
          <img src={JupiterGif} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Mars" />
          <p className='text-white font-body w-1/2'>
            Jupiter led the charge of negotiation with the asteroids. Jupiter was able to bargain some land
            of the solar system to the asteroids, and made the asteroids laugh. 
            Jupiter's jovial energy and humor helped a lot. Without Jupiter, the asteroids may have gotten
            more on the defense side, but Jupiter was able to form a friendly alliance with them.
          </p>
        </div>
      </section>

      <section className='w-full min-h-screen flex flex-col gap-8 justify-center items-center'>
        <div id = 'mars-ending' className='flex flex-col gap-4 justify-center items-center w-full'>
          <h1 className="text-white text-3xl mb-16 z-10"> Venus </h1>
          <img src={VenusGif} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Mars" />
          <p className='text-white font-body w-1/2'>
            Venus offered to have a party for the asteroids, to celebrate the new alliance. Venus is known for her charm and beauty,
            and she was able to use her diplomatic skills to make the asteroids feel welcome and included. Without Venus, 
            the asteroids may have felt unwelcomed and unappreciated.
          </p>
        </div>
      </section>

      <section className='w-full min-h-screen flex flex-col gap-8 justify-center items-center'>
        <div id = 'ending' className='flex flex-col gap-4 justify-center items-center w-full'>
          <h1 className="text-white text-3xl mb-16 z-10"> Good Work! </h1>

          <div className='flex flex-row gap-4 justify-center items-center'>
            <img src={VenusGif} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Venus" />
            <img src={MarsGif} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Mars" />
            <img src={JupiterGif} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Jupiter" />

          </div>
          
          
          <p className='text-white font-body w-1/2'>
            Together with your benefic friends, you combined both your strengths and weaknesses to tackle 
            the crisis of the asteroids. The asteroids and your team of planets have formed a strong alliance and
            it's time to party!
          </p>
        </div>
      </section>

      <button 
                  className="w-32 h-8 rounded-lg bg-button-blue text-white relative z-10 
                  mb-6 hover:bg-opacity-80" 
                  onClick={() => navigate("/marsintro")}
                >
                  Play Again
                </button>

    </div>
  );
};
   
export default MarsVenusJupiterEnding;