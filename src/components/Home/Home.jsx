import React from 'react'
import BorderAnimation from '../BorderAnimation';
import { Link } from 'react-router-dom';

const Home = () => {
  return (

    <>
      <main>
        <section className="w-screen md:h-screen sm:h-full flex flex-col md:flex-row lg:flex-row gap-8 px-4 sm:px-12 lg:px-20 xl:px-48">
          {/* image container */}
          <BorderAnimation />

          {/* text contaner */}
          <div className='flex flex-col gap-8 items-center justify-center'>
            {/*  heading */}
            <h1 className='text-4xl font-bold md:text-4xl'>Full Stack Developer</h1>

            {/* Description */}
            <p className='md:text-2xl'>
              Briging the gap between real world and digital world!
            </p>

            {/* Button */}
            <div className='flex gap-4'>
              <button className='p-2 rounded-md ring-1 font-semibold ring-black'>
                <Link className='text-white'>View Projects</Link>
              </button>
              <button className='p-2 rounded-md bg-white font-semibold ring-1 ring-black'>
                <Link>Contact Me</Link>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home;