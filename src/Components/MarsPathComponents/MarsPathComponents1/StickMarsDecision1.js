import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// import 'locomotive-scroll/dist/locomotive-scroll.css';
import VenusMouthOpen from '../../../assets/venus-art/venus-mouth-open.png';
import MarsGif from '../../../assets/mars-art/mars-art-official.gif';
import MarsStaticImg from '../../../assets/mars-art/mars-art.png';
import VenusGifDefault from '../../../assets/venus-art/venus-default-GIF.gif';
import VenusGifAnnoyed from '../../../assets/venus-art/venus-annoyed-gif.gif';
import VenusGifSmirk from '../../../assets/venus-art/venus-smirk-gif.gif';
import VenusGifMouthOpen from '../../../assets/venus-art/venus-mouth-open-gif.gif';
import VenusCloudShort from '../../../assets/clouds/venus-cloud-short.png';
import VenusCloudLong from '../../../assets/clouds/venus-cloud-long.png';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';



   function StickMarsDecision1({ setScreen }) {

    //    const [screen, setScreen] = useState(null);

    const buttons = [
      {
          text: "WHO'S NEXT?",
          style: "mt-8 bg-main-black text-white px-4 py-2 rounded-md shadow-md hover:bg-main-black hover:scale-105 transition duration-300 ease-in-out",
          screen: "MarsHorizontalJupiter"
      }
  ];


         return (
             
                   
            <div className="bg-mars-bg-reg fixed top-0 left-0 w-full h-full flex items-center justify-center">
  
                        <button
                        onClick={() => setScreen('MarsHorizontalJupiter')}
                        className="mt-8 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
                        >
                        Who's Next?
                        </button>


                        
            </div>

                    );
    



   }
   
   

   export default StickMarsDecision1;