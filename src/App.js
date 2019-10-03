import React, { useContext } from "react";
import Calc from "./components/Calc";
import Sidebar from "./components/Sidebar";
import NumberProvider from "./context/NumberProvider";
import { ThemeContext } from "./context/ThemeProvider";

const App = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div
            className="App"
            style={{ 
                backgroundColor: theme.app.backgroundColor,
            }}
        >
            <Sidebar />
            <NumberProvider>
                <Calc />
            </NumberProvider>
            <div className="sidebar-spacer"></div>
        </div>
    );
};

export default App;
