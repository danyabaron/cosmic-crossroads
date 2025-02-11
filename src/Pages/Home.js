import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


import VenusMouthOpen from '../assets/venus-art/venus-mouth-open.png';
import MarsGif from '../assets/mars-art/mars-art-official.gif';
import MarsStaticImg from '../assets/mars-art/mars-art.png';
import VenusGifDefault from '../assets/venus-art/venus-default-GIF.gif';
import VenusGifAnnoyed from '../assets/venus-art/venus-annoyed-gif.gif';
import VenusGifSmirk from '../assets/venus-art/venus-smirk-gif.gif';
import VenusGifMouthOpen from '../assets/venus-art/venus-mouth-open-gif.gif';
import VenusCloudShort from '../assets/clouds/venus-cloud-short.png';
import VenusCloudLong from '../assets/clouds/venus-cloud-long.png';
import ButtonContainer from '../Components/ButtonContainer';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);


function Home({setCharacters}) {


    const navigate = useNavigate();
    const location = useLocation();  // Get location object which contains state
  
    useEffect(() => {
      // Check if there's state stored in localStorage (or sessionStorage)
      const storedState = localStorage.getItem('fromIntro');
      console.log('stored state in home:' + storedState);
      if (storedState === 'true') {
        setCharacters([]);  // Reset characters if coming back from intro page
        localStorage.removeItem('fromIntro');  // Clear the state from localStorage
      }
    }, [setCharacters]);
  
    const handleAddCharacter = (character, path) => {
      setCharacters(prevCharacters => {
        // Add the character if it's not already in the list
        if (!prevCharacters.includes(character)) {
          return [...prevCharacters, character];  // Add to the existing team
        }
        return prevCharacters;  // Don't add if the character is already in the team
      });
  
      // Save the state in localStorage before navigating
      localStorage.setItem('fromIntro', 'true');
  
      // Navigate to the intro page and pass state
      navigate(path);
    }

           
    

    

   

 


    


    return (
        <div className='bg-default-bg w-screen  flex flex-col overflow-hidden gap-6 justify-center items-center'>
            <section id='character-selection' className='w-screen min-h-screen flex flex-col gap-6 justify-center items-center'>
                <h2 className="text-xl font-header text-white">
                    PICK YOUR CHARACTER
                </h2>s
                <div id='character-container' className='flex flex-row items-center'>
                    <div id='mars-pic'>
                        <img src={MarsGif} 
                        alt="Venus" 
                        className='w-[100px]  sm:w-[100px]  md:w-[100px]  lg:w-[150px] hover:cursor-pointer'
                        onClick={() => handleAddCharacter('Mars', '/marsintro')} />
                    </div>
                    <div id='venus-pic'>
                        <img src={VenusGifDefault} 
                        alt="Venus" 
                        className='w-[100px]  sm:w-[100px]  md:w-[100px]  lg:w-[150px] hover:cursor-pointer'
                        onClick={() => handleAddCharacter('Venus', '/venusintro')} />
                    </div>
                </div>
         

            </section>
            
       
          

    </div>
    );

    
}

export default Home;