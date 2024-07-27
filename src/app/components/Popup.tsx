'use client';

import React, { useState } from 'react';
import { XMarkIcon, TrashIcon } from '@heroicons/react/24/solid';

interface Record {
  part: string;
  date: string;
  laborCost: string;
  partsCost: string;
  totalCost: string;
}

interface PopupProps {
  item: { name: string; records: Record[] };
  onClose: () => void;
  onSave: (record: Record) => void;
  onDelete: () => void;
}

const Popup: React.FC<PopupProps> = ({ item, onClose, onSave, onDelete }) => {
  const [newRecord, setNewRecord] = useState<Record>({ part: '', date: '', laborCost: '', partsCost: '', totalCost: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let updatedRecord = { ...newRecord, [name]: value };

    // Calculate totalCost if laborCost and partsCost are valid numbers
    if (name === 'laborCost' || name === 'partsCost') {
      const laborCost = parseFloat(updatedRecord.laborCost) || 0;
      const partsCost = parseFloat(updatedRecord.partsCost) || 0;
      updatedRecord.totalCost = String(laborCost + partsCost);
    }

    setNewRecord(updatedRecord);
  };

  const handleSave = () => {
    onSave(newRecord);
    setNewRecord({ part: '', date: '', laborCost: '', partsCost: '', totalCost: '' });
  };

  const handleDeleteRecord = (recordToDelete: Record) => {
    const updatedRecords = item.records.filter(record => record !== recordToDelete);
    item.records = updatedRecords;
    // Save updated records to localStorage or wherever necessary
    localStorage.setItem('items', JSON.stringify(updatedRecords));
    onClose();
  };

  const sortedRecords = (item.records || []).slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md max-h-[85vh] overflow-auto ">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl flex-grow text-center ml-6">{item.name}</h2>
          <button
            onClick={onDelete}
            className="text-red-500 hover:text-red-700 mr-6"
          >
            <TrashIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="mb-6">
          <h3 className="text-xl mb-2">점검 기록</h3>
          <ul>
            {sortedRecords.map((record, index) => (
              <li key={index} className="flex flex-col items-start justify-center py-2 border-b">
                <div className="flex items-center">{index + 1}. {record.part} - {record.date}
                  <button onClick={() => handleDeleteRecord(record)} className="text-red-500 hover:text-red-700">
                    <TrashIcon className="h-5 w-5 ml-2" />
                  </button>
                </div>
                <div>공임비: {record.laborCost}원 - 부품비: {record.partsCost}원 </div>
                <div>총가격: {record.totalCost}원</div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <label className="block text-gray-700">점검 사항</label>
          <input
            type="text"
            name="part"
            value={newRecord.part}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">날짜</label>
          <input
            type="date"
            name="date"
            value={newRecord.date}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">공임비</label>
          <input
            type="text"
            name="laborCost"
            value={newRecord.laborCost}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">부품비</label>
          <input
            type="text"
            name="partsCost"
            value={newRecord.partsCost}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">총 가격</label>
          <input
            type="text"
            name="totalCost"
            value={newRecord.totalCost}
            className="mt-1 w-full p-2 border rounded"
            readOnly
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white py-2 w-full rounded border hover:bg-blue-600 transition"
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
