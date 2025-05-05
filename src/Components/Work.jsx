import React from 'react'

function Work() {
  return (
    <div>
      <h1 className="text-blue-950 text-left md:text-center text-4xl md:text-5xl font-bold pb-6">
        Our Projects
      </h1>

      <div className="flex flex-wrap h-100 w-full shadow-md ">
        <div className="w-1/2 flex flex-col justify-center items-center p-4">
          <h2 className="text-2xl font-semibold mb-2">TB Hotspot Mapping in Abuja Villages</h2>
          <p className="text-md mb-3 max-w-[400px] text-center mx-auto">
          In Abuja's rural villages, limited healthcare access, stigma, 
            and delayed diagnosis contribute to higher mortality rates 
            and continued transmission.
          </p>
          <h3 className="text-xl font-bold mb-2 text-blue-950"> Impacts</h3>
          <ul className="list-disc pl-5 text-md max-w-[500px] text-center mx-auto">
            <li>Identified 23 previously unknown high-risk zones in rural Abuja</li>
            <li>Established mobile screening units serving 17 villages</li>
            <li>Trained 45 community health workers in TB detection and treatment support</li>
            <li>Implemented a text-message based symptom reporting system used by over 1,500 residents</li>
          </ul>
        </div>
        <div className="w-1/2 h-full">
          <img src="/outreach3.jpeg" className="object-cover w-full h-full" alt="TB Outreach Project" />
        </div>  
      </div>

      <div className="flex flex-wrap h-100 w-full">
      <div className="w-1/2 h-full">
          <img src="/outreach2.jpeg" className="object-cover w-full h-full" alt="TB Outreach Project" />
        </div>  
        <div className="w-1/2 flex flex-col justify-center items-center p-4">
          <h2 className="text-2xl font-semibold mb-2">Medical Outreaches</h2>
          <p className="text-md mb-3 max-w-[400px] text-center mx-auto">
          In Abuja's rural villages, limited healthcare access, stigma, 
            and delayed diagnosis contribute to higher mortality rates 
            and continued transmission.
          </p>
          <h3 className="text-xl font-bold mb-2 text-blue-950">Impacts</h3>
          <ul className="list-disc pl-5 text-md max-w-[500px] text-center mx-auto">
            <li>Identified 23 previously unknown high-risk zones in rural Abuja</li>
            <li>Established mobile screening units serving 17 villages</li>
            <li>Trained 45 community health workers in TB detection and treatment support</li>
            <li>Implemented a text-message based symptom reporting system used by over 1,500 residents</li>
          </ul>
        </div>
        
      </div>
    </div>
  )
}

export default Work