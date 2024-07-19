import React from 'react'

const TeamCard = ({Image,name,position}) => {
    
  return (
    
    <div className="flex flex-col items-center gap-[12px]">
      <Image className="w-[144px] h-[144px] rounded-full"/>
      <h3 className="text-[16] font-bold text-center">{name}</h3>
      <p className="text-[14] text-center">{position}</p>
    </div>
  )
}

export default TeamCard
