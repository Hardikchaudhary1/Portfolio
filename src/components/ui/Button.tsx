import React from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 tracking-wider uppercase border border-transparent",
                    {
                        'bg-primary text-white hover:bg-primary-dark shadow-[0_0_15px_rgba(155,27,48,0.3)] hover:shadow-[0_0_25px_rgba(155,27,48,0.5)]': variant === 'primary',
                        'bg-secondary text-white hover:bg-[#3d0d18] shadow-[0_0_10px_rgba(92,20,36,0.3)]': variant === 'secondary',
                        'border border-white/20 bg-transparent hover:bg-white/5 text-white': variant === 'outline',
                        'hover:bg-white/10 text-gray-300 hover:text-white': variant === 'ghost',
                        'h-9 px-4 text-sm': size === 'sm',
                        'h-11 px-8 text-base': size === 'md',
                        'h-14 px-10 text-lg': size === 'lg',
                    },
                    className
                )}
                {...(props as any)}
            />
        );
    }
);
Button.displayName = 'Button';

export { Button, cn };
