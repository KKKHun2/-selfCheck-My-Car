'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const Home: React.FC = () => {
  const router = useRouter();

  const handleStart = () => {
    // 로컬 스토리지에서 정보 가져오기
    const info = localStorage.getItem('carInfo');

    if (!info) {
      // 정보가 없을 경우 입력 폼으로 이동
      router.push('/firstStep');
    } else {
      // 정보가 있을 경우 페이지로 이동
      router.push('/dashboard');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-500">
      <h1 className="text-4xl text-white mb-4">자동차 셀프점검!</h1>
      <button
        onClick={handleStart}
        className="bg-white text-blue-500 mt-4 py-10 px-24 rounded-full shadow-lg hover:bg-gray-300 transition"
      >
        <div className=' text-3xl '>
          시작하기
        </div>
      </button>
    </div>
  );
}

export default Home;
