import Image from 'next/image'
import React from 'react'
// import profile from '../../../public/profile.png'
import TiltedCard from '../components/bits/TiltedCard'


const About = () => {
  return (
    <div className='bg-evenSectionBG px-10 pb-10'>
      <h2 className="font-semibold text-3xl pt-3 pb-5">About</h2>

      <div className='flex justify-center mb-8'>
        <TiltedCard
          imageSrc={'profile.src'}
          altText="Dion Weiman profile Image"
          captionText="Your next team member"
          containerHeight="200px"
          containerWidth="200px"
          imageHeight="200px"
          imageWidth="200px"
          rotateAmplitude={30}
          scaleOnHover={1.05}
          showMobileWarning={false}
          displayOverlayContent={true}
        />
      </div>

      <div className='grid gap-4 grid-cols-2 '>
        <p>A Developer with 2+ years of experience as an Android Developer and currently passionate about breaking into the world of fullstack Development</p>
        <p>Frameworks intrigue me because on the surface they abstract quite a lot and make the life of a developer easy,
          but they also provide an opportunity to dive deeper and understand why each part functions as it does.</p>
        <p>I enjoy learning something new, especially when it comes to programming because its extremly satisfying looking
          at a massive codebase on day 1 and not being able to understand anything and then a few weeks later being able to understand atleast some part of it,
          and after a while it becomes almost as easy as reading a regular old novel.</p>
        <p>If my 2+ years in the industry have taught me anything: Clean well written code might take longer initially but it will save you so much time down the road
          & more importantly there is always someone smarter than you that you should be willing to learn from.
        </p>
      </div>
    </div>
  )
}

export default About