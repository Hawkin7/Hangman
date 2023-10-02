import React from 'react';

//Component manages the win or lose conditioning 
const WinLose = ({ selectedWord, correctLetters , count }) => {

    /*The correct word is split and compared with the correct letters chosen by the user.
    If every letter matches, the isWin condition is met and triggered*/
    const isWin = selectedWord.split('').every(letter => correctLetters.join('').includes(letter));
    //if the incorrect letter count reaches 6, the user has lost
    const isLose = count >= 6;

    if (isWin) {
        return <div className='win'>YOU WON!</div>;
    } else if (isLose) {
        return <div className='lose'>YOU LOST!</div>;
    } 
    return null;  
};

export default WinLose;