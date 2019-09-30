import React, { useContext } from "react";
import { NumberContext } from '../context/NumberProvider';

const NumberButton = ({ buttonValue }) => {
    const { handleSetDisplayValue } = useContext(NumberContext);

    return (
        // Checks if buttonValue is zero to accomodate styling
        <button 
            type="button"
            className={`button ${buttonValue === 0 ? 'button-zero' : ''}`}
            onClick={() => handleSetDisplayValue(buttonValue)}  
        >
            { buttonValue }
        </button>
    );
};

export default NumberButton;
