import React, { useContext } from "react";
import { NumberContext } from '../context/NumberProvider';

const symbolCodes = [
    { operator: "/", code: "247"},
    { operator: "*", code: "215"},
    { operator: "-", code: "8722"},
    { operator: "+", code: "43"}
]

const OperationButton = ({ buttonValue }) => {
    const { handleSetCalcFunction } = useContext(NumberContext)
    return (
        <button 
            type="button" 
            className="button button-operator"
            onClick={() => handleSetCalcFunction(buttonValue)}
        >
            {   // Display operator symbol
                String.fromCharCode(
                    symbolCodes.filter(code => code.operator === buttonValue)
                    .map(item => item.code)
                )
            }
        </button>
    );
};

export default OperationButton;
