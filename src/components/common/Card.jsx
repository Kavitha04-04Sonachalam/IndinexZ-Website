import React from 'react';

const Card = ({ children, className = '' }) => {
    return (
        <div className={`glass-card p-6 rounded-xl hover:border-neon/50 transition-colors duration-300 ${className}`}>
            {children}
        </div>
    );
};

export default Card;
