import React from 'react'
import {ReactComponent as Logo} from '../../assets/svg/check.svg';
const ValueCard = ({title,description}) => {
  return (
    <div className="border border-gray-300 flex flex-col p-[16px] gap=[12px]">
    <Logo className="w-[24px] h-[24px] "></Logo>
    <h3 className="text-[16] font-bold ">{title}</h3>
    <p className="text-[14] ">{description}</p>

    </div>
  )
}

export default ValueCard
