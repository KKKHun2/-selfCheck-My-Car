'use client';

import React, { useState } from 'react';

interface AddItemPopupProps {
  onClose: () => void;
  onSave: (newItem: { name: string }) => void;
}

const AddItemPopup: React.FC<AddItemPopupProps> = ({ onClose, onSave }) => {
  const [name, setName] = useState('');

  const handleSave = () => {
    if (name) {
      onSave({ name });
      setName('');
    } else {
      alert('아이템 이름을 입력해주세요.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <button
          onClick={onClose}
          className="absolute top-5 right-6 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h2 className="text-2xl mb-4">아이템 추가</h2>
        <div className="mb-4">
          <label className="block text-gray-700">아이템 이름</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full p-2 border rounded"
          />
        </div>
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition"
        >
          저장
        </button>
      </div>
    </div>
  );
};

export default AddItemPopup;
