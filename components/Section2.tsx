'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { submitForm } from '@/actions/submitForm';

const Form: React.FC = () => {
  const [carName, setCarName] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [isAgreed, setIsAgreed] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');

  const validatePhone = (phone: string) => {
    const phoneRegex = /^010-\d{4}-\d{4}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validatePhone(phone)) {
      setPhoneError('Invalid phone format. Use 010-XXXX-XXXX.');
      return;
    }

    if (!isAgreed) {
      setPhoneError('You must agree to the privacy policy.');
      return;
    }

    setPhoneError('');

    try {
      const formData = new FormData();
      formData.append('carName', carName);
      formData.append('phone', phone);

      await submitForm(formData);
      setSuccessMessage('Form submitted successfully!');
    } catch (error) {
      setPhoneError('Form submission failed. Please try again.');
    }
  };

  return (
    <div className="w-full min-h-[43.75rem] px-4 md:px-[16.875rem] py-[4.5rem] flex flex-col gap-0 bg-gray-100">
      <div className="relative max-w-full w-full md:w-[56.25rem] h-[34.75rem] bg-white p-6 shadow-lg rounded-[1.875rem] border border-gray-300 overflow-hidden">
        
        <div
          className="absolute w-[18.5rem] h-[18.5rem] rounded-full bg-[#F864001A]"
          style={{ top: '17.375rem', left: '37.625rem' }}
        ></div>

        <div
          className="absolute w-[18.5rem] h-[18.5rem] rounded-full bg-[#F864001A]"
          style={{ top: '-4.1875rem', left: '44.375rem' }}
        ></div>

<Image
          src="/Man1.png"
          alt="Man standing with background ellipses"
          width={261}
          height={370}
          className="absolute"
          style={{ top: '187px', left: '550px' }}
        />

        <button
          onClick={handleSubmit}
          className="absolute w-full max-w-[21.9375rem] h-[2.5625rem] top-[27.6875rem] left-1/2 transform -translate-x-1/2 bg-custom-orange text-white px-[0.625rem] py-[0.5rem] rounded-[0.625rem] flex items-center justify-between shadow-md"
          aria-label="Click to learn more"
          disabled={!isAgreed || !carName || !phone}
          aria-disabled={!isAgreed || !carName || !phone}
        >
          <span className="text-[1.25rem] whitespace-nowrap">1초면 내가 최고가 되게 조작 click!</span>
          <Image src="/icon1.png" alt="Icon" width={1.5625} height={1.5625} />
        </button>

        <div className="absolute top-[4.3125rem] left-[3.125rem] w-full max-w-[35.96875rem] h-[25.9375rem] p-4 flex flex-col gap-4">
          <div className="absolute top-0 left-[4.25rem] w-full max-w-[17.125rem] h-[4.0625rem] flex flex-col items-left justify-left">
            <h1 className="text-custom-gray text-s30 font-bold whitespace-nowrap">중고차수출 무료 상담</h1>
            <p className="text-s16 text-custom-gray whitespace-nowrap">1:1 실시간 상담으로 쉽고 빠른 내차시세조회</p>
          </div>

          <form className="mt-[6.25rem] flex flex-col gap-7" onSubmit={handleSubmit}>
            <div className="flex items-center gap-7">
              <label htmlFor="carName" className="text-s20 font-medium text-custom-gray">차량명</label>
              <input 
                id="carName"
                type="text" 
                placeholder="차량명을 입력해주세요 예. K5" 
                className="block w-[22.5rem] h-[2.8125rem] border border-gray-300 rounded p-2"
                value={carName}
                onChange={(e) => setCarName(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-7">
              <label htmlFor="phone" className="text-s20 font-medium text-custom-gray">핸드폰</label>
              <input 
                id="phone"
                type="tel" 
                placeholder="010-XXXX-XXXX" 
                className="block w-[22.5rem] h-[2.8125rem] border border-gray-300 rounded p-2"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {phoneError && <p className="text-red-500">{phoneError}</p>}
            {successMessage && <p className="text-green-500">{successMessage}</p>}

            <div className="flex items-center gap-10 mt-4">
              <label>
                <input 
                  type="checkbox" 
                  className="accent-gray-500 h-4 w-4" 
                  checked={isAgreed}
                  onChange={() => setIsAgreed(!isAgreed)}
                /> 개인정보 수집/이용 동의
              </label>
              <p className='text-s16 text-custom-gray'>내용보기</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
