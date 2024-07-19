import React from 'react'
import { useState } from 'react';
import {NavLink} from 'react-router-dom';
import {ReactComponent as Logo} from '../assets/svg/logo.svg'

const HamburgerIcon = ({ onClick }) => (
  <button onClick={onClick} className="text-gray-700">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
    </svg>
  </button>
)
/* 네비게이션 메뉴 */
const Menus = () => (
       <nav className="hidden md:flex gap-[32px] text-[14px] font-semibold">
    <NavLink to="/services"
    className={({isActive})=>isActive
    ? "bg-black text-white px-2 py-1 rounded-md"
    : "hover:bg-gray-300  px-2 py-1 rounded-md"}>Services</NavLink>
    <NavLink to="projects"
    className={({isActive})=>isActive
    ? "bg-black text-white px-2 py-1 rounded-md"
    : "hover:bg-gray-300  px-2 py-1 rounded-md"}>Projects</NavLink>
    <NavLink to="/aboutus"
    className={({isActive})=>isActive
    ? "bg-black text-white px-2 py-1 rounded-md"
    : "hover:bg-gray-300  px-2 py-1 rounded-md"}>About Us</NavLink>
    <NavLink to="/careers"
    className={({isActive})=>isActive
    ? "bg-black text-white px-2 py-1 rounded-md"
    : "hover:bg-gray-300  px-2 py-1 rounded-md"}>Careers</NavLink>
    <NavLink to="/contactUs"
    className={({isActive})=>isActive
    ? "bg-black text-white px-2 py-1 rounded-md"
    : "hover:bg-gray-300  px-2 py-1 rounded-md"}>Contact Us</NavLink>
    </nav>
  )

  /* 토글시 나오는 메뉴 */
 const ToggleMenus = () => (
  <nav className="flex justify-end gap-[2px] text-[10px] font-semibold">
  <NavLink to="/services"
  className={({isActive})=>isActive
  ? "bg-black text-white px-2 py-1 rounded-md"
  : "hover:bg-gray-300  px-2 py-1 rounded-md"}>Services</NavLink>
  <NavLink to="projects"
  className={({isActive})=>isActive
  ? "bg-black text-white px-2 py-1 rounded-md"
  : "hover:bg-gray-300  px-2 py-1 rounded-md"}>Projects</NavLink>
  <NavLink to="/aboutus"
  className={({isActive})=>isActive
  ? "bg-black text-white px-2 py-1 rounded-md"
  : "hover:bg-gray-300  px-2 py-1 rounded-md"}>About Us</NavLink>
  <NavLink to="/careers"
  className={({isActive})=>isActive
  ? "bg-black text-white px-2 py-1 rounded-md"
  : "hover:bg-gray-300  px-2 py-1 rounded-md"}>Careers</NavLink>
  <NavLink to="/contactUs"
    className={({isActive})=>isActive
    ? "bg-black text-white px-2 py-1 rounded-md"
    : "hover:bg-gray-300  px-2 py-1 rounded-md"}>Contact Us</NavLink>
  </nav>
 )


const Appbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const Toggle = () => {
  setIsOpen(!isOpen);};

  return (
  
    <div className="px-[40px] w-full flex flex-row justify-between items-center ] py-[20px] border-b">

      <h1 className="flex items-center gap-[16px] text-[18px] font-bold">
        <Logo className="w-[16px] h-[16px]"></Logo>
        Vista Construction</h1>

       <Menus/>

    <div className="flex md:hidden">
      <HamburgerIcon onClick={Toggle}/>
      {isOpen && <p><ToggleMenus/></p>}
    </div>
    </div>
  )
}

export default Appbar
