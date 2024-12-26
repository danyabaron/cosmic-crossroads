import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import VenusMouthOpen from '../../assets/venus-art/venus-mouth-open.png';
import MarsGif from '../../assets/mars-art/mars-art-official.gif';
import MarsStaticImg from '../../assets/mars-art/mars-art-official1.png';
import VenusGifDefault from '../../assets/venus-art/venus-default-GIF.gif';
import VenusGifAnnoyed from '../../assets/venus-art/venus-annoyed-gif.gif';
import VenusGifSmirk from '../../assets/venus-art/venus-smirk-gif.gif';
import VenusGifMouthOpen from '../../assets/venus-art/venus-mouth-open-gif.gif';
import JupiterDefault from '../../assets/jupiter-art/jupiter-art.png';
import JupiterGif from '../../assets/jupiter-art/jupiter-art-gif.gif';
import JupiterAnnoyedGif from '../../assets/jupiter-art/jupiter-art-annoyed-gif.gif';







function MarsGame() {

    // const scroll = new LocomotiveScroll();

    const [choice, setChoice] = useState(null);
    const [screen, setScreen] = useState('venus');

    
    useEffect(() => {

        console.log('starting scroll');
        const scroll = new LocomotiveScroll({
            
            // sets horizontal scroll 
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
            getDirection: true,
            // direction: 'horizontal',
            gestureDirection: 'both'
        });

        scroll.on('scroll', (args) => {
            console.log(args.direction); // Check direction changes
        });
        return () => {
            if (scroll) scroll.destroy();
            console.log('destroyed scroll');
        };
    }, []);

    // useEffect(() => {
    //     const scrollContainer = document.querySelector('[data-scroll-container]');
    //     let scroll;

    //     const initializeScroll = () => {
    //         if (scroll) scroll.destroy();

    //         const isMobile = window.matchMedia('(max-width: 768px)').matches;
    //         scroll = new LocomotiveScroll({
    //             el: scrollContainer,
    //             smooth: true,
    //             direction: isMobile ? 'vertical' : 'horizontal'
    //         });
    //     };

    //     initializeScroll();

    //     window.addEventListener('resize', initializeScroll);

    //     return () => {
    //         if (scroll) scroll.destroy();
    //         window.removeEventListener('resize', initializeScroll);
    //     };
    // }, []);


    // USER STARTS AT VENUS' GROTTO. THE MAIN START SCREEN. VENUS IS THE BENEFIC PLANET. USER CAN CHOOSE TO STICK WITH MARS, THEIR MALEFIC PLANET, OR ADD VENUS TO THEIR TEAM. 
    if (screen === 'venus') {

    return (
        <div className='bg-venus-bg-scroll min-w-screen h-fit' data-scroll-container id='venus-scroll-container'>

   
        <div className=' flex flex-col items-start mt-10' id='venus-container' data-scroll-section data-scroll-direction='vertical'>
           <div className='w-full h-full items-center justify-start m-6' id='spacing-venus-grotto-container'>
                    
                <div data-scroll data-scroll-sticky className='flex flex-col gap-4 '>
                    <div data-scroll className='bg-main-black text-white rounded-md text-xs md:text-sm lg:text-base shadow-md flex flex-row items-center justify-center
                        text-wrap w-[400px] md:w-[700px] lg:w-[700px] p-6 gap-10' id='venus-grotto'>
                            <div className='flex flex-col items-start gap-2' id='venus-grotto-text'>
                                <h1 className='text-base font-header md:text-lg lg:text-xl'>Venus' Grotto</h1>
                                    <p className='text-xs md:text-sm'>
                                        Keep scrolling to learn about Venus and what she thinks about the asteroids coming. 
                                        Learn more about your benefic friend!

                                    </p>
                                    <p className='text-xs md:text lg:text-sm'>
                                        Traits: <span className='text-venus-pink'>positivity</span>, <span className='text-[#CF8242]'>love</span>, <span className='text-[#A40073]'>harmony</span>
                                    </p>
                            </div>
                            <div className='flex flex-col items-center' id='venus-bio'>
                                <h1 className='whitespace-nowrap text-base sm:text-sm'>View Venus' Bio</h1>
                                <img className="md:max-w-[65px] h-auto" src={VenusMouthOpen} alt="Venus Bio Image"/>
                            </div>
                       </div>

                    <div data-scroll className='bg-main-black text-white rounded-md text-xs md:text-sm lg:text-base shadow-md flex flex-row px-4 py-2 items-center justify-center
                        text-wrap w-[160px] md:w-[260px]' id='scroll-text'>
                            <h1 className='text-xs md:text-sm'> Scroll right or press your L or R arrow keys to move</h1>
                        </div>

                    </div>
                </div>
                    


                      {/* <p className='text-sm'>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate euismod nunc, id sagittis quam vestibulum nec. Praesent aliquam nisi non orci faucibus posuere in sit amet sem. Donec aliquam sed erat eu viverra. Proin consectetur, erat eget condimentum dignissim, erat tortor egestas erat, et consequat augue ante sit amet risus. Praesent id diam non est rhoncus interdum id sit amet sem. Ut cursus neque risus, non molestie tortor eleifend non. Aenean et est a est sagittis interdum. Quisque vulputate, nulla eget vestibulum finibus, turpis ligula pretium lectus, eget finibus ipsum metus a sem. Ut consectetur libero vitae mauris dapibus mattis.

Mauris at lacinia nisl. Nam et fermentum tellus. Suspendisse potenti. Fusce non elementum lacus, ut venenatis nisl. Proin pulvinar quam eu massa ultricies aliquet. Curabitur finibus, diam varius condimentum accumsan, felis augue tempor massa, quis tristique nibh justo in eros. Donec pretium, nulla vel tristique eleifend, dui neque aliquet sem, eget cursus nibh metus quis nisi. Etiam fringilla aliquet risus, sit amet imperdiet libero malesuada eu. Vivamus accumsan ullamcorper lacus, sit amet congue leo ultricies eu.

Curabitur Morbi laoreet, orci in semper suscipit, lectus massa blandit mi, 

                       
                    </p>    */}
                <div className='w-full h-full items-center justify-start p-6'>
                    <div data-scroll-section  
                    data-scroll-direction='horizontal' 
                   
                
                    className='pt-12 pb-10 flex flex-row w-full gap-2 flex-nowrap ' 
                    id='horizontal-container'>
                        <div className='flex items-start gap-4 flex-shrink-0' data-scroll id='dialogue-section'>
                                <div className='mt-9 w-fit' id='mars-image'>
                                    <img className="" src={MarsGif} alt="Mars Gif"/>
                                </div>
                            
                                <div className="bg-white text-main-black rounded-md text-xs md:text-sm lg:text-base flex items-center justify-center 
                                text-wrap shadow-lg px-4 py-2 max-w-sm flex-shrink-0" >
                                    <p>
                                        Oof.. why is everything so bright and pink in here? We must be at Venus’ place... I wanna go home already...
                                    </p>
                               
                                </div>

                                
                        </div>
                        {/* <div className='flex items-start gap-4 flex-shrink-0' data-scroll id='dialogue-section'>
                                <div className='mt-9 w-fit' id='mars-image'>
                                    <img className="" src={MarsGif} alt="Mars Gif"/>
                                </div>
                            
                                <div className="bg-white text-main-black rounded-md text-xs md:text-sm lg:text-base flex items-center justify-center 
                                text-wrap shadow-lg px-4 py-2 max-w-sm flex-shrink-0" >
                                    <p>
                                        Oof.. why is everything so bright and pink in here? We must be at Venus’ place... I wanna go home already...
                                    </p>
                               
                                </div>

                                
                        </div> */}
                        {/* <div className='flex items-start gap-4 flex-shrink-0' data-scroll id='dialogue-section'>
                                <div className='mt-9 w-fit' id='mars-image'>
                                    <img className="" src={MarsGif} alt="Mars Gif"/>
                                </div>
                            
                                <div className="bg-white text-main-black rounded-md text-xs md:text-sm lg:text-base flex items-center justify-center 
                                text-wrap shadow-lg px-4 py-2 w-full" >
                                    <p>
                                        Oof.. why is everything so bright and pink in here? We must be at Venus’ place... I wanna go home already...
                                    </p>
                               
                                </div>

                                
                        </div> */}
                


                        <div id='button-container' className='flex flex-col items-center justify-center gap-4'>

                        <button
                            onClick={() => {
                            setChoice('benefic');
                            setScreen('choose-venus'); // Navigate to choice screen
                            }}
                            className="bg-main-black text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600">
                                Compromise with Venus
                        </button>
                        <button
                                onClick={() => {
                                setChoice('malefic');
                                setScreen('stick-mars'); // Navigate to choice screen
                                }}
                        className="bg-main-black text-white px-4 py-2 rounded-md shadow-md">
                        Stick with your Malefic
                        </button>



                        </div>

                    </div>
                </div>
                
                    
                  
                    






                 


                    
                
            </div>

        
        </div>
   
  

    );



    }


     // USER CHOOSES TO COMPROMISE WITH VENUS, THE BENEFIC PLANET FRIEND. THIS ADDS VENUS TO THE STATUS BAR, AND ADDS VENUS TO THEIR TEAM. THEY ENTER JUPITER'S GROTTO WITH MARS AND VENUS 
    // IN THEIR TEAM. NEED TO UPDATE THE STATUS BAR TO DISPLAY THIS.
    if (screen === 'choose-venus') {

        
        return (
            <div className="bg-venus-bg-reg min-w-screen min-h-screen flex items-center justify-center">
          
            <button
              onClick={() => setScreen('jupiter')}
              className="mt-8 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
            >
              Who's Next?
            </button>
          </div>
        )

        

    }



    // USER CHOOSES TO STICK WITH MARS, THEIR MALEFIC PLANET/THEMSELVES. THIS DOES NOT CHANGE THE STATUS BAR, AND NO ONE GETS ADDED TO THEIR TEAM. STATUS BAR IS NOT UPDATED.
    if (screen ==='stick-mars'){

        return (
            <div className="bg-mars-bg-reg min-w-screen min-h-screen flex items-center justify-center">
          
            <button
              onClick={() => setScreen('jupiter')}
              className="mt-8 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
            >
              Who's Next?
            </button>
          </div>
        )

    }

   


    // JUPITER'S GROTTO/SCREEN. STATUS BAR IS UPDATED BASED ON WHAT THE USER CHOSE. THE NEXT SCREENS AFTER THIS ONE ARE DETERMINED BY THE STATUS BAR. NEED TO FIGURE THIS OUT.

    if (screen === 'jupiter') {

        return (
            <div className='bg-jupiter-bg-scroll min-w-screen min-h-screen'>
    
       
            <div className=' flex flex-row items-start pt-12' data-scroll-container id='venus-scroll-container'>
               <div data-scroll-section className='w-full h-screen items-center justify-start p-6'>
                        
                    <div data-scroll className='flex flex-col gap-4 '>
                        <div data-scroll className='bg-main-black text-white rounded-md text-xs md:text-sm lg:text-base shadow-md flex flex-row items-center justify-center
                            text-wrap w-[400px] md:w-[700px] lg:w-[700px] p-6 gap-10' id='venus-grotto'>
                                <div className='flex flex-col items-start gap-2' id='venus-grotto-text'>
                                    <h1 className='text-base font-header md:text-xl lg:text-2xl'>Jupiter's Grotto </h1>
                                        <p className='text-xs md:text-sm'>
                                            Keep scrolling to learn about Jupiter and what they think about the asteroids coming. 
                                            Learn more about your benefic friend!
    
                                        </p>
                                        <p className='text-xs md:text lg:text-sm'>
                                            Traits: <span className='text-venus-pink'>positivity</span>, <span className='text-[#CF8242]'>love</span>, <span className='text-[#A40073]'>harmony</span>
                                        </p>
                            </div>
                            <div className='flex flex-col items-center' id='venus-bio'>
                                <h1 className='whitespace-nowrap text-base sm:text-sm'>View Jupiter's Bio</h1>
                                <img className="md:max-w-[65px] h-auto" src={JupiterDefault} alt="Venus Bio Image"/>
                                
    
                            </div>
                           
    
                        </div>
    
                        <div data-scroll className='bg-main-black text-white rounded-md text-xs md:text-sm lg:text-base shadow-md flex flex-row px-4 py-2 items-center justify-center
                            text-wrap w-[160px] md:w-[260px]' id='scroll-text'>
                                <h1 className='text-xs md:text-sm'> Scroll right or press your L or R arrow keys to move</h1>
                            </div>
    
                        </div>
                        
    
    
                          <p className=''>
    
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate euismod nunc, id sagittis quam vestibulum nec. Praesent aliquam nisi non orci faucibus posuere in sit amet sem. Donec aliquam sed erat eu viverra. Proin consectetur, erat eget condimentum dignissim, erat tortor egestas erat, et consequat augue ante sit amet risus. Praesent id diam non est rhoncus interdum id sit amet sem. Ut cursus neque risus, non molestie tortor eleifend non. Aenean et est a est sagittis interdum. Quisque vulputate, nulla eget vestibulum finibus, turpis ligula pretium lectus, eget finibus ipsum metus a sem. Ut consectetur libero vitae mauris dapibus mattis.
    
    Mauris at lacinia nisl. Nam et fermentum tellus. Suspendisse potenti. Fusce non elementum lacus, ut venenatis nisl. Proin pulvinar quam eu massa ultricies aliquet. Curabitur finibus, diam varius condimentum accumsan, felis augue tempor massa, quis tristique nibh justo in eros. Donec pretium, nulla vel tristique eleifend, dui neque aliquet sem, eget cursus nibh metus quis nisi. Etiam fringilla aliquet risus, sit amet imperdiet libero malesuada eu. Vivamus accumsan ullamcorper lacus, sit amet congue leo ultricies eu.
    
    Curabitur Morbi laoreet, orci in semper suscipit, lectus massa blandit mi, 
    
                           
                        </p>   
                        <div className='flex flex-row w-fit h-fit mt-12' id='mars-dialogue-1'>
                                <div className='mt-9' id='mars-image'>
                                    <img className="w-[100px]  sm:w-[100px]  md:w-[100px]  lg:w-[150px] " src={MarsGif} alt="Mars Gif"/>
                                </div>
                            <div className='' id='mars-text-1'>
                                <div className="bg-white text-main-black rounded-md text-xs md:text-sm lg:text-base flex items-center justify-center 
                                 text-wrap shadow-lg md:w-[382px] px-4 py-2" >
                                    <p>
                                        Oof.. why is everything so bright and pink in here? We must be at Venus’ place... I wanna go home already...
                                    </p>
                                </div>
                            </div>
    
                            
                            
                        </div>
    
                        {/* <div id='button-container' className='flex flex-col items-center justify-center gap-4'>
                         <button
                                onClick={() => {
                                setChoice('malefic');
                                setScreen('stick-mars'); // Navigate to choice screen
                                }}
                        className="bg-main-black text-white px-4 py-2 rounded-md shadow-md">
                    Stick with Malefic
                  </button>
                 
                        <button
                            onClick={() => {
                            setChoice('benefic');
                            setScreen('choose-venus'); // Navigate to choice screen
                            }}
                    className="bg-main-black text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600">
                    Add Venus to Your Team
                  </button>
    
                            </div> */}
    
    
                        
                    </div>
            
            </div>
        </div>
    
        );
    }
}

export default MarsGame;