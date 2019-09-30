import React, { useContext } from "react";
import { NumberContext } from '../context/NumberProvider';

const EqualsButton = () => {
    const { handleMath } = useContext(NumberContext);
    return (
        <button 
            type="button" 
            className="button button-operator"
            onClick={() => handleMath()}
        >
            =
        </button>
    );
};

export default EqualsButton;
