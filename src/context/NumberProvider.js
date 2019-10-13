import React, { useState } from 'react';

export const NumberContext = React.createContext();

const NumberProvider = props => {
    const [number, setNumber] = useState('');
    const [storedNumber, setStoredNumber] = useState('');
    const [functionType, setFunctionType] = useState('');

    const handleSetDisplayValue = num => {
        if (!number.includes('.') || num !== '.') {
            setNumber(`${(number + num).replace(/^0+/, '')}`);
        }
    }

    const handleSetStoredValue = () => {
        setStoredNumber(number);
        setNumber('');
    }

    const handleClearValue = () => {
        setNumber('');
        setStoredNumber('');
        setFunctionType('');
    }

    const handleBackButton = () => {
        if (number !== '') {
            const deletedNumber = number.slice(0, number.length - 1);
            setNumber(deletedNumber);
        }
    }

    const handleSetCalcFunction = type => {
        if (number) {
            setFunctionType(type);
            handleSetStoredValue();
        }
        if (storedNumber) {
            setFunctionType(type);
        }
    }

    const handleToggleNegative = () => {
        if (number) {
            if (number > 0) {
                setNumber(`-${number}`)
            } else {
                const positiveNumber = number.slice(1);
                setNumber(positiveNumber);
            }
        } else if (storedNumber > 0) {
            setStoredNumber(`-${storedNumber}`);
        } else {
            const positiveNumber = storedNumber.slice(1);
            setStoredNumber(positiveNumber);
        }
    }

    const handleKeyInput = key => {
        // Numbers
        if (!isNaN(parseInt(key)) || key === ".") {
            handleSetDisplayValue(key);
        }
        // Operators
        if (key === '*' || key === '/' || key === '+' || key === '-') {
            handleSetCalcFunction(key);
        }
        // Backspace
        if (key === 'Backspace') {
            console.log(key);
            handleBackButton();
        }
        // Clear
        if (key === 'c') {
            handleClearValue();
        }
        // Equals
        if (key === '=' || key === 'Enter') {
            handleMath();
        }
    }

    const handleMath = () => {
        if (number && storedNumber) {
            switch(functionType) {
                case '+':
                    setStoredNumber(`${parseFloat(storedNumber) + parseFloat(number)}`)
                    break;
                case '-':
                    setStoredNumber(`${parseFloat(storedNumber) - parseFloat(number)}`)
                    break;
                case '/':
                    setStoredNumber(`${parseFloat(storedNumber) / parseFloat(number)}`)
                    break;
                case '*':
                    setStoredNumber(`${parseFloat(storedNumber) * parseFloat(number)}`)
                    break;
                default:
                    break;
            }
            setNumber('');
        }
    }

    return (
        <NumberContext.Provider 
            value={{
                handleSetDisplayValue,
                handleSetStoredValue,
                handleBackButton,
                handleClearValue,
                handleSetCalcFunction,
                handleToggleNegative,
                handleKeyInput,
                handleMath,
                number,
                storedNumber,
                setNumber,
                functionType
            }}
        >
            { props.children }
        </NumberContext.Provider>
    )
}

export default NumberProvider;