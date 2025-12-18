"'use client'"
import React from 'react'


function Work() {
  return (
    <div className="px-4 md:px-10">
      <h1 className="text-[#1565C0] text-left md:text-center text-3xl md:text-6xl font-bold pt-30 pb-10">
        Our Projects
      </h1>

      {/* Project 1: TB Hotspot Mapping */}
      <div className="flex flex-col md:flex-row w-full shadow-md mb-10 items-stretch">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 h-full">
          <h2 className="text-4xl text-[#1565C0] font-semibold mb-2 text-center ">
            Predictive TB Hotspot Mapping in Gwagwalada
          </h2>
          <p className="text-xl mb-3 max-w-[800px] text-center ">
            Using artificial intelligence and geospatial modeling, we identified <b>five high-risk TB communities</b> 
            in Gwagwalada: New Kutunku, Old Kutunku, Angwan Dodo, Giri, and Zuba. This approach moves TB control 
            from passive surveillance to proactive prevention.
          </p>
          <h3 className="text-4xl font-bold mb-2 text-[#1565C0]">Impacts</h3>
          <ul className=" pl-5 text-xl max-w-[800px] text-center">
            <li>Pinpointed 5 hotspot villages for targeted TB outreach</li>
            <li>Enabled faster detection using AI-driven hotspot prediction</li>
            <li>Guided mobile screening and treatment deployment in underserved areas</li>
            <li>Improved early case finding and community awareness</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 h-full">
          <video 
            src="/tb-video.mp4" 
            className="object-cover w-full h-full rounded-lg"
            autoPlay 
            loop 
            muted 
            playsInline 
            controls={false} 
          />
        </div>  
      </div>

      {/* Project 2: Sickle Cell Outreach */}
      <div className="flex flex-col md:flex-row w-full shadow-md items-stretch">
      <div className="w-full md:w-1/2 min-h-[400px]">
        <img 
          src="/happy-kids.jpg" 
          className="object-cover object-top w-full h-[400px] rounded-lg" 
          alt="Sickle Cell Outreach" 
        />
      </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 h-full">
          <h2 className="text-4xl text-[#1565C0] font-semibold mb-2 text-center ">
            Sickle Cell Outreach & Free Genotype Screening
          </h2>
          <p className="text-xl mb-3 max-w-[700px] text-center ">
            To combat the rising burden of sickle cell disease in Nigeria, DemicsTech organized 
            a youth-focused outreach in Gwagwalada, offering <b>free genotype screening</b>, counseling, 
            and awareness education to empower healthier family planning decisions.
          </p>
          <h3 className="text-4xl font-bold mb-2 text-[#1565C0]">Impacts</h3>
          <ul className=" pl-5 text-xl max-w-[700px] text-center">
            <li>Screened over 300 young people for genotype status</li>
            <li>Provided counseling sessions on sickle cell prevention</li>
            <li>Partnered with local schools and youth groups for awareness</li>
            <li>Created a foundation for nationwide genetic health education programs</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Work
