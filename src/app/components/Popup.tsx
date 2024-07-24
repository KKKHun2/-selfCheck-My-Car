'use client';

import React, { useState } from 'react';
import { XMarkIcon, TrashIcon } from '@heroicons/react/24/solid';

interface PopupProps {
  item: { name: string, records: { part: string, date: string, price: string }[] };
  onClose: () => void;
  onSave: (record: { part: string, date: string, price: string }) => void;
}

const Popup: React.FC<PopupProps> = ({ item, onClose, onSave }) => {
  const [part, setPart] = useState('');
  const [date, setDate] = useState('');
  const [price, setPrice] = useState('');

  // 날짜순으로 정렬된 기록을 가져옵니다. 오래된 날짜가 먼저 오도록 정렬합니다.
  const sortedRecords = item.records.slice().sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const handleSave = () => {
    if (part && date && price) {
      onSave({ part, date, price });
      setPart('');
      setDate('');
      setPrice('');
    } else {
      alert('모든 필드를 입력해주세요.');
    }
  };

  const handleDeleteRecord = (record: { part: string, date: string, price: string }) => {
    const updatedRecords = item.records.filter(r => r !== record);
    const updatedItems = JSON.parse(localStorage.getItem('items') || '[]').map((i: any) =>
      i.name === item.name
        ? { ...i, records: updatedRecords, count: updatedRecords.length }
        : i
    );
    localStorage.setItem('items', JSON.stringify(updatedItems));
    window.location.reload(); // Refresh the page to reflect changes
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl h-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <h2 className="text-2xl mb-4 text-center">{item.name}</h2>

        {/* 점검 기록 */}
        <div className="mb-6">
          <h3 className="text-xl mb-2">점검 기록</h3>
          <ul>
            {sortedRecords.map((record, index) => (
              <li key={index} className="flex items-center justify-between py-2 px-4 border-b">
                <span>{index + 1}. {record.part} - {record.date} - {record.price}원</span>
                <button onClick={() => handleDeleteRecord(record)} className="text-red-500 hover:text-red-700">
                  <TrashIcon className="h-5 w-5" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* 추가 정보 입력 폼 */}
        <div>
          <div className="mb-4">
            <label className="block text-gray-700">부품 이름</label>
            <input
              type="text"
              value={part}
              onChange={(e) => setPart(e.target.value)}
              className="mt-1 w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">날짜</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">가격</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-1 w-full p-2 border rounded"
            />
          </div>
          <button
            onClick={handleSave}
            className="block mx-auto bg-blue-500 text-white py-2 px-4 rounded border border-blue-700 hover:bg-blue-600 transition"
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
