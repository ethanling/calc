import React, { useState, useEffect } from 'react';

const themes = {
    dark: {
        app: {
            backgroundColor: "#ffdea6",
            color: "#160504"
        },
        calc: {
            backgroundColor: "#271F1F"
        },
        display: {
            backgroundColor: "#423C3C"
        },
        button: {
            backgroundColor: "#5F5959"
        },
        operationButton: {
            backgroundColor: "#ff9130"
        },
        modifierButton: {
            backgroundColor: "#9D9797"
        },
        controls: {
            dark: "#271F1F",
            accent: "#ff9130"
        }
    },
    light: {
        app: {
            backgroundColor: "#374047",
            color: "#DEE1E3"
        },
        calc: {
            backgroundColor: "#97A1A7"
        },
        display: {
            backgroundColor: "#50575F"
        },
        button: {
            backgroundColor: "#3B4148"
        },
        operationButton: {
            backgroundColor: "#7BD1A0"
        },
        modifierButton: {
            backgroundColor: "#666F79"
        },
        controls: {
            dark: "#97A1A7",
            accent: "#7BD1A0"
        }
    }
};

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
    const toggle = () => {
        const isLight = !light;
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