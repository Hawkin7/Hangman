import React from 'react';

//Component for button structure initialization and click and disable managing
const Buttons = ({ letter, onClick, disabled }) => {
    
    const handleClick = () => {
        onClick(letter);
    };

    return (       
        <button className='letter-buttons' onClick={handleClick} disabled={disabled}> {letter} </button>
    );
};

export default Buttons;