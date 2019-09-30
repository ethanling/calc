import React, { useContext } from "react";
import { NumberContext } from '../context/NumberProvider';

const NegativeButton = () => {
    const { handleToggleNegative } = useContext(NumberContext);
    return (
        <button 
            type="button"
            className="button button-modifier"
            onClick={() => handleToggleNegative()}
        >
            -/+
        </button>
    );
};

export default NegativeButton;