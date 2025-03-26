import React, { useEffect, useState, useRef } from 'react';
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import MarsStaticImg from '../assets/mars-art/mars-art-official.png';
import VenusStaticImg from '../assets/venus-art/venus-default.png';
import SaturnStaticImg from '../assets/saturn-art/saturn.png';
import JupiterStaticImg from '../assets/jupiter-art/jupiter-art.png';

function StatusBar({ characters, roundsUntilImpact}) {
    const characterImages = {
        Mars: MarsStaticImg,
        Venus: VenusStaticImg,
        Jupiter: JupiterStaticImg,
        Saturn: SaturnStaticImg,
    };

    const maxTeamSize = 3; // Maximum number of team members

    return (
        <nav id='status-bar' className='bg-main-black text-white flex w-full h-14 fixed top-0 shadow-xl z-10'>
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
                    <span>Time Until Impact: <span 
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
                <IoIosHelpCircleOutline className='text-lg md:text-2xl cursor-pointer'/>
                <CiSettings className='text-lg md:text-2xl cursor-pointer'/>
            </div>
        </nav>
    );
}

export default StatusBar;