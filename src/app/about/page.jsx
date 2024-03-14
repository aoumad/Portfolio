"use client"

import React from 'react'
import { motion, useInView, useScroll } from 'framer-motion'
import Brain from '@/components/Brain'
import { useRef } from 'react'
import Image from 'next/image'

function page() {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const experienceRef = useRef();
  const isSkillRefInView = useInView(skillRef, {margin: "-100px"});
  const isExperienceRefInVIew = useInView(experienceRef, {margin: "-100px"});
  return (
    <motion.div className="h-full"
    initial={{y: "-200vh"}}
    animate={{y: "0vh"}}
    transition={{duration: 1}}
    >
      {/* Container */}
      <div className='h-full overflow-scroll lg:flex' ref={containerRef}>
        {/* Text container */}
        <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-y-32 lg:gap-48 xl:gap-64 w-2/3 xl:1/2'>
          {/* Biography Container */}
          <div className='flex flex-col gap-12 justify-center'>
            {/* Biography Title */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
            I'm Abderazzak, a driven 22-year-old Computer Science student at 1337 coding school,
            affiliated with UMP6p University.My coding journey has been marked by two years of
            rigorous practice and high level project work in C and C++ languages. In the last 6 months my focus has
            shifted towards Web Development in order to fulfill the last chapter of my coding Journey at
            school, where i have discovired a genuine passion due to dedicating myself to learning web
            technologies.
            </p>
            {/* Biography quote */}
            {/* <span className="italic">
            </span> */}
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end relative flex w-[20rem] h-[6rem]">
              <Image src='/signature.png' alt='' fill className='object-contain' />
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* Skills Container */}
          <div className='flex flex-col gap-12 justify-center' ref={skillRef}>
            {/* Skills Title */}
            <motion.h1
              initial={{x: "-300px"}}
              animate={isSkillRefInView ? {x: "0"} : {}}
              transition={{delay: 0.2}}
              className="font-bold text-2xl">Skills</motion.h1>
            {/* SKills List */}
            <div className='flex flex-wrap gap-4'>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Javascript</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Typescript</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>CSS && Tailwind</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>ReactJs && NextJs</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>C/C++</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Redux</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Docker</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Framer-motion</div>
            </div>
            {/* Skills scroll svg */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          {/* Experience Container */}
          <div className='flex flex-col gap-12 justify-center pb-48' ref={experienceRef}>
            {/* Experience title */}
            <motion.h1  initial={{x: "-300px"}}
                        animate={isExperienceRefInVIew ? {x: "0px"}: {}}
                        transition={{delay: 0.2}}
                        className='font-bold text-2xl'>Education</motion.h1>
            {/* Experience List */}
            <motion.div initial={{x: "-300px"}}
                  animate={isExperienceRefInVIew ? {x: "0px"}: {}}
                  className=''>
              {/* Experience List Item */}
              <div className='flex justify-between h-48'>
                {/* Left */}
                <div className='w-1/3'>
                  {/* Job title */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg '>High school diploma in Applied Math A</div>
                  {/* Job Desc */}
                  <div className='p-3 text-sm italic'>High school Omar EL Khiyam </div>
                  {/* Job Date */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>2018 - 2019</div>
                  {/* JOb Company */}
                  {/* <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>Agadir</div> */}
                </div>
                {/* Center */}
                <div className='w-1/6'>
                  {/* Line */}
                  <div className='w-1 h-full bg-gray-600 rounded relative flex item-center justify-center'>
                    {/* Line circle */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white'></div>
                  </div>
                </div>
                {/* Right */}
                <div className='w-1/3'></div>
              </div>

                {/* SECOND ITEM */}
              <div className='flex justify-between h-48'>
                  {/* Left */}
                  <div className='w-1/3'></div>
                  {/* Center */}
                  <div className='w-1/6'>
                    {/* Line */}
                    <div className='w-1 h-full bg-gray-600 rounded relative flex item-center justify-center'>
                      {/* Line circle */}
                      <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white'></div>
                    </div>
                  </div>
                  {/* Right */}
                  <div className='w-1/3'>
                    <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg '>Two years of Applied Mathematics</div>
                    <div className='p-3 text-sm italic'>Faculty of Sciences Semlalia Marrakech</div>
                    <div className='p-3 text-red-400 text-sm font-semibold'>2019 - 2021</div>
                    {/* <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>Marrakesh</div> */}
                  </div>
                </div>

              {/* Third Item */}
              <div className='flex justify-between h-48'>
                {/* Left */}
                <div className='w-1/3'>
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg '>Computer Science</div>
                  <div className='p-3 text-sm italic'>1337 SCHOOL 42 NETWORK | UM6P University</div>
                  <div className='p-3 text-red-400 text-sm font-semibold'>2021 - Present</div>
                  {/* <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>Khouribga</div> */}
                </div>
                {/* Center */}
                <div className='w-1/6'>
                  {/* Line */}
                  <div className='w-1 h-full bg-gray-600 rounded relative flex item-center justify-center'>
                    {/* Line circle */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white'></div>
                  </div>
                </div>
                {/* Right */}
                <div className='w-1/3'></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
        {/* SVG container */}
        <div className='hidden lg:block sticky top-0 z-30 w-1/3 xl:1/2'>
          <Brain scrollYProgress={scrollYProgress}/>
        </div>
        </div>
    </motion.div>
  )
}

export default page

// I stopped in right side of the experience part 24min