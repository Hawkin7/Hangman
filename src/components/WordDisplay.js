import React from 'react';

//Component displays the underscores or the correctly guessed letters 
const WordDisplay = ({ word, correctLetters }) => {

    //Word (correct word) is split and mapped
    //The ternary will ensure the letters remain as underscores unless the correct letter is chosen
    //In that case the letter is displayed instead of the underscore
    const formatWord = word.split('').map((letter) => (
        correctLetters.includes(letter) ? letter : '_' 
    ));
    
    return (
        <div className='display-word'>
            {formatWord.join('')}
        </div>
    );
};
export default WordDisplay;
