import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MarsGif from '../../assets/mars-art/mars-art-official.gif';
import MarsStats from '../../assets/mars-art/mars-stats.png';
import MarsCloudLong from '../../assets/clouds/mars-cloud-long.png';
import MarsCloudShort from '../../assets/clouds/mars-cloud-short.png';

function MarsIntro({ addCharacter }) {

    const navigate = useNavigate();

    const location = useLocation();
    console.log('Location state in MarsIntro:', location.state);

    const handleEnterClick = () => {
        // add Mars to status bar
        addCharacter('Mars');
        // navigate to mars game / path
        navigate('/mars-game/mars-horizontal-venus');
    };


    return (
        <div 
        className=' bg-cover bg-mars-bg-reg bg-center min-h-screen pt-12 gap-10 flex flex-col items-center pb-10'>

               {/* Clouds */}
               <div className="absolute inset-0 z-0">
                <img
                    src={MarsCloudLong}
                    alt="Mars Cloud Long"
                    className="relative top-20 left-10 w-52"
                />
                <img
                    src={MarsCloudShort}
                    alt="Mars Cloud Short"
                    className="absolute top-1/3 left-8 w-32"
                />
                <img
                    src={MarsCloudShort}
                    alt="Mars Cloud Short"
                    className="absolute top-20 right-20 w-32"
                />
                 <img
                    src={MarsCloudLong}
                    alt="Mars Cloud Long"
                    className="absolute top-[420px] left-40 w-52"
                />
                <img
                    src={MarsCloudLong}
                    alt="Mars Cloud Long"
                    className="absolute top-32 right-[700px] w-52"
                />
                <img
                    src={MarsCloudShort}
                    alt="Mars Cloud Short"
                    className="absolute bottom-10 left-10 w-32"
                />
                <img
                    src={MarsCloudShort}
                    alt="Mars Cloud Short"
                    className="absolute bottom-20 right-20 w-32"
                />
             
                <img
                    src={MarsCloudLong}
                    alt="Mars Cloud Long"
                    className="absolute bottom-1/3 right-10 w-52"
                />
            </div>
    
           <div className="flex flex-row max-w-screen justify-center z-0 items-center gap-10 md:gap-30 lg:gap-42 p-5">
                <div className="bg-main-black text-white rounded-md text-xs md:text-sm lg:text-base shadow-md flex items-center justify-center
                text-wrap w-full md:w-full lg:w-1/2 m-5 p-4 md:p-10" id="malefic-text">
                    <p>
                    Based on your answers to the quiz, you have been classified as
                    a malefic planet. Malefic planets are planets in traditional astrology that can contribute to some of the more challenging,
                    or difficult aspects of life and it’s values.

                    </p>
            

                </div>
                <div id="mars-pic" className="flex flex-col justify-center items-center  m-4 md:m-10">
                    <h1 className='text-white font-header text-2xl sm:text-3xl md:text-4xl text-center'>
                        MARS
                    </h1>
                    <img className="w-[100px]  sm:w-[100px]  md:w-[100px]  lg:w-[150px] " src={MarsGif} alt="Mars Gif"/>

                </div>
           </div>


           <div id='mars-facts' className='bg-main-black text-mars-red flex flex-col z-0 items-center shadow-md rounded-md
           py-2 px-4 md:px-6 md:py-6 w-3/4'>
                <div className='flex flex-col md:flex-col lg:flex-row items-center justify-between gap-10 w-full px-4 py-4'>
                    <div id='mars-pic' className='flex flex-col items-center w-1/5'>
                        <img className="md:max-w-[100px] h-auto" src={MarsGif} alt="Mars Gif"/>
                    </div>
                    <div id='mars-text' className='flex flex-col justify-center text-xs md:text-sm lg:text-base'>
                        <ul className='space-y-2'>
                            <li>
                                Planet: Mars 
                            </li>
                            <li>
                                Dignity: Malefic
                            </li>
                            <li>
                                Rules the Zodiacs: Aries & Scorpio
                            </li>
                            <li>
                                Representations: aggression, war, sex, conflict, power, action, desire
                            </li>
                            <li>
                                Color: Red
                            </li>
                            <li>
                                Mars takes a head on approach to situations like these. He thrives on taking action and thinks first before thinking. 
                                Some would say that Mars is the energy you feel when you need to fight for something you want.
                            </li>
                        </ul>

                    </div>
                    <div id='mars-status' className="flex flex-col items-center w-fit">
                        <img className="min-w-[289px]" src={MarsStats} alt="Mars Traits and Status Bar"/>
                    </div>

                </div>

                <div id='enter-button' className='flex justify-center items-center mb-10 mt-5'>
                    <button
                        className='bg-mars-red text-white font-header py-2 px-8 rounded-md transition duration-300 ease-in-out hover:bg-opacity-55 hover:scale-105'
                        onClick={handleEnterClick}>
                            ENTER
                        </button>

                </div>

               

           </div>

     
    </div>

    );

    
}

export default MarsIntro;