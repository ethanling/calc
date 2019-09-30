import React from "react";

// Components
import NumberButton from "./NumberButton";
import EqualsButton from "./EqualsButton";
import ClearButton from "./ClearButton";
import OperationButton from "./OperationButton";
import NegativeButton from "./NegativeButton";
import BackButton from "./BackButton";

const Buttons = () => {
    return (
        <div className="calc-buttons">
            <ClearButton />
            <BackButton />
            <NegativeButton />
            <OperationButton buttonValue="/" />
            <NumberButton buttonValue={7} />
            <NumberButton buttonValue={8} />
            <NumberButton buttonValue={9} />
            <OperationButton buttonValue="*" />
            <NumberButton buttonValue={4} />
            <NumberButton buttonValue={5} />
            <NumberButton buttonValue={6} />
            <OperationButton buttonValue="-" />
            <NumberButton buttonValue={1} />
            <NumberButton buttonValue={2} />
            <NumberButton buttonValue={3} />
            <OperationButton buttonValue="+" />
            <NumberButton buttonValue={0} />
            <NumberButton buttonValue="." />
            <EqualsButton />
        </div>
    )
};

export default Buttons;
