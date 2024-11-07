import React from 'react';

function Button({bgColor,bgColorName,setColor}) {
    
    return (
        <>
            <button
                onClick={() => setColor(bgColor)}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{ backgroundColor: bgColor }}>
                    {bgColorName}
            </button>
        </>
    );
}

export default Button;