import React, { useContext } from "react";

// Theme
import { ThemeContext } from "../context/ThemeProvider";

// Components
import Buttons from "./Buttons";
import Display from "./Display";

// Animation
import { motion } from "framer-motion";

const Calc = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <motion.div
            className="calc-wrapper"
            animate={{ scale: 0.9 }}
            style={{
                backgroundColor: theme.calc.backgroundColor
            }}
        >
            <Display />
            <Buttons />
        </motion.div>
    );
};

export default Calc;
