import React from 'react';
import { useNavigate } from 'react-router-dom';
import MarsGif from '../../assets/mars-art/mars-art-official.gif';
import MarsStats from '../../assets/mars-art/mars-stats.png';

function MarsIntro() {

    const navigate = useNavigate();

    const handleEnterClick = () => {
        navigate('/mars-game');
    };


    return (
        <div className='bg-mars-bg-reg bg-cover bg-center h-screen pt-12 gap-10 flex flex-col items-center'>
           <div className="flex flex-row max-w-screen justify-center items-center gap-48 p-5">
                <div className="bg-main-black text-white rounded-md shadow-md flex items-center justify-center
                text-wrap w-1/3 m-5 p-5" id="malefic-text">
                    <p>
                    Based on your answers to the quiz, you have been classified as
                    a malefic planet. Malefic planets are planets in traditional astrology that can contribute to some of the more challenging,
                    or difficult aspects of life and it’s values.

                    </p>
            

                </div>
                <div id="mars-pic" className="flex flex-col iems-center m-15">
                    <h1 className='text-white font-header text-4xl text-center'>
                        MARS
                    </h1>
                    <img className="w-[150px] h-[150px]" src={MarsGif} alt="Mars Gif"/>

                </div>
           </div>


           <div id='mars-facts' className='bg-main-black text-mars-red flex flex-col items-center w-2/3 shadow-md rounded-md justify-center'>
                <div className='flex flex-row p-7 items-center ustify-between'>
                    <div id='mars-pic' className='flex flex-col items-center p-5 w-60'>
                        <img className="w-[100px]" src={MarsGif} alt="Mars Gif"/>
                    </div>
                    <div id='mars-text' className='flex flex-col h-full justify-center p-5'>
                        <ul>
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
                    <div id='mars-status' className="flex flex-col items-center w-1/3 p-5">
                        <img className="w-full" src={MarsStats} alt="Mars Traits and Status Bar"/>
                    </div>

                </div>

                <div id='enter-button' className='flex justify-center items-center mb-10'>
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