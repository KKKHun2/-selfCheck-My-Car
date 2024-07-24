'use client';

import React from 'react';

interface ItemProps {
  name: string;
  onClick: () => void;
}

const Item: React.FC<ItemProps> = ({ name, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-40 h-40 bg-gray-200 flex items-center justify-center m-2 cursor-pointer hover:bg-gray-300 rounded-lg"
    >
      {name}
    </div>
  );
}

export default Item;
