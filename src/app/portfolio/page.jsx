"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link';
import Image from 'next/image';

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Gaming platform",
    desc: "trancendance is a onepage fullstack website where you can play ping pong with players among other things such as 2fa authentification, a chat, private messages, friends list, profiles, a match-making system, a spectating system, streaming using sockets and modifications to the pong game such as different background and gamemodes.",
    img: "/ping_pong.png",
    link: "https://github.com/aoumad/ft_transcendence",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Webserver",
    desc: "Implementation of a C++98 compatible HTTP web server built from scratch\n.The Web server can handle HTTP methods such as GET, POST and DELETE as well as the ability to serve static files from a specified root directory or dynamic content using CGI",
    img: "/http communication.png",
    link: "https://github.com/aoumad/42_webserv",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Inception",
    desc: "Creating a docker-based WordPress LEMP stack using docker-compose on Alpine Linux or Debian Buster. The whole project has to be done in our personal virtual machine",
    img: "/docker.png",
    link: "https://github.com/aoumad/Inception",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Minishell",
    desc: "Reimplemented Bash scripting functionality in the C language, ensuring that all commands and features operate seamlessly, replicating the behavior of a native Bash environment",
    img: "/minishell.png",
    link: "https://github.com/aoumad?tab=repositories",
  },
];


function page() {

  const ref = useRef();
  const {scrollYProgress}  = useScroll({target:ref});
  const x = useTransform(scrollYProgress, [0 , 1], ["0%", "-80%"])
  return (
    <motion.div className="h-full"
    initial={{y: "-200vh"}}
    animate={{y: "0vh"}}
    transition={{duration: 1}}
    >
      <div className='h-[600vh] relative' ref={ref}>
        <div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center'>My Works</div>
        <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
          <motion.div style={{x}} className='flex'>
            <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300' />
            {items.map((item) =>(
              <div  className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
            // this will be the full screen container of each project page
                  key={item.id}>
            <div className='flex flex-col gap-8 text-white '>
              <h1 className='text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl'>{item.title}</h1>
              <div className='relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]'>
                <Image src={item.img} alt="" fill/>
              </div>
              <p className='w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]'>{item.desc}</p>
              <Link href={item.link} className='flex justify-end'>
                <button className='p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded'>Source Code</button>
              </Link>
            </div>
            </div>
            ))}
          </motion.div>

        </div>
      </div>
          <div className='h-screen w-screen flex flex-col gap-16 items-center justify-center text-center'>
            <h1 className='Do you need an Intern?'></h1>
            <div className='relative'>
              <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              viewBox="0 0 300 300"
              className="w-64 h-64 md:w-[500px] md:h-[500px] "
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                />
              </defs>
              <text fill="#000">
                <textPath xlinkHref="#circlePath" className="text-xl">
                  Front-end Developer
                </textPath>
              </text>
            </motion.svg>
            <Link
              href="/contact"
              className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
            >
              Hire Me
            </Link>
            </div>
          </div>
    </motion.div>
  )
}

export default page