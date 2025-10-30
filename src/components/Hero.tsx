'use client'
import Link from 'next/link'
import { PiGithubLogoLight } from 'react-icons/pi'
import { SlSocialLinkedin } from 'react-icons/sl'
import { EnvelopeIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { Typewriter } from 'react-simple-typewriter'
import { FaXTwitter } from 'react-icons/fa6'

const Hero = () => {
  return (
    <section id='home' className='bg-[#fbfdfc] text-center flex flex-col justify-center items-center pt-12 sm:px-12 md:px-24 lg:px-72 h-screen'>
        <h1 className='text-[32px] md:text-4xl lg:text-[50px] text-[#030212] mb-6'>Hi, I&apos;m Awofala Gbolahan </h1>
        <h2 className='text-[#86888e] text-2xl lg:text-3xl mb-6'>
            <Typewriter words={['A Frontend Developer']} loop={true} typeSpeed={70} deleteSpeed={50} delaySpeed={2000} />
        </h2>
        <p className='text-[#86888e] text-md lg:text-xl mb-6'>
            I build responsive, user-friendly web applications with modern technologies combining clean code, elegant design, and innovative solutions.
        </p>
        <div className='flex gap-4 mb-6'>
            <Link href='#contact'>
                <button className='cursor-pointer bg-[#030212] text-white px-4 py-3 rounded-xl'>Get In Touch</button>
            </Link>
            <Link href='#projects'>
                <button className='cursor-pointer border border-[#030212] px-2 py-3 rounded-xl'>View My Works</button>
            </Link>
        </div>
        <div className='flex gap-4 mb-10'>
            <Link href='https://github.com/Edcology'><PiGithubLogoLight className='hover:text-black text-[#86888e] cursor-pointer h-8 w-8' /></Link>
            <Link href='https://www.linkedin.com/in/gbolahan-awofala-537377275'><SlSocialLinkedin className='hover:text-black text-[#86888e] cursor-pointer h-7 w-7' /></Link>
            <Link href='https://x.com/AwofalaGbolaha1?t=kOS_Nmr2hn3JAg2Oqa7hrA&s=08'><FaXTwitter className='hover:text-black text-[#86888e] cursor-pointer h-7 w-7' /></Link>
            <Link href='mailto:edawofal@gmail.com'><EnvelopeIcon className='hover:text-black text-[#86888e] cursor-pointer h-8 w-8' /></Link>
        </div>
        <div>
            <Link href='#about'><ChevronDownIcon className='h-8 w-8 animate-bounce cursor-pointer' /></Link>
        </div>
    </section>
  )
}

export default Hero