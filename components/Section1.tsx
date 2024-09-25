import React from 'react';

const CustomBanner: React.FC = () => {
  return (
    <div className="w-full h-[26.625rem] sm:h-[18.75rem] md:h-[21.875rem] lg:h-[26.625rem] bg-cover bg-center flex items-center justify-center"
         style={{ backgroundImage: 'url(/banner.png)' }}>
      <div className="text-center p-4 mx-auto my-8 sm:my-4 lg:my-[9.0625rem] max-w-[90rem]">
        <h1 className="font-bold text-custom-gray text-s24 sm:text-s20 md:text-s28 lg:text-s36 leading-[2.685rem]">
          컨테이너, 언제, 서고가 상관없이
        </h1>
        <p className="mt-4 sm:mt-2 lg:mt-[0.5625rem] max-w-[51.5rem] font-bold text-s32 sm:text-s20 md:text-s40 lg:text-s48 leading-[3.58rem] text-custom-orange whitespace-nowrap">
          중고차 수출을 처음 300만원 비싸게 파세요
        </p>
      </div>
    </div>
  );
};

export default CustomBanner;
