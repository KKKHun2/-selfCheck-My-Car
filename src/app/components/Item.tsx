'use client';

import React from 'react';

interface ItemProps {
  name: string;
  count: number;
  onClick: () => void;
}

const Item: React.FC<ItemProps> = ({ name, count, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-40 h-40 bg-gray-200 flex flex-col items-center justify-center m-2 p-2 cursor-pointer hover:bg-gray-300 rounded-lg"
    >
      <p className="text-sm font-bold">{name}</p>
      <p className="text-sm text-gray-700">{count} 회</p>
    </div>
  );
}

export default Item;
