import React from 'react';

const Card = ({ children, className = '', isDarkMode, ...props }) => {
  const cardClasses = isDarkMode
    ? 'bg-gray-800 border-gray-700 text-white'
    : 'bg-white border-gray-200 text-gray-800';
    
  return (
    <div
      className={`rounded-2xl border shadow-lg ${cardClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
