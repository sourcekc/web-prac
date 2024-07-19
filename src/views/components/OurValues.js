import React from 'react'
import ValueCard from './ValueCard';

const values = [
    { title: "Safety", description: "We are committed to the safety of our employees, subcontractors, and the public." },
    { title: "Quality", description: "We take pride in our work and deliver the highest quality construction services." },
    { title: "Integrity", description: "We operate with honesty, transparency, and respect for others." },
    { title: "Teamwork", description: "We collaborate and support each other to achieve our common goals." },
    { title: "Innovation", description: "We embrace new ideas, technologies, and methods to improve our work." },
    { title: "Sustainability", description: "We are dedicated to minimizing our environmental impact and promoting green building practices." },
    { title: "Customer Service", description: "We are responsive to our clients' needs and strive to exceed their expectations." },
    { title: "Community", description: "We give back to the communities where we live and work." },
    { title: "Excellence", description: "We continuously seek to improve and set the bar for excellence in construction." },
  ];
  

const OurValues = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[12px]">
      {values.map((value,index)=>
    <ValueCard key={index} title={value.title} description={value.description}/>)}
    </div>
  );
};

export default OurValues;
