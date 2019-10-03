import React, { useContext } from 'react';

// Components
import Controls from "./Controls";

// Theme
import { ThemeContext } from '../context/ThemeProvider';

// Animation
import { motion } from 'framer-motion';

const Sidebar = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <motion.aside
            className="sidebar-main"
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            style={{
                color: theme.app.color
            }}
        >
            <div className="sidebar-container">
                <h1>Calc.</h1>
                <p>
                    This calculator is largely based on the app found in iOS. I
                    built it using React in order to better understand React
                    Hooks. State is managed with the useContext API. Let me know
                    if you have questions, or check out my other projects{" "}
                    <a
                        style={{ color: theme.app.color }}
                        href="http://ethanling.com/projects"
                    >
                        here
                    </a>
                </p>
                <p>
                    Made in 2019 by{" "}
                    <a
                        style={{ color: theme.app.color }}
                        href="http://ethanling.com"
                    >
                        Ethan Ling
                    </a>
                    .
                </p>
                <Controls />
            </div>
        </motion.aside>
    );
}

export default Sidebar;