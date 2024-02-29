"use client"

import React from 'react';
import { AnimatePresence, MotionConfig, delay, easeIn, easeInOut, easeOut } from 'framer-motion';
import Navbar from './Navbar';
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation';

function TransitionProvider({children}) {

  const pathName = usePathname();
  return (
    <AnimatePresence mode='wait'>
      <div key={pathName} className="h-screen w-screen bg-gradient-to-b from-blue-50 to-red-100">
        <motion.div className='h-screen w-screen bg-black fixed rounded-b-[100px] z-40'
                    animate={{height:"0vh"}}
                    exit={{height:"140vh"}}
                    transition={{duration:2, ease:"easeOut"}}
          />
          <motion.div className='h-screen w-screen bg-red-500 fixed rounded-t-[100px] bottom-0 z-30'
              initial={{height:"140vh"}}
              animate={{height:"0vh", transition:{delay:2}}}
          />
        <div className="h-24">
          <Navbar/>
        </div>
        <div className="h-[calc(100vh-6rem)]">
          {children}
        </div>
      </div>
    </AnimatePresence>
  )
}

export default TransitionProvider

// 1h 5min 