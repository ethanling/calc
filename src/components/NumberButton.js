import React, { useContext } from "react";
import { NumberContext } from '../context/NumberProvider';
import { ThemeContext } from "../context/ThemeProvider";

const NumberButton = ({ buttonValue }) => {
    
    const { handleSetDisplayValue } = useContext(NumberContext);
    const { theme } = useContext(ThemeContext);

    return (
        // Checks if buttonValue is zero to accomodate styling
        <button 
            type="button"
            className={`button ${buttonValue === 0 ? 'button-zero' : ''}`}
            style={{ backgroundColor: theme.button.backgroundColor}}
            onClick={() => handleSetDisplayValue(buttonValue)}  
        >
            { buttonValue }
        </button>
    );
};

export default NumberButton;
