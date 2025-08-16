'use client'

import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';

const Header = () => {

  function showToast(): void{
    console.log('Toast message shown')
    toast('General Kenobi', {
      icon: '👋',
      duration: 1000
    })
  }

  return (
    <div id='header' className="py-8 px-10">
        <div><Toaster position='top-center'/></div>
        <div>
          <h1 className="text-4xl font-bold text-slate-400"> 
            <span className='cursor-pointer' onClick={showToast}>Hello there,</span> I'm Dion
          </h1>
          <h2 className="text-xl pt-3 pb-5 text-slate-100">Fullstack & Android Developer</h2>
          <p className="font-light text-white">Software Engineer with a passion for learning and devising innovative solutions through tech</p>
          <div className="flex mt-6 gap-4">
            <a href="https://github.com/DJ-Weiman" target='_blank'><FaGithub className=" w-6 h-6" /></a>
            <a href="https://www.linkedin.com/in/dion-weiman/" target='_blank'><FaLinkedin className=" w-6 h-6" /></a>
            <a href='https://www.instagram.com/dion_weiman/' target='_blank'><FaInstagram className=" w-6 h-6" /></a>
          </div>
        </div>
        {/* <Image className="rounded-full h-40 w-40 border-white border-2" width="200" height="80" src="/profile.png" alt="profile picture of me: Dion Weiman" /> */}
      </div>
  )
}

export default Header