import React from 'react';

function ButtonContainer({ setScreen, buttons, containerStyle = '', buttonStyle = '' }) {
    return (
        <div id='button-container' className={`flex flex-col items-center justify-center gap-4 ${containerStyle}`}>
            {buttons.map((button, index) => (
                <button
                    key={index}
                    onClick={() => {
                        setScreen(button.screen);
                    }}
                    className={`${button.style} ${buttonStyle}`}>
                    {button.text}
                </button>
            ))}
        </div>
    );
}

export default ButtonContainer;