import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

// TO ADD YOUR OWN PHOTOS:
// 1. Add your photos to the /public/photos/ folder
// 2. Name them: photo1.jpg, photo2.jpg, photo3.jpg, etc.
// 3. Update the array below with the correct filenames
// Example: "/photos/photo1.jpg", "/photos/photo2.jpg"

const images = [
    "/ValentinesGift/photos/photo1.jpg",
    "/ValentinesGift/photos/photo2.jpg",
    "/ValentinesGift/photos/photo3.jpg",
    "/ValentinesGift/photos/photo4.jpg",
    "/ValentinesGift/photos/photo5.jpg",
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
