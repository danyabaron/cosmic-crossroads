import React from 'react';

function ButtonContainer({ setScreen, buttons = [], containerStyle = '', buttonStyle = '', addCharacter, characters = [] }) {
    console.log("ButtonContainer received addCharacter:", addCharacter);
    console.log("ButtonContainer received characters:", characters);

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

                        console.log("Setting screen:", button.screen);
                        setScreen(button.screen);
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