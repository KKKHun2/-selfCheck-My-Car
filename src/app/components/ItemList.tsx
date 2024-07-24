'use client';

import React, { useState } from 'react';
import Item from './Item';
import Popup from './Popup';

const ItemList: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  }

  const handleClosePopup = () => {
    setSelectedItem(null);
  }

  return (
    <div className="flex flex-wrap justify-center mt-4">
      {items.map((item) => (
        <Item key={item} name={item} onClick={() => handleItemClick(item)} />
      ))}
      {selectedItem && (
        <Popup content={selectedItem} onClose={handleClosePopup} />
      )}
    </div>
  );
}

export default ItemList;
