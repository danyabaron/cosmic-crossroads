import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { useAudio } from './AudioContext';
import MarsStaticImg from '../assets/mars-art/mars-art-official.png';
import VenusStaticImg from '../assets/venus-art/venus-default.png';
import SaturnStaticImg from '../assets/saturn-art/saturn.png';
import JupiterStaticImg from '../assets/jupiter-art/jupiter-art.png';
import MarsGif from '../assets/mars-art/mars-art-official.gif';
import VenusGif from '../assets/venus-art/venus-mouth-open-gif.gif';
import JupiterGif from '../assets/jupiter-art/jupiter-art-gif.gif';

function StatusBar({ characters }) {
    const location = useLocation();
    const { isPlaying, toggleAudio } = useAudio();
    const characterImages = {
        Mars: MarsStaticImg,
        Venus: VenusStaticImg,
        Jupiter: JupiterStaticImg,
        Saturn: SaturnStaticImg,
    };

    // Determine rounds based on current path
    const getRoundsUntilImpact = () => {
        const path = location.pathname.toLowerCase();
        
        // Ending screens - 0 rounds
        if ( 
            path.includes('mars-solo-ending') ||
            path.includes('mars-venus-ending') ||
            path.includes('mars-jupiter-ending') ||
            path.includes('mars-venus-jupiter-ending')) {
            return 0;
        }
        
        // Decision 1 screens - 1 round
        if (path.includes('stick-mars-1') || path.includes('choose-venus-1') || path.includes('mars-horizontal-jupiter')) {
            return 1;
        }
        
        // Default for other screens - 2 rounds
        return 2;
    };

    const roundsUntilImpact = getRoundsUntilImpact();
    const maxTeamSize = 3; // Maximum number of team members

    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isHelpOpen, setIsHelpOpen] = useState(false);
  

    const toggleSettings = () => setIsSettingsOpen(!isSettingsOpen);
    const toggleHelp = () => setIsHelpOpen(!isHelpOpen);

    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [hoveredCharacter, setHoveredCharacter] = useState(null);



    const openCharacterModal = (character) => {
        setSelectedCharacter(character);
    };

     // Modal content based on selected character
     const getCharacterModalContent = (character) => {
        switch(character) {
            case "Venus":
                return (
                    <div className="fixed inset-0 bg-main-black bg-opacity-50 flex justify-center items-center z-50">  


                        <div className="bg-main-black justify-center items-center text-black p-6 rounded-lg w-96  drop-shadow-[0_10px_20px_rgba(215,123,186,0.6)] shadow-lg relative">
                        <button
                            className="absolute top-2 right-3 text-lg font-bold
                            hover:scale-110 transition-transform duration-200 ease-in-out text-white hover:text-[#D77BBA]"
                            onClick={() => setSelectedCharacter(null)}
                        >
                            ✖
                        </button>

                        <div className='flex  p-5 justify-center bg-main-black items-center flex-col gap-2 pt-5'>
                        <h2 className="text-xl text-center text-white font-bold font-header">VENUS</h2>
                        <img className="items-center w-[80px] sm:w-[60px] md:w-[80px] lg:w-[80px]" src={VenusGif} alt="Venus Bio Image"/>
                        <div className="flex flex-col gap-2 text-left text-sm w-full mt-4 px-7 text-white">
                            <p><span className="font-bold text-[#D77BBA]">Planet:</span> Venus</p>
                            <p><span className="font-bold text-[#D77BBA]">Dignity:</span> Benefic</p>
                            <p><span className="font-bold text-[#D77BBA]">Rules the Zodiacs:</span> Taurus & Libra</p>
                            <p><span className="font-bold text-[#D77BBA]">Color:</span> Pink</p>
                            <p className="mt-2">Venus likes to throw parties and spread love and cheer. They like to adorn 
                                themselves with lovers, friends, business acquaintances, and family. Venus likes to 
                                solve conflict through diplomacy and harmony 
                                and would rather indulge than restrict.</p>
                        </div>
                    </div>
                 </div>
                 </div>
                );
                case "Jupiter":
                    return (
                        <div className="fixed inset-0 bg-main-black bg-opacity-50 flex justify-center items-center z-50">  


                        <div className="bg-main-black justify-center items-center text-black p-6 rounded-lg w-96  drop-shadow-[0_10px_20px_rgba(217,207,170,0.6)] shadow-lg relative">
                        <button
                            className="absolute top-2 right-3 text-lg font-bold
                            hover:scale-110 transition-transform duration-200 ease-in-out  text-white hover:text-[#D9CFAA]"
                            onClick={() => setSelectedCharacter(null)}
                        >
                            ✖
                        </button>

                            {/* Jupiter Bio Content */}
                            <div className='flex  p-5 justify-center bg-main-black items-center flex-col gap-2 pt-5'>
                            <h2 className="text-xl text-white font-bold font-header">JUPITER</h2>

                            <img className="w-[80px] sm:w-[60px] md:w-[80px] lg:w-[80px]" src={JupiterGif} alt="Jupiter Bio Image"/>
                        

                        <div className="flex flex-col gap-2 text-left text-sm w-full mt-4 px-7 text-white">
                            <p><span className="font-bold text-[#D9CFAA]">Planet:</span> Jupiter</p>
                            <p><span className="font-bold text-[#D9CFAA]">Dignity:</span> Benefic</p>
                            <p><span className="font-bold text-[#D9CFAA]">Rules the Zodiacs:</span> Sagittarius & Pisces</p>
                            <p><span className="font-bold text-[#D9CFAA]">Representations:</span> growth, expansion, opportunities, luck, prosperity, benevolence</p>
                            <p><span className="font-bold text-[#D9CFAA]">Color:</span> <span className='text-[#DA78F6]'>Purple 
                                </span> & <span className='text-[#D9CFAA]'>Tan</span></p>
                            <p className="mt-2">Jupiter is the student of life. They love to learn about life and strive to 
                                earn more wisdom in this world. Jupiter likes to assume the best in people, and deals 
                                with conflict in a 
                                diplomatic manner. Jupiter likes to expand energies, whether that is good or bad..</p>
                        </div>
                        </div>
                    </div>
                    </div>

                    );
                    case "Mars":
                        return (
                        <div className="fixed inset-0 bg-main-black bg-opacity-50 flex justify-center items-center z-50">  


                        <div className="bg-main-black text-black p-6 rounded-lg w-96 drop-shadow-[0_10px_20px_rgba(189,53,8,0.6)] shadow-lg relative">
                        <button
                            className="absolute top-2 right-3 text-lg font-bold text-white
                            hover:scale-110 transition-transform duration-200 ease-in-out hover:text-mars-red"
                            onClick={() => setSelectedCharacter(null)}
                        >
                            ✖
                        </button>
                        
                        {/* Modal Content   */}
                        <div className='flex  p-5 justify-center bg-main-black items-center flex-col gap-2 pt-5'>

                            {/* Jupiter Bio Content */}
                            <h2 className="text-xl text-white font-bold font-header">MARS</h2>

                            <img className="w-[80px] sm:w-[60px] md:w-[80px] lg:w-[80px]" src={MarsGif} alt="Mars Bio Image"/>
                        

                        <div className="flex flex-col gap-2 text-left text-sm w-full mt-4 px-7 text-white">
                            <p><span className="font-bold text-mars-red">Planet:</span> Mars</p>
                            <p><span className="font-bold text-mars-red">Dignity:</span> Malefic</p>
                            <p><span className="font-bold text-mars-red">Rules the Zodiacs: </span>Aries & Scorpio</p>
                            <p><span className="font-bold text-mars-red">Representations:</span> aggression, war, sex, conflict, power, action, desire</p>
                            <p><span className="font-bold text-mars-red">Color:</span> <span className='text-mars-red'>Red 
                                </span></p>
                            <p className="mt-2">Mars takes a head on approach to situations like these. 
                                They thrive on taking action and thinks first before thinking. Some would 
                                say that Mars is the energy you feel when you need to fight for something you want. 
                            </p>
                        </div>
                    </div>
                </div>
                </div>
                        );
                        

            // Add cases for other characters (Mars, Jupiter, Saturn) as needed
            default:
                return null;
        }
    };







    return (
        <nav id='status-bar' className='bg-main-black text-white flex w-full h-14 fixed top-0 shadow-xl z-50'>
            {/* stats */}
            <div className='max-w-screen flex items-center w-full'>
                <div className="flex items-center p-3 space-x-2 md:space-x-6">
                    <div id="character-text" className="text-xs md:text-sm">
                        <span>Current Character: <span id="current-character">Mars</span></span>
                    </div>
                </div>

                <div className="flex items-center space-x-1 md:space-x-2 p-3">
                    <span className="text-xs md:text-sm">Your Team: </span>
                    <div className="flex justify-evenly items-center gap-2">
                        {/* Map through characters and render them */}
                        {Array.from({ length: maxTeamSize }).map((_, index) => {
                            const character = characters[index]; // Get the character at the current index
                            return (
                                <div
                                    key={index}
                                    className={`w-8 md:h-8 flex relative self-center  rounded-full cursor-pointer  ${
                                        character ? 'overflow-visible' : 'border-team-gray border-2 ml-2'
                                    }`}
                                    onMouseEnter={() => character ? setHoveredCharacter(character) : null} // Only set hovered character if it exists
                                    onMouseLeave={() => setHoveredCharacter(null)} // Clear hovered character on mouse leave
                                    onClick={() => openCharacterModal(character)} // Open modal on click
                                >
                                    {character ? (
                                        <img
                                            src={characterImages[character]}
                                            alt={character}
                                            className="w-full h-full absolute inset-0 object-center object-cover
                                            hover:scale-110 transition-transform duration-200 ease-in-out"
                                        />
                                    ) : null}

                                    {/* Show character name on hover ONLY if character exists */}
                                    {hoveredCharacter === character && character && (
                                        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-40px] text-xs text-white bg-main-black
                                             px-2 py-1 rounded opacity-100 z-100 transition-opacity duration-300">
                                            {character}
                                        </span>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                    {/* Modal */}
                {selectedCharacter && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            {getCharacterModalContent(selectedCharacter)}
                            
                            
                        </div>
                    </div>
                )}

                <div className="text-xs md:text-sm flex items-center space-x-1 md:space-x-2 p-3">
                    <span>Time Until Impact:  <span 
                        id="time-until-impact"
                        className={`transition-all duration-300 ${
                            roundsUntilImpact <= 1 ? 'text-red-400 font-bold' : 'text-white'
                        }`}
                    >
                        {roundsUntilImpact} Round{roundsUntilImpact !== 1 ? 's' : ''}
                    </span></span>
                </div>
            </div>

            {/* icons */}
            <div className="flex items-center space-x-2 md:space-x-4 p--3 mr-8">
                <div className="group relative">
                    <IoIosHelpCircleOutline className="text-lg md:text-2xl cursor-pointer
                    hover:scale-110 transition-transform duration-200 ease-in-out" onClick={toggleHelp} />
                    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-40px] z-10 text-xs text-white bg-main-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Help
                    </span>
                </div>
                
                <div className="group relative">
                    <CiSettings className="text-lg md:text-2xl cursor-pointer
                    hover:scale-110 transition-transform duration-200 ease-in-out" onClick={toggleSettings} />
                    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-40px] z-10 text-xs text-white bg-main-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Settings
                    </span>
                </div>
            </div>

            {/* Settings Modal */}
            {isSettingsOpen && (
                <div className="fixed inset-0 bg-main-black bg-opacity-70 flex justify-center items-center z-50">
                    <div className="relative bg-main-black text-white p-6 rounded-lg w-80 drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)] shadow-lg">
                        <button className="absolute top-2 right-2 text-white hover:scale-110 transition-transform 
                        duration-200 ease-in-out" onClick={toggleSettings}>✖</button>
                        <h2 className="text-xl font-bold font-header text-center">SETTINGS</h2>
                        <div className="flex flex-col gap-4 mt-4">
                            {/* Enhanced Audio Toggle Slider with clickable labels - always visible */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <span className="text-sm mr-2">Sound:</span>
                                    {isPlaying ? 
                                        <span className="text-sm text-green-400">Playing</span> : 
                                        <span className="text-sm text-gray-400">Muted</span>
                                    }
                                </div>
                                <div className="flex items-center">
                                    {/* Clickable Off label */}
                                    <span 
                                        className={`mr-2 text-xs font-medium cursor-pointer px-2 py-1 rounded transition-colors duration-200
                                            ${!isPlaying 
                                                ? 'text-white bg-mars-red font-bold' 
                                                : 'text-gray-500 hover:text-gray-300'}`}
                                        onClick={() => isPlaying && toggleAudio()} // Only toggle if currently playing
                                    >
                                        Off
                                    </span>
                                    
                                    {/* Toggle slider - always visible */}
                                    <div 
                                        className="relative w-12 h-6 bg-mars-red rounded-full cursor-pointer transition-colors duration-300"
                                        onClick={toggleAudio}
                                    >
                                        {/* The sliding circle */}
                                        <div 
                                            className={`absolute left-0.5 top-0.5 w-5 h-5 bg-white z-10 rounded-full transform transition-transform duration-300 ${
                                                isPlaying ? 'translate-x-6 bg-white' : 'translate-x-0 bg-gray-400'
                                            }`}
                                        ></div>
                                        {/* The background track - always visible, just changes color */}
                                        <div 
                                            className={`absolute inset-0 rounded-full transition-colors duration-300 ${
                                                isPlaying ? 'bg-button-blue' : 'bg-gray-700'
                                            }`}
                                        ></div>
                                    </div>
                                    
                                    {/* Clickable On label */}
                                    <span 
                                        className={`ml-2 text-xs font-medium cursor-pointer px-2 py-1 rounded transition-colors duration-200
                                            ${isPlaying 
                                                ? 'text-white bg-button-blue font-bold' 
                                                : 'text-gray-500 hover:text-gray-300'}`}
                                        onClick={() => !isPlaying && toggleAudio()} // Only toggle if currently not playing
                                    >
                                        On
                                    </span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            )}

            {/* Help Modal */}
            {isHelpOpen && (
                <div className="fixed inset-0 bg-main-black bg-opacity-70 flex justify-center items-center z-50">
                    <div className="relative bg-main-black text-white p-6 rounded-lg w-80 drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)] shadow-lg">
                        <button className="absolute top-2 right-2 hover:scale-110 transition-transform duration-200 ease-in-out
                         text-white" onClick={toggleHelp}>✖</button>
                        <h2 className="text-xl font-bold font-header text-center">HELP</h2>
                        <div className="flex flex-col gap-2 mt-4">
                            <p className="text-sm">Use the arrow keys to navigate the game.</p>
                            <p className="text-sm">Each round, you must decide whether to fight alone or team up with Venus or Jupiter.</p>
                            <p className="text-sm">Keep an eye on the time until impact!</p>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default StatusBar;