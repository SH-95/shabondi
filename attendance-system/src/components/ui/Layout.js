import React from 'react';

export const Container = ({ children, className = '' }) => (
  <div className={`container mx-auto px-4 py-8 ${className}`}>
    {children}
  </div>
);

export const Grid = ({ children, cols = 1, gap = 8, className = '' }) => {
  const colClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 lg:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };
  
  const gapClasses = {
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8'
  };
  
  return (
    <div className={`grid ${colClasses[cols]} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
};

export const GradientText = ({ children, className = '' }) => (
  <span className={`bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${className}`}>
    {children}
  </span>
);

export const StatCard = ({ title, value, icon: Icon, color = 'blue', isDarkMode }) => {
  const colorClasses = {
    blue: isDarkMode 
      ? 'from-blue-600/30 via-blue-500/20 to-cyan-600/30 text-blue-300 border border-blue-500/30 shadow-lg shadow-blue-500/20'
      : 'from-blue-50 to-blue-100 text-blue-600',
    orange: isDarkMode
      ? 'from-orange-600/30 via-amber-500/20 to-orange-600/30 text-orange-300 border border-orange-500/30 shadow-lg shadow-orange-500/20'
      : 'from-orange-50 to-orange-100 text-orange-600',
    green: isDarkMode
      ? 'from-green-600/30 via-emerald-500/20 to-teal-600/30 text-green-300 border border-green-500/30 shadow-lg shadow-green-500/20'
      : 'from-green-50 to-green-100 text-green-600',
    purple: isDarkMode
      ? 'from-purple-600/30 via-violet-500/20 to-indigo-600/30 text-purple-300 border border-purple-500/30 shadow-lg shadow-purple-500/20'
      : 'from-purple-50 to-purple-100 text-purple-600'
  };
  
  const valueColorClasses = {
    blue: isDarkMode ? 'text-cyan-300' : 'text-blue-600',
    orange: isDarkMode ? 'text-amber-300' : 'text-orange-600',
    green: isDarkMode ? 'text-emerald-300' : 'text-green-600',
    purple: isDarkMode ? 'text-violet-300' : 'text-purple-600'
  };
  
  return (
    <div className={`flex justify-between items-center p-4 bg-gradient-to-r ${colorClasses[color]} rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105`}>
      <div className="flex items-center space-x-2">
        {Icon && <Icon className="h-5 w-5" />}
        <span className="font-medium">{title}</span>
      </div>
      <span className={`text-xl font-bold ${valueColorClasses[color]}`}>
        {value}
      </span>
    </div>
  );
};