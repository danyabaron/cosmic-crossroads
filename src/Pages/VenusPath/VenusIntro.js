import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import VenusGifDefault from '../../assets/venus-art/venus-default-GIF.gif';
import VenusGifAnnoyed from '../../assets/venus-art/venus-annoyed-gif.gif';
import VenusGifSmirk from '../../assets/venus-art/venus-smirk-gif.gif';
import VenusGifMouthOpen from '../../assets/venus-art/venus-mouth-open-gif.gif';
import VenusCloudLong from '../../assets/clouds/venus-cloud-long.png';
import VenusCloudShort from '../../assets/clouds/venus-cloud-short.png';

function VenusIntro() {

    const navigate = useNavigate();
    const location = useLocation();
    console.log('Location state in VenusIntro:', location.state);

    const handleEnterClick = () => {
        navigate('/venus-game');
    };


    return (
        <div 
        className=' bg-cover bg-venus-bg-reg bg-center min-h-screen pt-12 gap-10 flex flex-col items-center pb-10'>

               {/* Clouds */}
               <div className="absolute inset-0 z-0">
                <img
                    src={VenusCloudLong}
                    alt="Venus Cloud Long"
                    className="relative top-20 left-10 w-52"
                />
                <img
                    src={VenusCloudShort}
                    alt="Venus Cloud Short"
                    className="absolute top-1/3 left-8 w-32"
                />
                <img
                    src={VenusCloudShort}
                    alt="Venus Cloud Short"
                    className="absolute top-20 right-20 w-32"
                />
                 <img
                    src={VenusCloudLong}
                    alt="Venus Cloud Long"
                    className="absolute top-[420px] left-40 w-52"
                />
                <img
                    src={VenusCloudLong}
                    alt="Venus Cloud Long"
                    className="absolute top-32 right-[700px] w-52"
                />
                <img
                    src={VenusCloudShort}
                    alt="Venus Cloud Short"
                    className="absolute bottom-10 left-10 w-32"
                />
                <img
                    src={VenusCloudShort}
                    alt="Venus Cloud Short"
                    className="absolute bottom-20 right-20 w-32"
                />
             
                <img
                    src={VenusCloudLong}
                    alt="Venus Cloud Long"
                    className="absolute bottom-1/3 right-10 w-52"
                />
            </div>
    
           <div className="flex flex-row max-w-screen justify-center z-0 items-center gap-10 md:gap-30 lg:gap-42 p-5">
                <div className="bg-main-black text-white rounded-md text-xs md:text-sm lg:text-base shadow-md flex items-center justify-center
                text-wrap w-full md:w-full lg:w-1/2 m-5 p-4 md:p-10" id="benefic-text">
                    <p>
                    Based on your answers to the quiz, you have been classified as
                    a benefic planet. Benefic planets are planets in traditional 
                    astrology that can contribute life’s more joyful and abundant experiences. 

                    </p>
            

                </div>
                <div id="venus-pic" className="flex flex-col justify-center items-center  m-4 md:m-10">
                    <h1 className='text-white font-header text-2xl sm:text-3xl md:text-4xl text-center'>
                            VENUS
                    </h1>
                    <img className="w-[100px]  sm:w-[100px]  md:w-[100px]  lg:w-[150px] " src={VenusGifDefault} alt="Venus Gif"/>

                </div>
           </div>


           <div id='venus-facts' className='bg-main-black text-venus-pink flex flex-col z-0 items-center shadow-md rounded-md
           py-2 px-4 md:px-6 md:py-6 w-3/4'>
                <div className='flex flex-col md:flex-col lg:flex-row items-center justify-between gap-10 w-full px-4 py-4'>
                    <div id='mars-pic' className='flex flex-col items-center w-1/5'>
                        <img className="md:max-w-[100px] h-auto" src={VenusGifDefault} alt="Mars Gif"/>
                    </div>
                    <div id='mars-text' className='flex flex-col justify-center text-xs md:text-sm lg:text-base'>
                        <ul className='space-y-2'>
                            <li>
                                Planet: Venus 
                            </li>
                            <li>
                                Dignity: Benefic
                            </li>
                            <li>
                                Rules the Zodiacs: Taurus & Libra
                            </li>
                            <li>
                                Representations: beauty, love, pleasure, sensuality, harmony, romance, parties
                            </li>
                            <li>
                                Color: Pink
                            </li>
                            <li>
                            Venus likes to throw parties and spread love and cheer. They like to adorn themselves with lovers, friends,
                             business acquaintances, and family. Venus likes to solve conflict through diplomacy and harmony, and would rather indulge than restrict.
                            </li>
                        </ul>

                    </div>
                    {/* <div id='mars-status' className="flex flex-col items-center w-fit">
                        <img className="min-w-[289px]" src={MarsStats} alt="Mars Traits and Status Bar"/>
                    </div> */}

                </div>

                <div id='enter-button' className='flex justify-center items-center mb-10 mt-5'>
                    <button
                        className='bg-venus-pink text-white font-header py-2 px-8 rounded-md transition duration-300 ease-in-out hover:bg-opacity-55 hover:scale-105'
                        onClick={handleEnterClick}>
                            ENTER
                        </button>

                </div>

               

           </div>

     
    </div>

    );

    
}

export default VenusIntro;