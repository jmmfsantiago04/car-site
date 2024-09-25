import React from 'react';
import miniBanner from '/public/miniBanner.png';

const Section4: React.FC = () => {
  return (
    <div className="relative top-[5.625rem] left-[24.6875rem] bottom-[9rem]">
      <div className="absolute w-[40.625rem] h-[22.8125rem] rounded-[1.875rem] overflow-hidden">
        <div 
          className="absolute w-full h-full bg-cover bg-center opacity-70"
          style={{
            backgroundImage: `url(${miniBanner})`,
          }}
        >
        </div>

        
        <div className="relative flex flex-col items-center justify-start w-full h-full">
          
          <h1 className="text-custom-orange text-[2.8125rem] mx-[9.375rem] font-bold mt-[1.6875rem] whitespace-nowrap">
            내 차 비싸게 팔땐?
          </h1>

          
          <h2 className="text-custom-gray text-[2.8125rem] mx-[7.875rem] mt-[4.375rem] mb-[2.8125rem] whitespace-nowrap">
            중고차매매상사, 폐차
          </h2>
            
            <h3 className="text-custom-orange text-[2.8125rem] font-bold whitespace-nowrap mx-[0.5625rem]"> 
              K중고차수출에서 비싸게 팔자
            </h3> 
          </div>
        </div>
      </div>
  );
};

export default Section4;
