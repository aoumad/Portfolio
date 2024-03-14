"use client"

import Image from "next/image";
import { motion } from 'framer-motion'

const Homepage = () => {
  return (
  <motion.div className="h-full"
              initial={{y: "-200vh"}}
              animate={{y: "0vh"}}
              transition={{duration: 1}}
    >
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* Image container */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/me.png" alt="" fill className="object-contain"/>
      </div>
      {/* Text container */}
      <div className="h/1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        {/* Title  */}
        <h1 className="text-4xl md:text-6xl font-bold">I'm Abderazzak</h1>
        <h1 className="text-4xl md:text-6xl font-bold">A Front-end Developer</h1>
        {/* Description  */}
        <p className="md:text-xl">A driven 22-year-old Computer Science student at 1337 coding school, passionate about web development and the latest technologies.</p>
        {/* Buttons */}
        <div className="w-full flex justify-center gap-4">
          <button
                  onClick={() => window.open('https://github.com/aoumad', '_blank')}
                  className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View my work!</button>
          <button
                  onClick={() => window.location.href='/contact'}
                  className="p-4 rounded-lg ring-1 ring-black">Contact me!</button>
        </div>
      </div>
    </div>
  </motion.div>
  );
};

export default Homepage;