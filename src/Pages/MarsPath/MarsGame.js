import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import VenusMouthOpen from '../../assets/venus-art/venus-mouth-open.png';
import MarsGif from '../../assets/mars-art/mars-art-official.gif';
import MarsStaticImg from '../../assets/mars-art/mars-art-official1.png';
import VenusGifDefault from '../../assets/venus-art/venus-default-GIF.gif';
import VenusGifAnnoyed from '../../assets/venus-art/venus-annoyed-gif.gif';
import VenusGifSmirk from '../../assets/venus-art/venus-smirk-gif.gif';
import VenusGifMouthOpen from '../../assets/venus-art/venus-mouth-open-gif.gif';







function MarsGame() {

    // const scroll = new LocomotiveScroll();

    
    useEffect(() => {

        console.log('starting scroll');
        const scroll = new LocomotiveScroll({
            
            // sets horizontal scroll 
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
            direction: 'horizontal',
            gestureDirection: 'vertical',
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


    return (
        <div className='bg-venus-bg-scroll min-w-screen min-h-screen'>

   
        <div className=' flex flex-row items-start pt-12' data-scroll-container id='venus-scroll-container'>
           <div data-scroll-section className='w-full h-screen items-center justify-start p-6'>
                    
                <div data-scroll className='flex flex-col gap-4 w-1/3'>
                    <div data-scroll className='bg-main-black text-white rounded-md text-xs md:text-sm lg:text-base shadow-md flex flex-row items-center justify-center
                        text-wrap w-[400px] md:w-[700px] lg:w-[700px] p-6 gap-10' id='venus-grotto'>
                            <div className='flex flex-col items-start gap-2' id='venus-grotto-text'>
                                <h1 className='text-base font-header md:text-xl lg:text-2xl'>Venus' Grotto</h1>
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
                    


                      <p className=''>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate euismod nunc, id sagittis quam vestibulum nec. Praesent aliquam nisi non orci faucibus posuere in sit amet sem. Donec aliquam sed erat eu viverra. Proin consectetur, erat eget condimentum dignissim, erat tortor egestas erat, et consequat augue ante sit amet risus. Praesent id diam non est rhoncus interdum id sit amet sem. Ut cursus neque risus, non molestie tortor eleifend non. Aenean et est a est sagittis interdum. Quisque vulputate, nulla eget vestibulum finibus, turpis ligula pretium lectus, eget finibus ipsum metus a sem. Ut consectetur libero vitae mauris dapibus mattis.

Mauris at lacinia nisl. Nam et fermentum tellus. Suspendisse potenti. Fusce non elementum lacus, ut venenatis nisl. Proin pulvinar quam eu massa ultricies aliquet. Curabitur finibus, diam varius condimentum accumsan, felis augue tempor massa, quis tristique nibh justo in eros. Donec pretium, nulla vel tristique eleifend, dui neque aliquet sem, eget cursus nibh metus quis nisi. Etiam fringilla aliquet risus, sit amet imperdiet libero malesuada eu. Vivamus accumsan ullamcorper lacus, sit amet congue leo ultricies eu.

Curabitur in ex vel tortor posuere dapibus sit amet vitae purus. Vestibulum efficitur et ante non facilisis. Fusce ut hendrerit felis, id mollis quam. Morbi tincidunt libero dui, nec aliquam eros aliquet eu. Vivamus feugiat consequat diam, et ultrices ipsum sagittis in. Phasellus ultrices aliquet mauris id commodo. Maecenas sodales rutrum turpis eget pharetra. Pellentesque in risus erat. Suspendisse eget nulla consectetur, porttitor metus et, faucibus ex. Fusce mattis sem gravida scelerisque molestie. Curabitur enim massa, dictum a odio quis, condimentum porta ligula. Proin elit mi, rutrum fermentum rhoncus a, luctus sed orci. Etiam sed tincidunt velit, non porttitor mauris.

Morbi laoreet, orci in semper suscipit, lectus massa blandit mi, eu placerat quam mi non augue. Pellentesque id cursus turpis. Maecenas vitae tristique augue. Proin elementum nisl tincidunt dolor cursus, at faucibus nulla malesuada. Integer dui nibh, mollis sit amet nulla ac, sollicitudin iaculis ligula. Donec id elit velit. Integer eget nunc commodo, rutrum orci sed, viverra nunc. Morbi eget nulla ac libero cursus interdum. Sed congue ligula in magna viverra eleifend. Sed dolor risus, auctor non facilisis ac, tincidunt vel urna. Donec dui nunc, imperdiet eu elit in, hendrerit egestas ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Praesent leo ex, sodales malesuada tempor vel, rutrum et mi. Fusce risus nisl, consequat sed tincidunt nec, accumsan eu elit. Quisque lobortis ligula ut tempus egestas. Vivamus sit amet semper nibh, id vulputate nulla. Sed cursus nisl eleifend neque sodales, et consectetur ante cursus. Sed lobortis gravida nibh mollis mattis. Mauris aliquet ultrices mi at iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus, massa ut consectetur suscipit, lectus massa pretium purus, et fringilla neque diam ut sem. Vestibulum iaculis imperdiet metus non tincidunt. Morbi condimentum at arcu eu bibendum.
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


                </div>
        
        </div>
    </div>

    );

    
}

export default MarsGame;