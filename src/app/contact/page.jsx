"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'

function page() {
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);

  const textTest = "Say Hii!";
  return (
    <motion.div className="h-full"
    initial={{y: "-200vh"}}
    animate={{y: "0vh"}}
    transition={{duration: 1}}
    >
      <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        {/* Text container */}
        <div className='h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl'>
          <div>
            {textTest.split("").map((letter, index) => (
              <motion.span  key={index}
                            initial={{opacity: 1}}
                            animate={{opacity: 0}}
                            transition={{duration: 3, repeat:Infinity, delay:index*0.1}}
              >{letter}</motion.span>
            ))}
          </div>
        </div>
          {/* Form Container */}
          <form className='h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24'>
            <span>Dear Abderazzak Oumad,</span>
            <textarea
                  rows={6}
                  className='bg-transparent border-b-2 border-black outline-none resize-none'
                  name='user_message'
                  />
              <span>My mail address is:</span>
              <input
                    type='text'
                    className='bg-transparent border-b-2 border-black outline-none'
                    name='user_email'
                    />
              <span>Regards</span>
              <button className='bg-purple-200 rounded font-semibold text-gray-600 p-4'>Send</button>
              {success && <span className='text-green-600 font-semibold'>Your message has been sent successfully!</span>}
              {failed && <span className='text-red-600 font-semibold'>Something went wrong!</span>}
          </form>
      </div>
    </motion.div>
  )
}

export default page

// 2 12min 55sec