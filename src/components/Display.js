import React, { useContext } from 'react';

// Theme
import { ThemeContext } from '../context/ThemeProvider'

// State
import { NumberContext } from '../context/NumberProvider';

const Display = (props) => {
    const { theme } = useContext(ThemeContext);
    const { number, storedNumber, functionType } = useContext(NumberContext);
    return (
        <div 
            className="calc-display"
            style={{
                backgroundColor: theme.display.backgroundColor
            }}
        >
            <span className="display-expression">
                {storedNumber && functionType && number ? (`${storedNumber} ${functionType} ${number}`) : ('')}
            </span>
            <span className="display-number">
                {!number.length && !storedNumber ? "0" : number || storedNumber}
            </span>
            {/* {props.firstLoad ? 'True' : 'False'} */}
        </div>
    );
}

export default Display;