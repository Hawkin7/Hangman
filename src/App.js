import './App.css';
import React, { useState } from 'react';
import Heading from './components/Heading';
import HangmanImages from './components/HangmanImages';
import Alphabet from './components/Alphabet';
import WordDisplay from './components/WordDisplay';
import { randomWord } from './words'
import Reset from './components/Reset';
import WinLose from './components/WinLose';
import Help from './components/Help';

function App() {

    //State is set up with the randomly chosen word from word.js
    //Incorrect and correct guessed letters stored in array state
    //Incorrect and correct are joined so both can be disabled when clicked
    //Number of guesses state as a number
    const [selectedWord, setSelectedWord] = useState(randomWord);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [incorrectLetters, setIncorrectLetters] = useState([]);
    const allGuessedLetters = [...correctLetters, ...incorrectLetters];
    const [count, setCount] = useState(0);

    //Guessed letters are stored in state depending on correct or incorrect 
    //Letters are checked if they are included in the correct word, if so they are stored in correctLetters
    const onClick = (letter) => {
        if (selectedWord.includes(letter)) {
            setCorrectLetters([...correctLetters, letter]);
        } else {
            setIncorrectLetters([...incorrectLetters, letter]);
            setCount(count + 1);
        }
    };

    //Reset button changes the states back to the default initial state
    const resetGame = () => {
        setSelectedWord(randomWord());
        setCorrectLetters([]);
        setIncorrectLetters([]);
        setCount(0);
    };

    return (
        <div className="App">
            <Heading />
            <Help />
            <Reset reset={resetGame} />
            <WinLose count={count} correctLetters={correctLetters} selectedWord={selectedWord} />
            <HangmanImages count={count} />
            <WordDisplay word={selectedWord} correctLetters={correctLetters.join('')} />
            <Alphabet onClick={onClick} disabledLetters={allGuessedLetters}/>
        </div>
    );
}

export default App;