import React from 'react';
import { Clock, Moon, Sun, Timer, Users } from 'lucide-react';
import { Button } from './ui';
import { GradientText } from './ui/Layout';

const Header = ({ 
  title, 
  subtitle, 
  isDarkMode, 
  toggleDarkMode, 
  currentView = 'timer', 
  setCurrentView = () => {}, 
  className = '' 
}) => (
  <div className={`mb-8 ${className}`}>
    {/* 기존 헤더 */}
    <div className="flex justify-between items-center mb-6">
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

    {/* 새로운 탭 메뉴 */}
    <div className="flex space-x-2">
      <button
        onClick={() => setCurrentView("timer")}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
          currentView === "timer"
            ? "bg-blue-500 text-white shadow-lg"
            : isDarkMode
            ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
            : "bg-white text-gray-700 hover:bg-gray-50 shadow-sm"
        }`}
      >
        <Timer className="w-4 h-4" />
        <span>개인 출근 관리</span>
      </button>
      
      <button
        onClick={() => setCurrentView("dashboard")}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
          currentView === "dashboard"
            ? "bg-blue-500 text-white shadow-lg"
            : isDarkMode
            ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
            : "bg-white text-gray-700 hover:bg-gray-50 shadow-sm"
        }`}
      >
        <Users className="w-4 h-4" />
        <span>전체 출결 관리</span>
      </button>
    </div>
  </div>
);

export default Header;