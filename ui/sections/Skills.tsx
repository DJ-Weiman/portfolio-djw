import React from 'react'
import { FaHtml5, FaJava, FaJs, FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiKotlin } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { SiSpringboot } from "react-icons/si";
import { TfiAndroid } from "react-icons/tfi";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaDocker } from "react-icons/fa";

type Props = {}

const Skills = (props: Props) => {
  return (
    <div id='skills' className='px-10 py-5'>
        <h2 className="font-semibold pt-3 pb-5 text-3xl text-white">Skills & Education</h2>
        <p>I attened the <b>Faculty of information technology</b> at the <b>University of Moratuwa</b> where I graduated with a first class Honors.
        Currently I am following the <b>Full-Stack Developer Path </b> 
        on <b><a href='https://scrimba.com/frontend-path-c0j' target='_blank'>Scrimba</a></b>, In addtion to a host of other online resources
        </p>
        <p className='mt-6'>Here are some of the technologies I have been working with recently:</p>
        <div className="flex mt-10 gap-6 justify-center">
            <FaJava className='w-10 h-10'/>   
            <SiKotlin  className='w-10 h-10'/>
            <FaJs  className='w-10 h-10'/>
            <FaHtml5  className='w-10 h-10'/>
            <IoLogoCss3  className='w-10 h-10'/>
            <RiTailwindCssFill className='w-10 h-10'/>
            <TfiAndroid  className='w-10 h-10'/>
            <SiSpringboot  className='w-10 h-10'/>
            <FaReact  className='w-10 h-10'/>
            <RiNextjsLine  className='w-10 h-10'/>
            <FaDocker  className='w-10 h-10'/>
        </div>
    </div>
  )
}

export default Skills