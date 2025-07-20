/**
 * 시간 포맷팅 유틸리티 함수들
 */

// 시간을 HH:MM:SS 형식으로 포맷
export const formatTime = (date) => {
  return date.toLocaleTimeString('ja-JP', { 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  });
};

// 초를 시간:분 형식으로 변환
export const formatDuration = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours}時間${minutes}分`;
};

// 초를 시간:분:초 형식으로 변환
export const formatDurationWithSeconds = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

// 날짜를 YYYY-MM-DD 형식으로 포맷
export const formatDate = (date) => {
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).replace(/\//g, '-');
};

// 날짜를 긴 형식으로 포맷 (예: 2024年7月20日 日曜日)
export const formatLongDate = (date) => {
  return date.toLocaleDateString('ja-JP', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    weekday: 'long'
  });
};

// 시간 차이를 계산 (밀리초 단위)
export const getTimeDifference = (startTime, endTime = new Date()) => {
  return Math.floor((endTime - startTime) / 1000);
};

// 근무 시간이 유효한지 확인
export const isValidWorkTime = (startTime, endTime) => {
  return startTime && endTime && endTime > startTime;
};

// 월별 근무 통계 계산
export const calculateMonthlyStats = (records) => {
  return records.reduce((acc, record) => {
    const workSeconds = parseTimeString(record.workHours);
    const breakSeconds = parseTimeString(record.breakTime);
    
    acc.totalWorkTime += workSeconds;
    acc.totalBreakTime += breakSeconds;
    acc.totalActualWorkTime += (workSeconds - breakSeconds);
    acc.workDays += 1;
    
    return acc;
  }, {
    totalWorkTime: 0,
    totalBreakTime: 0,
    totalActualWorkTime: 0,
    workDays: 0
  });
};

// "8時間30分" 형식의 문자열을 초로 변환
const parseTimeString = (timeString) => {
  const hourMatch = timeString.match(/(\d+)時間/);
  const minuteMatch = timeString.match(/(\d+)分/);
  
  const hours = hourMatch ? parseInt(hourMatch[1]) : 0;
  const minutes = minuteMatch ? parseInt(minuteMatch[1]) : 0;
  
  return hours * 3600 + minutes * 60;
};

// 주간 평균 근무시간 계산
export const calculateWeeklyAverage = (records) => {
  if (records.length === 0) return 0;
  
  const totalSeconds = records.reduce((acc, record) => {
    return acc + parseTimeString(record.workHours);
  }, 0);
  
  return totalSeconds / records.length;
};

// 특정 날짜 범위의 기록 필터링
export const filterRecordsByDateRange = (records, startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  return records.filter(record => {
    const recordDate = new Date(record.date);
    return recordDate >= start && recordDate <= end;
  });
};

// 초과 근무 시간 계산 (8시간 기준)
export const calculateOvertimeHours = (workTimeInSeconds, standardHours = 8) => {
  const standardSeconds = standardHours * 3600;
  return Math.max(0, workTimeInSeconds - standardSeconds);
};