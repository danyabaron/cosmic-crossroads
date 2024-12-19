import React from 'react';
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";





function StatusBar() {


    // const teamMembers = [
    //     { id: 1, name: "Mars", image: "./assets/mars-art/mars-art-official1.png" },
    //     { id: 2, name: "Empty", image: "" },
    //     { id: 3, name: "Empty", image: "" },
    // ];


    return (
    <nav id='status-bar' className='bg-main-black text-white flex w-full h-14 fixed top-0 shadow-xl'>
            
            {/* stats */}
            <div className='max-w-screen flex items-center w-full'>
                <div className="flex items-center p-3 space-x-2 md:space-x-6">
                    <div id="character-text" className="text-xs md:text-sm">
                        <span>Current Character: <span id="current-character">Mars</span></span>
                    </div>
                </div>
              
            <div className="flex items-center space-x-1 md:space-x-2 p-3">
                <span className='text-xs md:text-sm'>Your Team: </span>
                <div className="flex space-x-2">
                   
                    <div className="w-5 h-5 md:w-7 md:h-7 border-2 border-team-gray rounded-full" id="team-member-1"></div>
                    <div className="w-5 h-5 md:w-7 md:h-7 border-2 border-team-gray rounded-full" id="team-member-2"></div>
                    <div className="w-5 h-5 md:w-7 md:h-7 border-2 border-team-gray rounded-full" id="team-member-3"></div>
                </div>
            </div>
            
            <div className="text-xs md:text-sm flex items-center space-x-1 md:space-x-2 p-3">
                <span>Time Until Impact: <span id="time-until-impact">2 Rounds</span></span>
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