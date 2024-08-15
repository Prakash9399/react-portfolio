import React from 'react'
import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si';
const Navbar = () => {
  return (
   <nav className='  mb-20 flex items-center justify-between py-6'>
          <div className=' flex flex-shrink-0 items-center'>
            {/* <img src={} alt="logo"  className=' mx-2 w-10'/> */}
             </div>
             <div className=' m-8 flex item justify-center gap-4 text-2xl'>
                <a href='https://www.linkedin.com/in/prakash-rajput-a3b533243/'><FaLinkedin/></a>
               
                <a href='https://github.com/Prakash9399'> <FaGithub/></a>
                <a href='https://leetcode.com/u/Prakash_Rajput/'> <SiLeetcode/></a>
                <FaSquareXTwitter/>
                <FaInstagram/> 
             </div>
   </nav>
  )
}

export default Navbar
