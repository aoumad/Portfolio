"use client"

import React from 'react'
import { motion } from 'framer-motion'

function page() {
  return (
    <motion.div className="h-full"
    initial={{y: "-200vh"}}
    animate={{y: "0vh"}}
    transition={{duration: 1}}
    >

    </motion.div>
  )
}

export default page