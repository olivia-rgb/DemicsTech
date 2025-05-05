"use client";
import React, { useState, useEffect } from 'react';

function Hero() {
  const slides = [
    "/demics3.mp4",
    "/demics4.mp4",
    "/demics2.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const isVideo = slides[currentIndex].endsWith('.mp4');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full h-auto relative '>
      {/* Desktop View: Video + Overlay Text */}
      <div className='hidden lg:block relative w-full h-[600px]'>
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

        {/* Overlay Text */}
        <div className='absolute inset-0 flex items-center justify-end pr-40'>
          <div className='  bg-white/80 backdrop-blur-md shadow-[0_0_40px_20px_rgba(0,0,0,0.3)] rounded-lg p-10 max-w-2xl'>
            <h1 className='font-bold  text-4xl mb-4 text-black'>
              Leveraging AI to Combat Infectious Diseases in Nigeria
            </h1>
            <p className='text-gray-700 mb-6'>
              At DemicsTech, we're harnessing the power of artificial intelligence to predict,
              track, and combat infectious disease outbreaks across Nigeria. Our data-driven approach
              is transforming public health interventions one community at a time.
            </p>
            <div className='flex gap-2 items-center font-bold text-md'>
              <h4 className='tracking-[.8em] text-[#1565C0]'>LEARN MORE</h4>
              <img src="/icon-arrow.svg" alt="arrow" />
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className='absolute bottom-4 right-4 z-20 bg-black/70 rounded p-3 flex gap-4'>
          <img src="/icon-angle-left.svg" alt="prev" className='w-4 cursor-pointer' onClick={handlePrev} />
          <img src="/icon-angle-right.svg" alt="next" className='w-4 cursor-pointer' onClick={handleNext} />
        </div>
      </div>

      {/* Mobile View: Keep original layout */}
      <div className='lg:hidden w-full h-auto mx-auto  flex flex-wrap'>
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
        <div className='flex-[1_1_350px] flex flex-col h-full '>
          <div className='flex w-full h-full justify-center px-10 py-15 items-center'>
            <div>
              <h1 className='font-bold text-3xl pt-10 text-blue-950'>Leveraging AI to Combat Infectious Diseases in Nigeria</h1>
              <p className='max-w-[450px] py-5 text-black'>
                At DemicsHealth, we're harnessing the power of artificial intelligence to predict, track, 
                and combat infectious disease outbreaks across Nigeria. Our data-driven approach is transforming public health interventions one community at a time.
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
