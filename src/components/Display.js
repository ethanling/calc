import React, { useContext } from 'react';
import { NumberContext } from '../context/NumberProvider';

const Display = (props) => {
    const { number, storedNumber, functionType } = useContext(NumberContext);
    return (
        <div className="calc-display">
            <span className="display-expression">
                {storedNumber && functionType && number ? (`${storedNumber} ${functionType} ${number}`) : ('')}
            </span>
            <span className="display-number">
                {!number.length && !storedNumber ? "0" : number || storedNumber}
            </span>
            {/* {props.firstLoad ? 'True' : 'False'} */}
        </div>
    );
}

export default Display;