import React from 'react';

//Component activates the reset function in the App.js and resets the states
const Reset = (props) => {
    return (
        <div>
            <button className='reset' onClick={props.reset}>RESET</button>
        </div>
    );
}

export default Reset;
