import React, { useState } from 'react';
import { Menu } from 'antd';
import DraggableMenuItem from './DraggableMenuItem';


const YourMenuComponent = () => {
  const [items, setItems] = useState([
    { key: '1', label: 'Item 1' },
    { key: '2', label: 'Item 2' },
    { key: '3', label: 'Item 3' },
    { key: '4', label: 'Item 4' },
  ]);

  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (key) => {
    setSelectedItems((prev) =>
      prev.includes(key) ? prev.filter(item => item !== key) : [...prev, key]
    );
  };

  const moveItem = (fromIndex, toIndex) => {
    const updatedItems = [...items];
    const movedItems = updatedItems.splice(fromIndex, selectedItems.length);
    updatedItems.splice(toIndex, 0, ...movedItems);
    setItems(updatedItems);
  };

  return (
    <Menu mode="inline">
      {items.map((item, index) => (
        <DraggableMenuItem
          key={item.key}
          item={item}
          index={index}
          moveItem={moveItem}
          selectedItems={selectedItems}
          onSelect={handleSelect}
        />
      ))}
    </Menu>
  );
};

export default YourMenuComponent;
