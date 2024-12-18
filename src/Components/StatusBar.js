import React from 'react';
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";





function StatusBar() {
    return (
    <nav id='status-bar' className='bg-main-black text-white flex w-full h-12 fixed top-0 shadow-lg'>
            <div className='max-w-screen flex items-center w-full'>
                <div class="flex items-center p-3 space-x-6">
                    <div id="character-text" class="text-sm">
                        <span>Current Character: <span id="current-character">Mars</span></span>
                    </div>
                </div>
              
            <div class="flex items-center space-x-2">
                <span>Your Team: </span>
                <div class="flex space-x-2">
                   
                    <div class="w-7 h-7 border-2 border-team-gray rounded-full" id="team-member-1"></div>
                    <div class="w-7 h-7 border-2 border-team-gray rounded-full" id="team-member-2"></div>
                    <div class="w-7 h-7 border-2 border-team-gray rounded-full" id="team-member-3"></div>
                </div>
            </div>
            
            <div class="text-sm">
                <span>Time Until Impact: <span id="time-until-impact">2 Rounds</span></span>
            </div>
            <div class="flex items-center space-x-4">
                <IoIosHelpCircleOutline/>
                <CiSettings/>
        </div>
            

            </div>
    </nav>

    );

    
}

export default StatusBar;