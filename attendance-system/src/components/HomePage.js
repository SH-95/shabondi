import React, { useState } from 'react';
import { Users, Clock, CheckCircle, XCircle, AlertCircle, Calendar, BarChart3, Settings, Home, ArrowRight } from 'lucide-react';

// 메인 홈 화면 컴포넌트
const HomePage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto p-8">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            회사 관리 시스템
          </h1>
          <p className="text-xl text-gray-600">
            효율적인 업무 관리를 위한 통합 솔루션
          </p>
        </div>

        {/* 메인 기능 카드들 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 출결 관리 카드 */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">출결 관리</h3>
                  <p className="text-gray-600">직원 출석 현황 관리</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                실시간 출석 체크, 지각/결석 관리, 출석률 통계를 한눈에 확인하고 관리할 수 있습니다.
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex space-x-4 text-sm text-gray-500">
                  <span>• 실시간 체크</span>
                  <span>• 통계 분석</span>
                </div>
                <button
                  onClick={() => onNavigate('attendance')}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2 group"
                >
                  <span>시작하기</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* 통계 분석 카드 (미구현) */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group opacity-75">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">통계 분석</h3>
                  <p className="text-gray-600">데이터 시각화</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                출석률, 부서별 현황, 월별 트렌드 등 다양한 통계를 차트로 확인할 수 있습니다.
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex space-x-4 text-sm text-gray-500">
                  <span>• 차트 분석</span>
                  <span>• 리포트</span>
                </div>
                <button
                  disabled
                  className="bg-gray-300 text-gray-500 px-6 py-3 rounded-lg font-medium cursor-not-allowed flex items-center space-x-2"
                >
                  <span>준비중</span>
                </button>
              </div>
            </div>
          </div>

          {/* 설정 카드 (미구현) */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group opacity-75">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">시스템 설정</h3>
                  <p className="text-gray-600">사용자 및 권한 관리</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                사용자 등록, 권한 설정, 시스템 환경 설정 등을 관리할 수 있습니다.
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex space-x-4 text-sm text-gray-500">
                  <span>• 사용자 관리</span>
                  <span>• 권한 설정</span>
                </div>
                <button
                  disabled
                  className="bg-gray-300 text-gray-500 px-6 py-3 rounded-lg font-medium cursor-not-allowed flex items-center space-x-2"
                >
                  <span>준비중</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 정보 */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-sm p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              효율적인 업무 관리의 시작
            </h3>
            <p className="text-gray-600 leading-relaxed">
              직원들의 출석 관리부터 업무 효율성 분석까지, 
              모든 것을 하나의 플랫폼에서 관리하세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// 출결 관리 시스템 컴포넌트
const AttendanceDashboard = ({ onNavigate }) => {
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
      {/* 네비게이션 바 */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>홈으로</span>
          </button>
          <span className="text-gray-300">/</span>
          <span className="text-gray-600">출결 관리</span>
        </div>
      </div>

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

// 메인 앱 컴포넌트
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
      {currentPage === 'attendance' && <AttendanceDashboard onNavigate={handleNavigate} />}
    </div>
  );
};

export default App;