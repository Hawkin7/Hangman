import React from 'react';
import Buttons from './Buttons';

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Component maps the alphabet to the buttons and the functionalities are passed as props from Buttons.js
const Alphabet = ({ onClick, disabledLetters }) => {

    return (
        alphabet.map((letter, index) =>
            <Buttons 
                key={index} 
                letter={letter} 
                onClick={onClick} 
                disabled={disabledLetters.includes(letter)}
            />
        )
    );
}

export default Alphabet;
