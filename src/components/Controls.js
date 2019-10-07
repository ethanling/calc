import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';

const Controls = () => {
    const { theme, toggle, light } = useContext(ThemeContext);

    return (
        <div className="theme-button-container">
            <button type="button" className="controls" onClick={() => toggle('classic')}>
                <div className="control-theme">
                    <div
                        className="control-theme-color-one"
                        style={{ backgroundColor: "#271F1F" }}
                    ></div>
                    <div
                        className="control-theme-color-two"
                        style={{ backgroundColor: "#ff9130" }}
                    ></div>
                </div>
                <h3 style={{ color: theme.app.color }}>Classic</h3>
            </button>
            <button type="button" className="controls" onClick={() => toggle('mint')}>
                <div className="control-theme">
                    <div
                        className="control-theme-color-one"
                        style={{ backgroundColor: "#97A1A7" }}
                    ></div>
                    <div
                        className="control-theme-color-two"
                        style={{ backgroundColor: "#7BD1A0" }}
                    ></div>
                </div>
                <h3 style={{ color: theme.app.color }}>Mint</h3>
            </button>
        </div>
    );
}

export default Controls;