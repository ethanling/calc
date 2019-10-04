import React, { useEffect, useContext } from "react";
// State
import { NumberContext } from '../context/NumberProvider';
// Components
import Buttons from "./Buttons";
import Display from "./Display";
// Theme
import { ThemeContext } from "../context/ThemeProvider";
// Animation
import { motion } from "framer-motion";

const Calc = () => {
    const { theme } = useContext(ThemeContext);
    // For keyboard input of numbers
    const { handleKeyInput } = useContext(NumberContext);

    useEffect(() => {
        const handleKeyDown = (e) => handleKeyInput(e.key)
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    })


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
