'use client';

import React, { useState } from 'react';
import { XMarkIcon, TrashIcon } from '@heroicons/react/24/solid';

interface PopupProps {
  item: { name: string; records: { part: string; date: string; laborCost: string; partsCost: string; totalCost: string }[] };
  onClose: () => void;
  onSave: (record: { part: string; date: string; laborCost: string; partsCost: string; totalCost: string }) => void;
  onDelete: () => void;
}

const Popup: React.FC<PopupProps> = ({ item, onClose, onSave, onDelete }) => {
  const [newRecord, setNewRecord] = useState({ part: '', date: '', laborCost: '', partsCost: '', totalCost: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewRecord({ ...newRecord, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave(newRecord);
    setNewRecord({ part: '', date: '', laborCost: '', partsCost: '', totalCost: '' });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
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
            <TrashIcon className="h-6 w-6 " />
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">부품명</label>
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
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded"
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white py-2 px-4 rounded border hover:bg-blue-600 transition"
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
