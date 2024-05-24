import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-200 flex">
        <div className="flex flex-1 gap-6 p-4 text-center ml-10">
          {/* <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" width="35px " height='35px' alt="img" /> */}
            <h1 className="uppercase text-xl font-bold">
              <Link to={'/portfolio'}> Sopan Bhere </Link>
            </h1>
        </div>
        <div className="flex flex-1 gap-8 p-4 justify-end mr-10">
          <div>
            <Link to={'/portfolio/about'}>About</Link>
          </div>

          <div>
            <Link to={'/portfolio/projects'}>Projects</Link>
          </div>

          <div>
            <Link to={'/portfolio/skills'}>Skills</Link>
          </div>

          <div>
            <Link to={'/portfolio/contact'}>Contact</Link>
          </div>

        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar;