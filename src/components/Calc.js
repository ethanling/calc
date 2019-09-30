import React from 'react';

// Components
import Buttons from './Buttons';
import Display from './Display';

// Animation
import { motion } from 'framer-motion';

const Calc = () => {

    return (
        <div>
            <motion.div 
                className="calc-wrapper"
                animate={{ scale: .9 }}
            >
                <Display />
                <Buttons />
            </motion.div>
        </div>
    )
};

export default Calc;