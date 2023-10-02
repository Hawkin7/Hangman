import React, { useState } from 'react';

//Component for the help button and information box
const Help = () => {
    const [isOpen, setIsOpen] = useState(false);

    //Click either opens or closes the information box
    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
       <div>
            <button className="help-button" onClick={handleClick}>
                HELP
            </button>
            
            {/*isOpen acts as a toggle, when activated the information box is either opened or closed */}
            {isOpen && (
                <div className="help-container">
                    <h2> How to Play Hangman:</h2>
                    <p>
                        <h3>Objective: </h3>
                        Guess the secret word or phrase by suggesting letters. You have a limited number of incorrect guesses.

                        <h3>Guessing:</h3>
                        Guess one letter at a time.
                        If the letter is in the word or phrase, it will be revealed.
                        If not, you'll lose a guess.

                        <h3>Winning:</h3>
                        If you guess all the letters before running out of guesses, you win.

                        <h3>Losing: </h3>
                        If you use up all your guesses, you lose.

                        <h3>Outcome:</h3> 
                        The game ends when you win or lose. The word or phrase is revealed.

                        <h3>Restart:</h3> 
                        Optionally, start a new game if you want to play again.
                        <br />
                        <br />
                        -Have fun playing Hangman!-
                        <br />
                        All original Hangman pictures are from <a href='https://tundeszirak.github.io/hangman/'>here</a>
                        <br />
                        All rights reserved
                    </p>
                    {/*Close toggles the isOpen onclick and closes the info box*/}
                    <button className='help-close' onClick={handleClick}>CLOSE</button>
                </div>
            )}
        </div>
    );
}

export default Help;