import React from 'react'
import Link from 'next/link';
import DrawOut from './bits/TiltedCard'
import DrawOutlineBtn from './bits/DrawOutlineBtn';

type Props = {}

function NavBar({ }: Props) {
    return (
        <nav className='sticky top-0 flex items-center justify-end h-20'>
            <div className='flex gap-6 pr-4 items-center'>
                <DrawOutlineBtn
                    outline='BOTTOM'
                ><Link href='#'>About</Link></DrawOutlineBtn>
                <DrawOutlineBtn
                    outline='BOTTOM'
                ><Link href='#'>Skills & Education</Link></DrawOutlineBtn>
                <DrawOutlineBtn
                    outline='BOTTOM'
                ><Link href='#'>Work</Link></DrawOutlineBtn>
                <DrawOutlineBtn
                    outline='BOTTOM'
                ><Link href='#'>Personal Projects</Link></DrawOutlineBtn>
                <DrawOutlineBtn outline='ALL'>Resume</DrawOutlineBtn>
            </div>
        </nav>
    )
}

export default NavBar