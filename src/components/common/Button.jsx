import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '', type = 'button' }) => {
    const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none";

    const variants = {
        primary: "bg-neon text-primary hover:bg-soft-neon hover:shadow-neon",
        outline: "border-2 border-neon text-neon hover:bg-neon/10 hover:shadow-neon",
        glow: "bg-transparent text-light border border-white/20 hover:border-neon hover:shadow-neon"
    };

    return (
        <button
            type={type}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
