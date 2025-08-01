import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='border-t'>
        <div className='container mx-auto p-4 text-center flex flex-col 
        lg:flex-row lg:justify-between gap-2'>
            <p className='font-bold text-lg'> Developer : Abhishek Rajput </p>
            <div className='flex items-center gap-4 justify-center text-2xl'>
                <a href='' className='hover:text-yellow-200 transition-colors 
                duration-300'>
                    <FaFacebook/>
                </a>
                <a href='' className='hover:text-yellow-200  transition-colors 
                duration-300'>
                    <FaInstagram/>
                </a>
                <a href='' className='hover:text-yellow-200 transition-colors duration-300'>
                    <FaLinkedin/>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer