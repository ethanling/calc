import React, { useState, useEffect } from 'react';

import { themes } from '../themes/ThemeStyles';

const initialState = {
    light: false,
    theme: themes.dark,
    toggle: () => {}
}

export const ThemeContext = React.createContext(initialState);

const ThemeProvider = ({ children }) => {
    const [light, setLight] = useState(false);

    // Get theme preference from local storage 
    useEffect(() => {
        const isLight = localStorage.getItem('light') === 'true';
        setLight(isLight);
    }, [light])

    // Toggles between themes
    const toggle = (mode) => {
        console.log(mode);
        let isLight; 
        (mode === 'mint') ? (isLight = true) : (isLight = false);
        // const isLight = !light;
        localStorage.setItem('light', JSON.stringify(isLight));
        setLight(isLight);
    }

    // Select styles based on theme
    const theme = light ? themes.light : themes.dark;

    return (
        <ThemeContext.Provider
            value={{ theme, light, toggle }}
        >
            { children }
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;