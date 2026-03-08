import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
    return (
        <div className="mb-0 text-center">
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4 }}
                className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium mb-4"
            >
                {title}
            </motion.p>
            <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="text-3xl md:text-4xl font-bold tracking-tight text-foreground"
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="text-sm text-muted mt-4 max-w-md mx-auto"
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
};

export default SectionHeading;
