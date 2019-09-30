import React from "react";
import Calc from "./components/Calc";
import Sidebar from "./components/Sidebar";
import NumberProvider from './context/NumberProvider';

function App() {
    return (
        <div className="App">
            <Sidebar />
            <NumberProvider>
                <Calc />
            </NumberProvider>
            <div className="sidebar-spacer"></div>
        </div>
    );
}

export default App;
