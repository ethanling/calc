import React, { useContext } from 'react';
// Theme
import { ThemeContext } from '../context/ThemeProvider'
// State
import { NumberContext } from '../context/NumberProvider';
// Lib functions
import { symbols } from '../lib/Symbols';

const Display = (props) => {
    const { theme } = useContext(ThemeContext);
    const { number, storedNumber, functionType } = useContext(NumberContext);

    const formatSymbol = (type) => {
        const formattedSymbol = String.fromCharCode(symbols
            .filter(code => code.operator === type)
            .map(item => item.code)
        );
        return formattedSymbol;
    }

    // Adds line breaks to numbers too long to fit onto calc display
    const addLineBreaks = num => {
        let formattedNum = "";
        const arr = num.match(/.{1,11}/g);

        if (arr) {
            for (let i = 0; i < arr.length; i++) {
                formattedNum += arr[i] + "\n";
            }
        }
        return formattedNum;
    };

    return (
        <div 
            className="calc-display"
            style={{
                backgroundColor: theme.display.backgroundColor
            }}
        >
            <span className="display-expression">
                {storedNumber && functionType && number ? 
                    (`${storedNumber} ${formatSymbol(functionType)} ${number}`) 
                    : ('')}
            </span>
            <span className="display-number">
                {!number.length && !storedNumber ? "0" : addLineBreaks(number) || addLineBreaks(storedNumber)}
            </span>
            {/* {props.firstLoad ? 'True' : 'False'} */}
        </div>
    );
}

export default Display;