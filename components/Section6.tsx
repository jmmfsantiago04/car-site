import React from 'react';

const Section6: React.FC = () => {
  const backgroundImageUrl = '/Vector.png';

  return (
    <div className="w-[54.8125rem] h-[77.5625rem] bg-white rounded-[1.875rem] mx-auto mt-[8.25rem] shadow-xl p-10 flex flex-col items-center justify-around relative overflow-hidden">
      <h1 className="w-[39.25rem] h-[3.75rem] absolute top-[2.875rem] text-center text-[2.5rem] text-custom-orange font-bold">
        왜! 중고차 수수료를 해야 할까요?
      </h1>

      <div className="w-[43.75rem] border-t-[0.3125rem] border-custom-gray absolute top-[7.25rem]" />

      <p className="w-[29.75rem] absolute top-[9.1875rem] text-base leading-6 text-gray-700">
        국내에서 사용된 차량을 해외 시장으로 수출하여 판매하는<br />
        방식은, 국내 중고차 시장에서 거래되는 가격보다 더 높은<br />
        수익을 기대할 수 있는 효과적인 중고차 매매 방식이다.
      </p>

      <img
        src="/Man2.png"
        alt="A man depicting car sales"
        className="w-[27.625rem] h-[27.9375rem] absolute top-[15.375rem]"
      />

      <div
        className="absolute top-[26.0625rem] left-[-1.375rem] w-[61.65625rem] h-[55.96875rem] bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      />

      <ol className="text-lg absolute top-[43.75rem] list-decimal list-inside">
        <li className="list-item-style mb-4 text-s30 whitespace-nowrap">
          1. 업계의 오랜이어도 국내 대비 경쟁력이 크지 않음
        </li>
        <li className="list-item-style mb-4 mt-14 text-s30">
          2. 주변업계가 많아도 친절한 직원
        </li>
        <li className="list-item-style mb-4 mt-14 text-s30">
          3. 새 시리즈에 있는 자본금 간접원인 적음
        </li>
        <li className="list-item-style mb-4 mt-14 text-[1.65625rem] whitespace-nowrap">
          4. 피치카카닷넷 50만 원에서 300만 원까지 더 받을 수 있음
        </li>
      </ol>
    </div>
  );
};

export default Section6;
