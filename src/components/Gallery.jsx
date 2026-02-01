import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

const images = [
    "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1621112904887-419379ce6824?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800&auto=format&fit=crop",
    // Memory 4 removed as requested
    "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=800&auto=format&fit=crop",
];

export const Gallery = () => {
    const [dailyPhoto, setDailyPhoto] = useState(null);

    useEffect(() => {
        // Get today's date as a seed for consistent daily photo
        const today = format(new Date(), 'yyyy-MM-dd');
        // Create a simple hash from the date string
        let hash = 0;
        for (let i = 0; i < today.length; i++) {
            hash = ((hash << 5) - hash) + today.charCodeAt(i);
            hash = hash & hash; // Convert to 32-bit integer
        }
        // Use the hash to pick a consistent photo for today
        const index = Math.abs(hash) % images.length;
        setDailyPhoto(images[index]);
    }, []);

    if (!dailyPhoto) return null;

    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-20">
            <h2 className="text-3xl font-light text-center mb-4 text-white/80">
                Memory for Today
            </h2>
            <p className="text-center text-white/40 text-sm mb-8">
                {format(new Date(), 'MMMM do, yyyy')}
            </p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto"
            >
                <div className="relative group overflow-hidden rounded-xl">
                    <img
                        src={dailyPhoto}
                        alt="Memory for today"
                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            </motion.div>
        </div>
    );
};
