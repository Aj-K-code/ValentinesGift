import React from 'react';
import { motion } from 'framer-motion';

const letterScores = {
    A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4, I: 1, J: 8, K: 5, L: 1, M: 3,
    N: 1, O: 1, P: 3, Q: 10, R: 1, S: 1, T: 1, U: 1, V: 4, W: 4, X: 8, Y: 4, Z: 10
};

export const ScrabbleName = ({ name = "BIYONA" }) => {
    const letters = name.toUpperCase().split('');

    return (
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 my-8">
            {letters.map((char, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -20, rotate: -5 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{
                        type: "spring",
                        bounce: 0.5,
                        delay: index * 0.1
                    }}
                    className="scrabble-tile w-12 h-12 sm:w-16 sm:h-16 text-2xl sm:text-3xl"
                >
                    {char}
                    <span className="scrabble-score">{letterScores[char] || 0}</span>
                </motion.div>
            ))}
        </div>
    );
};
