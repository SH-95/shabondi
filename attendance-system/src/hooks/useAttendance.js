import { useState, useEffect } from 'react';

const useAttendance = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isWorking, setIsWorking] = useState(false);
  const [workStartTime, setWorkStartTime] = useState(null);
  const [totalWorkTime, setTotalWorkTime] = useState(0);
  const [breakStartTime, setBreakStartTime] = useState(null);
  const [isOnBreak, setIsOnBreak] = useState(false);
  const [totalBreakTime, setTotalBreakTime] = useState(0);
  const [attendanceHistory, setAttendanceHistory] = useState([
    { date: '2024-07-18', startTime: '09:00', endTime: '18:00', workHours: '8時間', breakTime: '1時間' },
    { date: '2024-07-17', startTime: '09:15', endTime: '18:30', workHours: '8時間15分', breakTime: '1時間' },
    { date: '2024-07-16', startTime: '08:45', endTime: '17:45', workHours: '8時間', breakTime: '1時間' },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      
      if (isWorking && workStartTime) {
        const workTime = Math.floor((new Date() - workStartTime) / 1000);
        setTotalWorkTime(workTime - totalBreakTime);
      }
      
      if (isOnBreak && breakStartTime) {
        const breakTime = Math.floor((new Date() - breakStartTime) / 1000);
        setTotalBreakTime(prev => prev + 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isWorking, workStartTime, isOnBreak, breakStartTime, totalBreakTime]);

  const formatDuration = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}時間${minutes}分`;
  };

  const handleStartWork = () => {
    setIsWorking(true);
    setWorkStartTime(new Date());
    setTotalWorkTime(0);
    setTotalBreakTime(0);
  };

  const handleEndWork = () => {
    if (isOnBreak) {
      setIsOnBreak(false);
      setBreakStartTime(null);
    }
    setIsWorking(false);
    
    // 履歴に追加
    const today = new Date().toLocaleDateString('ja-JP');
    const newRecord = {
      date: today,
      startTime: workStartTime.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' }),
      endTime: new Date().toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' }),
      workHours: formatDuration(totalWorkTime),
      breakTime: formatDuration(totalBreakTime)
    };
    setAttendanceHistory(prev => [newRecord, ...prev.slice(0, 4)]);
    
    setWorkStartTime(null);
  };

  const handleStartBreak = () => {
    setIsOnBreak(true);
    setBreakStartTime(new Date());
  };

  const handleEndBreak = () => {
    setIsOnBreak(false);
    setBreakStartTime(null);
  };

  return {
    // State
    currentTime,
    isWorking,
    isOnBreak,
    totalWorkTime,
    totalBreakTime,
    attendanceHistory,
    
    // Actions
    handleStartWork,
    handleEndWork,
    handleStartBreak,
    handleEndBreak,
    formatDuration
  };
};

export default useAttendance;