import React from 'react';

const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-gray-100 text-gray-600 border-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600',
    success: 'bg-green-300 text-green-700 border-green-200 dark:bg-green-900 dark:text-green-300 dark:border-green-700',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900 dark:text-yellow-300 dark:border-yellow-700',
    danger: 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900 dark:text-red-300 dark:border-red-700'
  };
  
  return (
    <div className={`px-4 py-2 rounded-full text-sm font-medium border-2 ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Badge;