'use client';

import React, { useState } from 'react';

interface YearlyReportPopupProps {
  onClose: () => void;
  records: { part: string, date: string, laborCost: string, partsCost: string, totalCost: string }[];
}

const YearlyReportPopup: React.FC<YearlyReportPopupProps> = ({ onClose, records }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;

  const currentYear = new Date().getFullYear();
  const filteredRecords = records.filter(record => new Date(record.date).getFullYear() === currentYear);

  // 최신 항목이 앞에 오도록 역순으로 정렬
  const sortedRecords = [...filteredRecords].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // 총합 계산할 때 숫자로 변환
  const totalSum = sortedRecords.reduce((sum, record) => sum + parseFloat(record.totalCost.replace(/,/g, '')), 0);

  const totalPages = Math.ceil(sortedRecords.length / recordsPerPage);

  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;
  const paginatedRecords = sortedRecords.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h2 className="text-xl mb-4">{currentYear}년 점검 내역</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          {paginatedRecords.map((record, index) => (
            <div key={index} className="border rounded p-2 shadow-sm">
              <p className='text-sm'><strong >날짜:</strong> {record.date}</p>
              <p className='text-sm'><strong>부품:</strong> {record.part}</p>
              <p className='text-sm'><strong>공임비:</strong> {record.laborCost} 원</p>
              <p className='text-sm'><strong>부품비:</strong> {record.partsCost} 원</p>
              <p className='text-sm'><strong>총합:</strong> {record.totalCost} 원</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            이전
          </button>
          <div>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 mx-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} rounded hover:bg-gray-300`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            다음
          </button>
        </div>
        <div className="font-bold text-xl justify-center mt-4">
          <p>총합: {totalSum.toLocaleString()} 원</p>
        </div>
      </div>
    </div>
  );
};

export default YearlyReportPopup;
