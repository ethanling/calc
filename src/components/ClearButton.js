import React, { useContext } from "react";
import { NumberContext } from '../context/NumberProvider';

const ClearButton = () => {
    const { handleClearValue } = useContext(NumberContext);
    return (
        <button 
            type="button" 
            className="button button-modifier"
            onClick={() => handleClearValue()}
        >
            C
        </button>
    );
};

export default ClearButton;