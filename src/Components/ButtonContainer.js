import React from 'react';



function ButtonContainer({ setScreen, buttons, containerStyle = '', buttonStyle = '', addCharacter }) {
    console.log("ButtonContainer received addCharacter:", addCharacter);

    return (
        <div id='button-container' className={`flex flex-col items-center justify-center gap-4 ${containerStyle}`}>
            {buttons.map((button, index) => (
                <button
                    key={index}
                    onClick={() => {
                        console.log("Button clicked:", button.text);
                        console.log("Button object:", button);

                        if (button.addCharacter) {
                            console.log("Attempting to add character:", button.addCharacter);
                            
                            if (addCharacter && typeof addCharacter === 'function') {
                                addCharacter(button.addCharacter);
                                console.log("Character added successfully:", button.addCharacter);
                            } else {
                                console.error("addCharacter is undefined or not a function!");
                            }
                        } else {
                            console.warn("button.addCharacter is undefined for:", button.text);
                        }

                        setTimeout(() => {
                            console.log("Setting screen:", button.screen);
                            setScreen(button.screen);
                        }, 100); 
                    }}
                    className={`${button.style} ${buttonStyle}`}
                >
                    {button.text}
                </button>
            ))}
        </div>
    );
}

export default ButtonContainer;


// function ButtonContainer({ setScreen, buttons, containerStyle = '', buttonStyle = '', addCharacter }) {
    
//     console.log("ButtonContainer received addCharacter:", addCharacter);
    
//     return (
//         <div id='button-container' className={`flex flex-col items-center justify-center gap-4 ${containerStyle}`}>
//             {buttons.map((button, index) => (
//                     <button
//                     key={index}
//                     onClick={() => {
//                         console.log("Button clicked");
//                         console.log("Button object:", button);
//                         if (addCharacter && typeof addCharacter === 'function') {
//                             console.log("Adding character:", button.addCharacter);
//                             addCharacter(button.addCharacter);
//                         }
//                         console.log("Setting screen:", button.screen);
//                         setScreen(button.screen);
//                     }}
//                     className={`${button.style} ${buttonStyle}`}
//                 >
//                     {button.text}
//                 </button>
//             ))}
//         </div>
//     );
// }

// export default ButtonContainer;