"use client";
import React, { useState, useEffect } from 'react';

function Hero() {
  const slides = [
    "/4K.mp4",
  ];

  const messages = [
    { intro: "At DemicsTech,", main: "we harness AI to predict infectious disease in Nigeria." },
    { intro: "At DemicsTech,", main: "we build intelligent electronic health record systems." },
    { intro: "At DemicsTech,", main: "we create digital health tools that transform patient care." },
    { intro: "At DemicsTech,", main: "we develop clinical decision support systems for healthcare providers." },
    { intro: "At DemicsTech,", main: "we design health information systems that connect communities." }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const isVideo = slides[currentIndex].endsWith('.mp4');

  // Slide changer
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Message changer
  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(textInterval);
  }, []);

  return (
    <div className='w-full h-auto relative'>
      {/* Desktop View */}
      <div className='hidden lg:block relative w-full h-[700px]'>
        {isVideo ? (
          <video
            src={slides[currentIndex]}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <div
            className='w-full h-full bg-cover bg-center'
            style={{ backgroundImage: `url(${slides[currentIndex]})` }}
          />
        )}

        {/* Dark Overlay */}
        <div className='absolute inset-0 bg-black/40'></div>

        {/* Overlay Animated Text */}
        <div className='absolute inset-0 flex items-center justify-end pr-40'>
          <div className='max-w-2xl'>
            <h1 
              key={currentMessage} 
              className='font-bold text-5xl text-white transition-opacity duration-1000 ease-in-out opacity-100 animate-fade drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]'
            >
              <span className='block mb-2'>{messages[currentMessage].intro}</span>
              <span className='font-normal'>{messages[currentMessage].main}</span>
            </h1>
            <div className='flex gap-2 items-center font-bold text-xl mt-6 cursor-pointer hover:gap-3 transition-all'>
              <h4 className='tracking-[.8em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]'>LEARN MORE</h4>
              <img src="/icon-arrow.svg" alt="arrow" className='brightness-0 invert w-4' />
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className='absolute bottom-4 right-4 z-20 bg-black/70 rounded p-3 flex gap-4'>
          <img src="/icon-angle-left.svg" alt="prev" className='w-4 cursor-pointer hover:opacity-70 transition-opacity' onClick={handlePrev} />
          <img src="/icon-angle-right.svg" alt="next" className='w-4 cursor-pointer hover:opacity-70 transition-opacity' onClick={handleNext} />
        </div>
      </div>

      {/* Mobile View */}
      <div className='lg:hidden w-full h-auto mx-auto flex flex-wrap'>
        <div className='h-94 flex-[1_1_650px] w-full flex flex-col relative'>
          {isVideo ? (
            <video
              src={slides[currentIndex]}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <div
              className='w-full h-full bg-cover bg-no-repeat bg-right'
              style={{ backgroundImage: `url(${slides[currentIndex]})` }}
            />
          )}

          {/* Mobile Nav */}
          <div className='flex justify-end items-end absolute bottom-0 right-0'>
            <div className='bg-black flex w-32 p-4 gap-6 justify-center items-center'>
              <img src="/icon-angle-left.svg" alt="prev" className='w-4 cursor-pointer' onClick={handlePrev} />
              <img src="/icon-angle-right.svg" alt="next" className='w-4 cursor-pointer' onClick={handleNext} />
            </div>
          </div>
        </div>

        {/* Mobile Text content */}
        <div className='flex-[1_1_350px] flex flex-col h-full'>
          <div className='flex w-full h-full justify-center px-10 py-15 items-center'>
            <div>
              <h1 className='font-bold text-3xl pt-10 text-blue-950'>Innovating Healthcare Through Nursing Informatics</h1>
              <p className='max-w-[450px] py-5 text-black'>
                At DemicsTech, we're bridging the gap between clinical care and technology. From AI-powered disease prediction 
                to electronic health records, clinical decision support systems, and digital health tools—we're transforming 
                healthcare delivery across Nigeria through innovative informatics solutions.
              </p>
              <div className='flex gap-2 font-bold text-md'>
                <h4 className='tracking-[.8em]'>LEARN MORE</h4>
                <img src="/icon-arrow.svg" alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;