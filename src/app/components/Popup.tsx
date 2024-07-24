'use client';

import React from 'react';

interface PopupProps {
  content: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ content, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-1/2 h-2/3">
        <button
          onClick={onClose}
          className="absolute top-5 right-6 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <div>{content}</div>
      </div>
    </div>
  );
}

export default Popup;
