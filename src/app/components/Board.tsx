import React from 'react';
import Box from './Box';

const Board: React.FC = () => {
  const boxes = ['Box 1', 'Box 2', 'Box 3', 'Box 4'];

  return (
    <div className="flex p-10 flex-wrap justify-center items-center h-screen">
      {boxes.map((box, index) => (
        <Box key={index} text={box} />
      ))}
    </div>
  );
}

export default Board;
