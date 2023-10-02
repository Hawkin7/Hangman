import React from 'react';
import Image1 from '../images/Image1.png'; 
import Image2 from '../images/Image2.png'; 
import Image3 from '../images/Image3.png'; 
import Image4 from '../images/Image4.png'; 
import Image5 from '../images/Image5.png'; 
import Image6 from '../images/Image6.png'; 
import Image7 from '../images/Image7.png'; 
import Image8 from '../images/Image8.png';

//Component cycles through the images along with the count of incorrect guesses 
const HangmanImages = ({ count }) => {
    const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];
    return (
        <div>
            <img src={images[count]} alt="Hangman figure" className='hangman-image' />
            
            
        </div>
    );
}

export default HangmanImages;