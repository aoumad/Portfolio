"use client"
import { delay, motion } from "framer-motion"

import React from 'react'

function TestPage() {
  return (
    <div className='h-full flex items-center justify-center'>
        <motion.div
          className='h-96 w-96 bg-red-400 rounded'
          initial={{x:-100}}
          animate={{x:400, y:150, opacity:0.5}}
          transition={{delay:2, duration:4}}
        ></motion.div>
    </div>
  );
};

export default TestPage;