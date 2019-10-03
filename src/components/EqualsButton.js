import React, { useContext } from "react";
import { NumberContext } from '../context/NumberProvider';
import { ThemeContext } from "../context/ThemeProvider";

const EqualsButton = () => {
    
    const { handleMath } = useContext(NumberContext);
    const { theme } = useContext(ThemeContext);

    return (
        <button
            type="button"
            className="button button-operator"
            style={{ backgroundColor: theme.operationButton.backgroundColor }}
            onClick={() => handleMath()}
        >
            =
        </button>
    );
};

export default EqualsButton;
