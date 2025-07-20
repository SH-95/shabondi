import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  // 메인 앱만 import

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  {/* App 컴포넌트만 렌더링 */}
  </React.StrictMode>
);