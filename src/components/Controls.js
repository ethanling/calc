import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';

const Controls = () => {
    const { theme, toggle, light } = useContext(ThemeContext);

    return (
        <button
                type="button"
                className="controls"
                onClick={toggle}
            >
            <div className="control-theme">
                <div
                    className="control-theme-color-one"
                    style={{ backgroundColor: theme.controls.dark }}
                ></div>
                <div
                    className="control-theme-color-two"
                    style={{ backgroundColor: theme.controls.accent }}
                ></div>
            </div>
            <h3 style={{ color: theme.app.color }}>{light ? 'Mint' : 'Classic'}</h3>
        </button>
    );
}

export default Controls;