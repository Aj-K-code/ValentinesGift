import React, { useState, useEffect } from 'react';
import { differenceInDays, format } from 'date-fns';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Calendar } from 'lucide-react';
import { START_DATE, WEDDING_DATE } from '../constants';

export const DayCounter = () => {
    const [today, setToday] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setToday(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    const weddingDate = new Date(WEDDING_DATE);
    const datingStartDate = new Date(START_DATE);
    const daysUntilWedding = differenceInDays(weddingDate, today);
    const daysDating = differenceInDays(today, datingStartDate);
    const daysMarried = differenceInDays(today, weddingDate);
    const isMarried = today >= weddingDate;
    const formattedToday = format(today, "MMMM do, yyyy");
    const formattedWeddingDate = format(weddingDate, "MMMM do, yyyy");

    return (
        <div className="text-center space-y-6">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-white/60 text-sm uppercase tracking-widest font-light"
            >
                Today is {formattedToday}
            </motion.div>

            {/* Main Countdown/Count-up Card */}
            <div className="glass-card p-8 sm:p-10 max-w-2xl w-[calc(100%-2rem)] mx-auto space-y-6">
                {!isMarried ? (
                    <>
                        {/* Countdown to Wedding */}
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Calendar className="w-6 h-6 text-purple-300" />
                            <h2 className="text-2xl sm:text-3xl text-purple-200 font-light">
                                Countdown to Forever
                            </h2>
                            <Calendar className="w-6 h-6 text-purple-300" />
                        </div>

                        <div className="flex items-center justify-center gap-4 my-4">
                            <motion.div
                                animate={{
                                    scale: [1, 1.3, 1],
                                    rotate: [0, 10, -10, 0]
                                }}
                                transition={{ repeat: Infinity, duration: 2 }}
                            >
                                <Sparkles className="w-10 h-10 text-yellow-400 fill-yellow-400" />
                            </motion.div>

                            <motion.span
                                className="text-7xl sm:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400"
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 100 }}
                                key={daysUntilWedding}
                            >
                                {daysUntilWedding}
                            </motion.span>

                            <motion.div
                                animate={{
                                    scale: [1, 1.3, 1],
                                    rotate: [0, -10, 10, 0]
                                }}
                                transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
                            >
                                <Sparkles className="w-10 h-10 text-yellow-400 fill-yellow-400" />
                            </motion.div>
                        </div>

                        <div className="text-3xl sm:text-4xl font-light text-white/90">
                            Days Until We Say "I Do"
                        </div>

                        <p className="text-lg text-purple-300/80 font-medium">
                            {formattedWeddingDate}
                        </p>

                        {/* Dating Duration */}
                        <div className="pt-6 mt-6 border-t border-white/10">
                            <div className="flex items-center justify-center gap-3">
                                <Heart className="w-5 h-5 text-pink-400 fill-pink-400" />
                                <p className="text-white/70 text-base sm:text-lg">
                                    We have been dating for{' '}
                                    <motion.span
                                        className="font-bold text-pink-300 text-xl sm:text-2xl"
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                    >
                                        {daysDating}
                                    </motion.span>
                                    {' '}days
                                </p>
                                <Heart className="w-5 h-5 text-pink-400 fill-pink-400" />
                            </div>
                        </div>

                        <p className="mt-4 text-white/50 text-sm italic">
                            Every day brings us closer to forever together ✨
                        </p>
                    </>
                ) : (
                    <>
                        {/* Married Counter */}
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
                            <h2 className="text-2xl sm:text-3xl text-purple-200 font-light">
                                Happily Married
                            </h2>
                            <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
                        </div>

                        <div className="flex items-center justify-center gap-4 my-4">
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                <Heart className="w-10 h-10 text-pink-500 fill-pink-500" />
                            </motion.div>

                            <motion.span
                                className="text-7xl sm:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400"
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 100 }}
                                key={daysMarried}
                            >
                                {daysMarried}
                            </motion.span>

                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
                            >
                                <Heart className="w-10 h-10 text-pink-500 fill-pink-500" />
                            </motion.div>
                        </div>

                        <div className="text-3xl sm:text-4xl font-light text-white/90">
                            Days of Marriage
                        </div>

                        <p className="text-lg text-purple-300/80 font-medium">
                            Since {formattedWeddingDate}
                        </p>

                        {/* Dating Duration */}
                        <div className="pt-6 mt-6 border-t border-white/10">
                            <div className="flex items-center justify-center gap-3">
                                <Heart className="w-5 h-5 text-pink-400 fill-pink-400" />
                                <p className="text-white/70 text-base sm:text-lg">
                                    We dated for{' '}
                                    <span className="font-bold text-pink-300 text-xl sm:text-2xl">
                                        {daysDating}
                                    </span>
                                    {' '}days before tying the knot
                                </p>
                                <Heart className="w-5 h-5 text-pink-400 fill-pink-400" />
                            </div>
                        </div>

                        <p className="mt-4 text-white/50 text-sm italic">
                            Forever and always, my love 💍
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};
