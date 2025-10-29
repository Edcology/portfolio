import React from 'react'
import { FaGitAlt, FaGithub, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiTypescript } from 'react-icons/si'

const Skills = () => {
  return (
    <section id='skills' className='md:px-32 px-6 py-12 sm:px-4 lg:px-48 flex flex-col justify-center items-center bg-[#fbfdfc]'>
        <h1 className='text-center text-[#030212] text-3xl lg:text-4xl mb-8 font-medium'>Technical Skills</h1>
        <div className='flex gap-2 md:gap-4 lg:gap-8'>
            <FaReact className='h-10 w-10 md:h-14 md:w-14' />
            <RiNextjsFill className='h-10 w-10 md:h-14 md:w-14' />
            <IoLogoJavascript className='h-10 w-10 md:h-14 md:w-14' />
            <SiTypescript className='h-10 w-10 md:h-14 md:w-14' />
            <RiTailwindCssFill className='h-10 w-10 md:h-14 md:w-14' />
            <FaGitAlt className='h-10 w-10 md:h-14 md:w-14' />
            <FaGithub className='h-10 w-10 md:h-14 md:w-14' />
        </div>
    </section>
  )
}

export default Skills