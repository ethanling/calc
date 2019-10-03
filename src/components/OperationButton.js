import React, { useContext } from "react";
import { NumberContext } from '../context/NumberProvider';
import { ThemeContext } from "../context/ThemeProvider";
import { symbols } from "../lib/Symbols";

const OperationButton = ({ buttonValue }) => {
    
    const { handleSetCalcFunction } = useContext(NumberContext)
    const { theme } = useContext(ThemeContext);

    return (
        <button 
            type="button" 
            className="button button-operator"
            style={{ backgroundColor: theme.operationButton.backgroundColor }}
            onClick={() => handleSetCalcFunction(buttonValue)}
        >
            {   // Display operator symbol
                String.fromCharCode(
                    symbols.filter(code => code.operator === buttonValue)
                    .map(item => item.code)
                )
            }
        </button>
    );
};

export default OperationButton;
