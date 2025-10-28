import About from '@/components/About'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col justify-center bg-linear-to-br from-white to-gray-100 py-6 px-4 min-h-screen'>
      <Header />
      <Hero />
      <About />
      <Skills />
    </div>
  )
}

export default Home