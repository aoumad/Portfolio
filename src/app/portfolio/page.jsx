"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function page() {

  const ref = useRef();
  const {scrollYProgress}  = useScroll({container:ref});
  const x = useTransform(scrollYProgress, [0 , 1], ["0%", "100%"])
  return (
    <motion.div className="h-full"
    initial={{y: "-200vh"}}
    animate={{y: "0vh"}}
    transition={{duration: 1}}
    >
      <div className='h-[600vh]' ref={ref}>
        <div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center'>My Works</div>
      </div>
    </motion.div>
  )
}

export default page