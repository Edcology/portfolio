import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

const Home = () => {
  return (
    <div className='flex flex-col justify-center bg-linear-to-br from-white to-gray-100 py-6 px-4 min-h-screen'>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default Home