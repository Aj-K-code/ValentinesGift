import React from 'react';
import { motion } from 'framer-motion';

// Placeholder images - You can replace these with local path like "/images/photo1.jpg"
const images = [
    "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop", // Couple holding hands
    "https://images.unsplash.com/photo-1621112904887-419379ce6824?q=80&w=800&auto=format&fit=crop", // Hands forming heart
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800&auto=format&fit=crop", // Love letter
    "https://images.unsplash.com/photo-1522673607200-1645062cd495?q=80&w=800&auto=format&fit=crop", // Couple silhouette
    "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=800&auto=format&fit=crop", // Sitting together
    "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=800&auto=format&fit=crop", // Smiling
];

export const Gallery = () => {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-20">
            <h2 className="text-3xl font-light text-center mb-12 text-white/80">
                Our Memories
            </h2>

            <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
                {images.map((src, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="break-inside-avoid"
                    >
                        <div className="relative group overflow-hidden rounded-xl">
                            <img
                                src={src}
                                alt={`Memory ${index + 1}`}
                                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </motion.div>
                ))}
            </div>

            <p className="text-center text-white/30 text-sm mt-8">
                (More photos coming soon...)
            </p>
        </div>
    );
};
