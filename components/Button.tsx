// /components/Button.tsx
import React from 'react';

interface ButtonProps {
  description: string;
}

const Button: React.FC<ButtonProps> = ({ description }) => {
  return (
    <div className={`bg-custom-sblue text-white p-3 rounded-lg shadow-md mb-4 flex justify-between items-center w-[470px] h-[57px]`}>
      <div className="flex items-center space-x-4">
        <span 
          className="h-[39px] w-[56px] p-[10px] rounded-[10px_10px_10px_10px] bg-white text-custom-orange flex items-center justify-center"
        >
          New
        </span>
        <span className="text-sm px-[50px]">{description}</span>
      </div>
      <span className="px-3 py-1 text-s16">상담 완료</span>
    </div>
  );
};

export default Button;
