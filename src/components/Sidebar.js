import React from 'react';

import { motion } from 'framer-motion';

const Sidebar = () => {
    return (
        <motion.aside 
            className="sidebar-main"
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <div className="sidebar-container">
                <h1>Calc.</h1>
                <p>
                    This calculator is largely based on the app found in iOS. I
                    built it using React in order to better understand React
                    Hooks. State is managed with the useContext API. Let me know
                    if you have questions, or check out my other projects{" "}
                    <a href="http://ethanling.com/projects">here</a>
                </p>
                <p>
                    Made in 2019 by <a href="http://ethanling.com">Ethan Ling</a>.
                </p>
            </div>
        </motion.aside>
    );
}

export default Sidebar;