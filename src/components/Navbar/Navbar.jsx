import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { motion } from "framer-motion";

// links
const links = [
  { href: '/portfolio/about', title: 'About' },
  { href: '/portfolio/projects', title: 'Projects' },
  { href: '/portfolio/skills', title: 'Skills' },
  { href: '/portfolio/contact', title: 'Contact' },
]

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const topVariant = {
    closed: {
      rotate: 0
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(0,0,0)"
    }
  };

  const middleVariant = {
    closed: {
      opacity: 1
    },
    opened: {
      opacity: 0
    }
  };

  const bottomVariant = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(0, 0, 0)"
    }
  };

  const listVariant = {
    closed: {
      x: "100vw"
    },
    opened: {
      x: 0,
      transition:{
        when:"beforeChildren",
        staggerChildren:0.2
      }
    }
  };

  const listItemVariant = {
    closed: {
      x: -10,
      opacity: 0
    },
    opened: {
      x: 0,
      opacity: 1
    }
  }

  return (
    <>
      <nav className="h-full py-6 flex bg-gradient-to-t from-green-100 to-yellow-50 items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
        {/* Logo or name */}
        <div className="w-1/3">
          {/* <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" width="35px " height='35px' alt="img" /> */}
          <h1 className="uppercase text-xl font-bold">
            <Link to={'/portfolio'}> Sopan Bhere </Link>
          </h1>
        </div>

        {/* diplay for medium screen */}
        <div className='hidden md:flex gap-4 w-1/3'>
          {
            links.map((link, index) => (
              <Link to={link.href} key={index}>{link.title}</Link>
            ))
          }
        </div>

        <div className="md:hidden ">
          {/* Menu button  */}
          <button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={() => setIsOpen(!isOpen)}>
            <motion.div variants={topVariant} animate={isOpen ? "opened" : "closed"} className='w-10 h-1 bg-black rounded origin-left'></motion.div>
            <motion.div variants={middleVariant} animate={isOpen ? "opened" : "closed"} className='w-10 h-1 bg-black rounded'></motion.div>
            <motion.div variants={bottomVariant} animate={isOpen ? "opened" : "closed"} className='w-10 h-1 bg-black rounded origin-left'></motion.div>
          </button>

          {/* menu list  */}
          {
            isOpen &&

            <motion.div
              className={` 
                absolute top-0 left-0 w-screen 
                h-full bg-gray-100 flex flex-col items-center 
                justify-center gap-8 text-3xl font-semibold z-40
              `}
              variants={listVariant}
              initial="closed"
              animate="opened"
            >
              {
                links.map((link, index) => (
                  <motion.div key={index} variants={listItemVariant}>
                    <Link to={link.href}>{link.title}</Link>
                  </motion.div>
                ))
              }
            </motion.div>
          }
        </div>
      </nav>

      <Outlet />
    </>
  )
}

export default Navbar;