import React from 'react';

export const Table = ({ children, className = '' }) => (
  <div className="overflow-x-auto">
    <table className={`w-full ${className}`}>
      {children}
    </table>
  </div>
);

export const TableHeader = ({ children, isDarkMode }) => (
  <thead>
    <tr className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      {children}
    </tr>
  </thead>
);

export const TableHeaderCell = ({ children, className = '' }) => (
  <th className={`text-left py-3 px-4 font-medium ${className}`}>
    {children}
  </th>
);

export const TableBody = ({ children }) => (
  <tbody>{children}</tbody>
);

export const TableRow = ({ children, className = '', isDarkMode }) => (
  <tr className={`border-b transition-colors ${
    isDarkMode 
      ? 'border-gray-700 hover:bg-gray-700' 
      : 'border-gray-100 hover:bg-gray-50'
  } ${className}`}>
    {children}
  </tr>
);

export const TableCell = ({ children, className = '' }) => (
  <td className={`py-3 px-4 ${className}`}>
    {children}
  </td>
);