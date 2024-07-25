'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const FirstStep: React.FC = () => {
  const [nickname, setNickname] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [mileage, setMileage] = useState('');
  const [brand, setBrand] = useState('');
  const router = useRouter();

  const handleSave = () => {
    if (nickname && model && year && mileage) {
      const carInfo = {
        brand,
        nickname,
        model,
        year,
        mileage,
      };
      localStorage.setItem('carInfo', JSON.stringify(carInfo));
      router.push('/dashboard');
    } else {
      alert('모든 필드를 입력해주세요.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl mb-4">정보 입력</h2>
        <div className="mb-4">
          <label className="block text-gray-700">닉네임</label>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="mt-1 w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">차 브랜드</label>
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="mt-1 w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">차종</label>
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="mt-1 w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">연식</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="mt-1 w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">주행거리</label>
          <input
            type="number"
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
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
}

export default FirstStep;
