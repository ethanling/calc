import React, { useContext } from "react";
import { NumberContext } from '../context/NumberProvider';
import { ThemeContext } from "../context/ThemeProvider";

const NegativeButton = () => {
    
    const { handleToggleNegative } = useContext(NumberContext);
    const { theme } = useContext(ThemeContext);

    return (
        <button 
            type="button"
            className="button button-modifier"
            style={{ backgroundColor: theme.modifierButton.backgroundColor }}
            onClick={() => handleToggleNegative()}
        >
            -/+
        </button>
    );
};

export default NegativeButton;