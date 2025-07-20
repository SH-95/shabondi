import React, { useState } from "react";
import { Container, Grid } from "./components/ui/Layout";
import Header from "./components/Header";
import AttendanceTimer from "./components/AttendanceTimer";
import AttendanceStats from "./components/AttendanceStats";
import AttendanceHistory from "./components/AttendanceHistory";
import useAttendance from "./hooks/useAttendance";
import { formatTime } from "./utils/timeUtils";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const {
    currentTime,
    isWorking,
    isOnBreak,
    totalWorkTime,
    totalBreakTime,
    attendanceHistory,
    handleStartWork,
    handleEndWork,
    handleStartBreak,
    handleEndBreak,
    formatDuration,
  } = useAttendance();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        isDarkMode
          ? "bg-gray-900 text-white dark"
          : "bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800"
      }`}
    >
      <Container>
        <Header
          title="勤怠管理システム"
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <Grid cols={2} className="mb-8">
          <AttendanceTimer
            currentTime={currentTime}
            isWorking={isWorking}
            isOnBreak={isOnBreak}
            formatTime={formatTime}
            onStartWork={handleStartWork}
            onEndWork={handleEndWork}
            onStartBreak={handleStartBreak}
            onEndBreak={handleEndBreak}
            isDarkMode={isDarkMode}
          />

          <AttendanceStats
            totalWorkTime={totalWorkTime}
            totalBreakTime={totalBreakTime}
            formatDuration={formatDuration}
            isDarkMode={isDarkMode}
          />
        </Grid>

        <AttendanceHistory
          attendanceHistory={attendanceHistory}
          isDarkMode={isDarkMode}
        />
      </Container>
    </div>
  );
};

export default App;
