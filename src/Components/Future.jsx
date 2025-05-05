"use client"
import React, { useState, useEffect } from 'react';

const Future = () => {
  const slides = [
    { title: "Cholera Outbreaks", image: '/outreach.jpeg' },
    { title: 'Yellow fever Outbreak', image: '/outreach2.jpeg' },
    { title: 'Typhoid fever surveillance', image: '/outreach3.jpeg' },
    { title: 'Lassa fever outbreak', image: '/outreach4.jpeg' },
    { title: 'Meningitis Prediction', image: '/yellow.jpg' },
    { title: 'Malaria Eradication', image: '/tuberculosis.jpg' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="pt-10 pb-5">
        <h1 className='text-center text-4xl text-blue-950 font-bold'>Future Initiative</h1>
        <p className='text-center text-2xl text-blue-950 font-bold mt-3'>We are developing new AI models to address:</p>
      </div>
      
      {/* Gallery Section */}
      <div className="relative w-full flex-grow overflow-hidden">
        {slides.map((slide, index) => (
          <div
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            key={index}
          >
            {/* Image with blue overlay */}
            <div className="relative w-full h-full">
              <img 
                className="w-full h-full object-cover" 
                src={slide.image} 
                alt={slide.title} 
              />
              {/* Blue overlay covering the entire image */}
              <div className="absolute inset-0 "></div>
            </div>
            
            {/* Title centered on the image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white px-6 py-3 text-center">{slide.title}</h1>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button 
          className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg z-10"
          onClick={handlePrev}
        >
          ❮
        </button>
        <button 
          className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg z-10"
          onClick={handleNext}
        >
          ❯
        </button>
      </div>

      {/* Optional Grid Section */}
      <div className="w-full py-5 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {/* Your grid content will go here */}
      </div>
    </div>
  );
};

export default Future;