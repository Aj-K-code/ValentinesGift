import React, { useState, useEffect } from 'react';
import { differenceInDays, format } from 'date-fns';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { START_DATE } from '../constants';

export const DayCounter = () => {
    const [today, setToday] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setToday(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    const totalDays = differenceInDays(today, new Date(START_DATE));
    const formattedToday = format(today, "MMMM do, yyyy");

    return (
        <div className="text-center space-y-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-white/60 text-sm uppercase tracking-widest font-light"
            >
                Today is {formattedToday}
            </motion.div>

            <div className="glass-card p-8 inline-block max-w-2xl w-full mx-4">
                <h2 className="text-xl sm:text-2xl text-purple-200 mb-2 font-light">
                    We have been together for
                </h2>

                <div className="flex items-center justify-center gap-4 my-2">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
                    </motion.div>

                    <motion.span
                        className="text-6xl sm:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        {totalDays}
                    </motion.span>

                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
                    >
                        <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
                    </motion.div>
                </div>

                <div className="text-3xl font-light text-white/90">
                    Days
                </div>

                <p className="mt-4 text-white/50 text-sm italic">
                    ...and every single one has been better because of you.
                </p>
            </div>
        </div>
    );
};
