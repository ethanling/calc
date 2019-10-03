import React, { useContext } from "react";
import { NumberContext } from '../context/NumberProvider';
import { ThemeContext } from "../context/ThemeProvider";

const BackButton = () => {
    
    const { handleBackButton } = useContext(NumberContext);
    const { theme } = useContext(ThemeContext);

    return (
        <button
            type="button"
            className="button button-modifier"
            style={{ backgroundColor: theme.modifierButton.backgroundColor }}
            onClick={() => handleBackButton()}
        >
            {String.fromCharCode(8592)}
        </button>
    );
};

export default BackButton;
