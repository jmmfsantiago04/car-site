import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';

const Section3: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const buttonData = [
    { description: "Kia K8 2021년식 상담..." },
    { description: "G80 2016년식 상담..." },
    { description: "카니발 2020년식 상담..." },
    { description: "티볼리 2015년식 상담..." },
    { description: "레이 2019년식 상담..." },
    { description: "그랜저 IG 6 2016년식 상담..." },
    { description: "아우디 A6 2018년식 상담..." },
    { description: "토레스 2022년식 상담..." },
  ];

  const totalButtons = buttonData.length;
  const visibleCount = 5;
  const transitionDuration = 500; // 500ms transition for the scroll effect
  const intervalDuration = 3000; // 3 seconds interval between scrolls

  // Duplicate the buttonData for seamless scrolling
  const extendedButtonData = [...buttonData, ...buttonData];

  // To handle immediate reset without animation
  const containerRef = useRef<HTMLDivElement>(null);

  // Get visible buttons from the extended data
  const getVisibleButtons = (index: number) => {
    return extendedButtonData.slice(index, index + visibleCount);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true); // Enable transition during scroll

      setCurrentIndex((prevIndex) => {
        // If we're reaching the end of the original data, reset without animation
        if (prevIndex === totalButtons) {
          setTimeout(() => {
            setIsTransitioning(false); // Disable transition for reset
            setCurrentIndex(0); // Reset back to 0 immediately
          }, transitionDuration);
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, intervalDuration);

    return () => clearInterval(intervalId);
  }, []);

  const visibleButtons = getVisibleButtons(currentIndex);

  return (
    <div
      className="relative w-screen h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/WorldMap.png')" }}
    >
      <div className="overflow-hidden h-[285px] w-[470px] flex flex-col space-y-4">
        <div
          ref={containerRef}
          className={`transition-transform duration-${isTransitioning ? '500' : '0'} ease-in-out`}
          style={{ transform: `translateY(-${currentIndex * 100}px)` }} // Adjust for the visible buttons
        >
          {visibleButtons.map((button, index) => (
            <div key={`${button.description}-${index}`} className="mb-4">
              <Button description={button.description} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
