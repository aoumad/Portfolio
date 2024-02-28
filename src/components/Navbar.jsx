"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import NavLink from './NavLink';
import { motion } from "framer-motion"

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const topVariants=
  {
    closed:{
      rotate:0,
    },
    opened:{
      rotate:45,
      backgroundColor:"rgb(255,255,255)",
    }
  }

  const centerVariants=
  {
    closed:{
      opacity:1,
    },
    opened:{
      opacity:0,
    }
  }

  const bottomVariants=
  {
    closed:{
      rotate:0,
    },
    opened:{
      rotate:-45,
      backgroundColor:"rgb(255,255,255)",
    }
  }

  const listVariants =
  {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
    },
  };

  const listItemVariants = {
    
  };

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
      {/* Link */}
      <div className='hidden md:flex gap-4 w-1/3 justify-center'>
        {links.map(link => (
          // <Link href={link.url} key={link.url}>{link.title}</Link>
          <NavLink link={link} key={link.url}/>
        ))}
      </div>
      {/* Logo */}
      <div className='md:hidden lg:flex xl:w-1/3 xl:justify-center'>
        <Link href="/"
        className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'>
          <span className='text-white mr-1'>AbdO</span>
          <span className='w-12 h-8 rounded bg-white text-black flex items-center justify-center'>Oumad</span>
        </Link>
      </div>
      {/* github and linkedin links */}
      <div className='hidden md:flex gap-4 w-1/3 justify-center'>
        <Link href="#">
          <Image src="/github.png" alt='' width={24} height={24}/>
        </Link>
        <Link href="#">
          <Image src="/linkedin.png" alt='' width={24} height={24}/>
        </Link>
      </div>
      {/* Responsive menu */}
      <div className='md:hidden'>
        {/* Button */}
        <button className='w-10 h-8 flex flex-col justify-between z-50 relative'
                onClick={() => setOpen((prev) => !prev)}
          >
          <motion.div variants={topVariants} animate={open ? "opened": "closed"} className='w-10 h-1 bg-black rounded origin-left'></motion.div>
          <motion.div variants={centerVariants} animate={open ? "opened": "closed"} className='w-10 h-1 bg-black rounded'></motion.div>
          <motion.div variants={bottomVariants} animate={open? "opened": "closed"} className='w-10 h-1 bg-black rounded origin-left'></motion.div>
        </button>
        {/* Menu List */}
        {open && (
            <motion.div variants={listVariants} initial="closed" animate="opened" className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-30'>
            {links.map((link) => (
              <motion.div  variants={listItemVariants} className=''>
                <Link href={link.url} key={link.url}>
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Navbar