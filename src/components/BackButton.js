import React, { useContext } from "react";
import { NumberContext } from '../context/NumberProvider';

const BackButton = () => {
    const { handleBackButton } = useContext(NumberContext);
    return (
        <button
            type="button"
            className="button button-modifier"
            onClick={() => handleBackButton()}
        >
            {String.fromCharCode(8592)}
        </button>
    );
};

export default BackButton;
