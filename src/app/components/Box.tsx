import React from 'react';

interface BoxProps {
  text: string;
}

const Box: React.FC<BoxProps> = ({ text }) => {
  return (
    <div className="w-32 h-32 bg-white flex items-center justify-center m-4 border-2 border-red">
      {text}
    </div>
  );
}

export default Box;
