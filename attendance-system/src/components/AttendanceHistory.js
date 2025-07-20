import React from 'react';
import { Calendar } from 'lucide-react';
import { Card, Table, TableHeader, TableHeaderCell, TableBody, TableRow, TableCell } from './ui';

const AttendanceHistory = ({ attendanceHistory, isDarkMode }) => {
  return (
    <Card className="p-8" isDarkMode={isDarkMode}>
      <h2 className="text-xl font-bold mb-6 flex items-center">
        <Calendar className="h-5 w-5 mr-2 text-purple-500" />
        勤怠履歴
      </h2>
      <Table>
        <TableHeader isDarkMode={isDarkMode}>
          <TableHeaderCell>日付</TableHeaderCell>
          <TableHeaderCell>出勤時刻</TableHeaderCell>
          <TableHeaderCell>退勤時刻</TableHeaderCell>
          <TableHeaderCell>勤務時間</TableHeaderCell>
          <TableHeaderCell>休憩時間</TableHeaderCell>
        </TableHeader>
        <TableBody>
          {attendanceHistory.map((record, index) => (
            <TableRow key={index} isDarkMode={isDarkMode}>
              <TableCell>{record.date}</TableCell>
              <TableCell>{record.startTime}</TableCell>
              <TableCell>{record.endTime}</TableCell>
              <TableCell className={`font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                {record.workHours}
              </TableCell>
              <TableCell className={`font-medium ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`}>
                {record.breakTime}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default AttendanceHistory;