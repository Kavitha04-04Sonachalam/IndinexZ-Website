import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, center = true }) => {
    return (
        <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-4"
            >
                <span className="text-gradient border-b-2 border-neon pb-1 inline-block">{title}</span>
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-muted text-lg max-w-2xl mx-auto"
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
};

export default SectionTitle;
