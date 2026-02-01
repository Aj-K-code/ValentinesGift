import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles } from 'lucide-react';

export const ComplimentMachine = () => {
    const [compliments, setCompliments] = useState([]);
    const [currentCompliment, setCurrentCompliment] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}compliments.json`)
            .then(res => res.json())
            .then(data => {
                setCompliments(data);
                setCurrentCompliment(data[Math.floor(Math.random() * data.length)]);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to load compliments", err);
                setCompliments(["You are amazing!", "I love you!"]);
                setCurrentCompliment("You are amazing!");
                setLoading(false);
            });
    }, []);

    const triggerConfetti = () => {
        const count = 200;
        const defaults = {
            origin: { y: 0.7 },
            colors: ['#ec4899', '#8b5cf6', '#f43f5e']
        };

        function fire(particleRatio, opts) {
            confetti({
                ...defaults,
                ...opts,
                particleCount: Math.floor(count * particleRatio)
            });
        }

        fire(0.25, { spread: 26, startVelocity: 55 });
        fire(0.2, { spread: 60 });
        fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
        fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
        fire(0.1, { spread: 120, startVelocity: 45 });
    };

    const getNewCompliment = () => {
        if (compliments.length === 0) return;
        const next = compliments[Math.floor(Math.random() * compliments.length)];
        setCurrentCompliment(next);
        triggerConfetti();
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-12 text-center">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentCompliment}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="min-h-[120px] flex items-center justify-center"
                >
                    <h3 className="text-2xl sm:text-4xl font-serif text-white leading-tight max-w-3xl mx-auto drop-shadow-lg">
                        "{currentCompliment}"
                    </h3>
                </motion.div>
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={getNewCompliment}
                className="mt-12 group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md border border-white/20 transition-all shadow-lg hover:shadow-pink-500/20"
            >
                <Sparkles className="w-5 h-5 text-yellow-300 group-hover:rotate-12 transition-transform" />
                <span className="font-medium tracking-wide">Tell me something sweet</span>
                <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-pink-400/50 transition-all" />
            </motion.button>
        </div>
    );
};
