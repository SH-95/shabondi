import React, { useState } from 'react';
import { Users, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const AttendanceDashboard = () => {
  // 더미 사용자 데이터
  const [users] = useState([
    { id: 1, name: '김철수', department: '개발팀', position: '프론트엔드' },
    { id: 2, name: '이영희', department: '개발팀', position: '백엔드' },
    { id: 3, name: '박민수', department: '디자인팀', position: 'UI/UX' },
    { id: 4, name: '최지은', department: '기획팀', position: '프로덕트 매니저' },
    { id: 5, name: '정호진', department: '개발팀', position: '풀스택' },
    { id: 6, name: '윤서연', department: '마케팅팀', position: '마케터' },
    { id: 7, name: '강동현', department: '개발팀', position: '데브옵스' },
    { id: 8, name: '송하늘', department: '디자인팀', position: '그래픽 디자이너' }
  ]);

  // 출석 상태 데이터
  const [attendance, setAttendance] = useState([
    { userId: 1, status: 'present', checkInTime: '09:00', checkOutTime: null },
    { userId: 2, status: 'present', checkInTime: '08:45', checkOutTime: null },
    { userId: 3, status: 'late', checkInTime: '09:30', checkOutTime: null },
    { userId: 4, status: 'present', checkInTime: '08:55', checkOutTime: null },
    { userId: 5, status: 'absent', checkInTime: null, checkOutTime: null },
    { userId: 7, status: 'present', checkInTime: '09:10', checkOutTime: null }
  ]);

  // 출석 체크 함수
  const handleCheckIn = (userId) => {
    const currentTime = new Date().toLocaleTimeString('ko-KR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
    
    setAttendance(prev => {
      const existing = prev.find(a => a.userId === userId);
      if (existing) {
        return prev.map(a => 
          a.userId === userId 
            ? { ...a, status: 'present', checkInTime: currentTime }
            : a
        );
      } else {
        return [...prev, { 
          userId, 
          status: 'present', 
          checkInTime: currentTime, 
          checkOutTime: null 
        }];
      }
    });
  };

  // 퇴근 체크 함수
  const handleCheckOut = (userId) => {
    const currentTime = new Date().toLocaleTimeString('ko-KR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
    
    setAttendance(prev => 
      prev.map(a => 
        a.userId === userId 
          ? { ...a, checkOutTime: currentTime }
          : a
      )
    );
  };

  // 사용자별 출석 정보 가져오기
  const getUserAttendance = (userId) => {
    return attendance.find(a => a.userId === userId);
  };

  // 출석 상태별 카운트
  const presentCount = attendance.filter(a => a.status === 'present').length;
  const lateCount = attendance.filter(a => a.status === 'late').length;
  const absentCount = users.length - attendance.length;

  // 상태별 스타일
  const getStatusStyle = (status) => {
    switch (status) {
      case 'present':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'late':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'absent':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // 상태별 아이콘
  const getStatusIcon = (status) => {
    switch (status) {
      case 'present':
        return <CheckCircle className="w-4 h-4" />;
      case 'late':
        return <AlertCircle className="w-4 h-4" />;
      case 'absent':
        return <XCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* 헤더 */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">출석 관리 시스템</h1>
        <p className="text-gray-600">오늘 날짜: {new Date().toLocaleDateString('ko-KR')}</p>
      </div>

      {/* 통계 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center">
            <Users className="w-8 h-8 text-blue-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">총 직원</p>
              <p className="text-2xl font-bold text-gray-900">{users.length}명</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center">
            <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">출근</p>
              <p className="text-2xl font-bold text-green-600">{presentCount}명</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center">
            <AlertCircle className="w-8 h-8 text-yellow-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">지각</p>
              <p className="text-2xl font-bold text-yellow-600">{lateCount}명</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center">
            <XCircle className="w-8 h-8 text-red-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">결석</p>
              <p className="text-2xl font-bold text-red-600">{absentCount}명</p>
            </div>
          </div>
        </div>
      </div>

      {/* 직원 목록 */}
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b">
          <h2 className="text-xl font-semibold text-gray-900">직원 출석 현황</h2>
        </div>

        <div className="divide-y divide-gray-200">
          {users.map(user => {
            const userAttendance = getUserAttendance(user.id);
            const status = userAttendance?.status || 'absent';
            
            return (
              <div key={user.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {user.name.charAt(0)}
                      </span>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{user.name}</h3>
                      <p className="text-sm text-gray-500">{user.department} • {user.position}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    {/* 출석 상태 */}
                    <div className={`px-3 py-1 rounded-full border flex items-center space-x-1 ${getStatusStyle(status)}`}>
                      {getStatusIcon(status)}
                      <span className="text-sm font-medium">
                        {status === 'present' ? '출근' : 
                         status === 'late' ? '지각' : '결석'}
                      </span>
                    </div>

                    {/* 시간 정보 */}
                    {userAttendance?.checkInTime && (
                      <div className="text-sm text-gray-600">
                        출근: {userAttendance.checkInTime}
                        {userAttendance.checkOutTime && (
                          <span className="ml-2">퇴근: {userAttendance.checkOutTime}</span>
                        )}
                      </div>
                    )}

                    {/* 버튼들 */}
                    <div className="flex space-x-2">
                      {!userAttendance || status === 'absent' ? (
                        <button
                          onClick={() => handleCheckIn(user.id)}
                          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                        >
                          출근 체크
                        </button>
                      ) : (
                        <>
                          {status !== 'absent' && !userAttendance.checkOutTime && (
                            <button
                              onClick={() => handleCheckOut(user.id)}
                              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm"
                            >
                              퇴근 체크
                            </button>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AttendanceDashboard;