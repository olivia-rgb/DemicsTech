"use client"
import React, { useEffect, useState } from 'react';

const diseases = [
  {
    name: 'Tuberculosis',
    image: '/tuberculosis.jpg',
    description:
      'We use geospatial analysis to identify current TB hotspots and apply predictive modeling to forecast future outbreaks.',
  },
  {
    name: 'Malaria',
    image: '/malaria.png',
    description:
      'Using AI and satellite data, we track mosquito breeding patterns and malaria cases in real time to help mitigate outbreaks.',
  },
  {
    name: 'Yellow Fever',
    image:  '/yellow.jpg',
    description:
      'We leverage predictive models to detect high-risk zones and provide early warnings to local health authorities.',
  },
  {
    name: 'Cholera',
    image: '/choleraa.jpg',
    description:
      'Water contamination analysis combined with historical outbreak data helps us prevent cholera outbreaks before they spread.',
  },
  {
    name: 'Dengue',
    image:  '/tuberculosis.jpg',
    description:
      'Dengue case mapping and mobile-based symptom tracking enable rapid intervention and treatment deployment.',
  },
];

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % diseases.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const current = diseases[currentIndex];

  return (
    <div className="w-[90%] max-w-full mx-auto px-4 pt-20 pb-10">
      <h1 className="text-[#1565C0] text-left md:text-center text-[2.5rem] md:text-[3.5rem] font-bold pb-6">
        What we do at DemicsTech
      </h1>

      <div className="flex flex-col md:flex-row justify-between gap-6">
        {/* Carousel Section */}
        <div className="w-full md:w-[35%] relative">
          <img
            src={current.image}
            alt={current.name}
            className="w-full h-70 rounded-md transition-all duration-500 object-cover"
          />
          <p className="text-[#1565C0] text-center text-4xl font-semibold pt-4">
            {current.name}
          </p>
          <p className="text-center  max-w-[500px] mx-auto text-xl mt-2">{current.description}</p>
        </div>

        {/* Static Right Image */}
        <div className="w-full md:w-[60%]">
        <video
         className="h-[300px] md:h-[500px] w-full object-cover rounded-md"
         autoPlay
         loop
         muted
          playsInline
        >
        <source src="/ai.mp4" type="video/mp4" />
       Your browser does not support the video tag.
      </video>

        </div>
      </div>
    </div>
  );
}

export default About;
