import React from 'react';
import { TrendingUp } from 'lucide-react';
import { Card } from './ui';
import { StatCard } from './ui/Layout';

const AttendanceStats = ({ totalWorkTime, totalBreakTime, formatDuration, isDarkMode }) => {
  return (
    <Card className="p-8" isDarkMode={isDarkMode}>
      <h2 className="text-xl font-bold mb-6 flex items-center">
        <TrendingUp className="h-5 w-5 mr-2 text-blue-500" />
        今日の勤務状況
      </h2>
      <div className="space-y-4">
        <StatCard 
          title="勤務時間" 
          value={formatDuration(totalWorkTime)} 
          color="blue"
          isDarkMode={isDarkMode}
        />
        <StatCard 
          title="休憩時間" 
          value={formatDuration(totalBreakTime)} 
          color="orange"
          isDarkMode={isDarkMode}
        />
        <StatCard 
          title="実働時間" 
          value={formatDuration(Math.max(0, totalWorkTime - totalBreakTime))} 
          color="green"
          isDarkMode={isDarkMode}
        />
      </div>
    </Card>
  );
};

export default AttendanceStats;