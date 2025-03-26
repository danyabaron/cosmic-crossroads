import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import MarsStaticImg from '../assets/mars-art/mars-art-official.png';
import VenusStaticImg from '../assets/venus-art/venus-default.png';
import SaturnStaticImg from '../assets/saturn-art/saturn.png';
import JupiterStaticImg from '../assets/jupiter-art/jupiter-art.png';

function StatusBar({ characters }) {
    const location = useLocation();
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
                    <div className="flex justify-center items-center space-x-2">
                        {/* Map through characters and render them */}
                        {Array.from({ length: maxTeamSize }).map((_, index) => {
                            const character = characters[index]; // Get the character at the current index
                            return (
                                <div
                                    key={index}
                                    className={`w-7 h-7 md:w-8 md:h-8 flex relative self-center rounded-full ${
                                        character ? 'overflow-hidden' : 'border-team-gray border-2'
                                    }`}
                                >
                                    {character ? (
                                        <img
                                            src={characterImages[character]}
                                            alt={character}
                                            className="w-full h-full absolute inset-0 object-center object-cover"
                                        />
                                    ) : null}
                                </div>
                            );
                        })}
                    </div>
                </div>

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
            <div className="flex items-center space-x-2 md:space-x-4 p-3">
                <IoIosHelpCircleOutline className='text-lg md:text-2xl cursor-pointer' onClick={toggleHelp} />
                <CiSettings className='text-lg md:text-2xl cursor-pointer' onClick={toggleSettings} />
            </div>

            {/* Settings Modal */}
            {isSettingsOpen && (
                <div className="fixed inset-0 bg-main-black bg-opacity-70 flex justify-center items-center z-50">
                    <div className="relative bg-main-black text-white p-6 rounded-lg w-80 drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)] shadow-lg">
                        <button className="absolute top-2 right-2 text-white" onClick={toggleSettings}>✖</button>
                        <h2 className="text-xl font-bold font-header text-center">SETTINGS</h2>
                        <div className="flex flex-col gap-2 mt-4">
                            <button className="text-sm">Sound: On/Off</button>
                            <button className="text-sm">Reset Progress</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Help Modal */}
            {isHelpOpen && (
                <div className="fixed inset-0 bg-main-black bg-opacity-70 flex justify-center items-center z-50">
                    <div className="relative bg-main-black text-white p-6 rounded-lg w-80 drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)] shadow-lg">
                        <button className="absolute top-2 right-2 text-white" onClick={toggleHelp}>✖</button>
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