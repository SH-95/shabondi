import React from 'react';
import { Clock, Moon, Sun } from 'lucide-react';
import { Button } from './ui';
import { GradientText } from './ui/Layout';

const Header = ({ title, subtitle, isDarkMode, toggleDarkMode, className = '' }) => (
  <div className={`flex justify-between items-center mb-8 ${className}`}>
    <div className="flex items-center space-x-3">
      <Clock className="h-8 w-8 text-blue-500" />
      <div>
        <h1 className="text-3xl font-bold">
          <GradientText>{title}</GradientText>
        </h1>
        {subtitle && <p className="text-gray-600 dark:text-gray-400 mt-1">{subtitle}</p>}
      </div>
    </div>
    <Button
      onClick={toggleDarkMode}
      variant="secondary"
      size="sm"
    >
      {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  </div>
);

export default Header;