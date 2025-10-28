'use client'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid"
import Link from "next/link"
import { useState } from "react"

const Header = () => {
    const [clicked, setClicked] = useState(false)
  return (
    <div className="fixed top-6 left-0 right-0 px-3 z-50">
        <nav className="mx-auto bg-black/10 backdrop-blur-md border border-white/20 rounded-4xl p-4 md:px-6 shadow-sm w-full max-w-5xl">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-xl">&lt;Awofala Gbolahan/&gt;</h1>
                </div>
                <div className="md:hidden cursor-pointer transition transit" onClick={() => setClicked(!clicked)}>
                    {clicked ? <XMarkIcon className="h-6 w-6 transition-transform duration-300 rotate-90"/> : <Bars3Icon className="h-6 w-6 transition-transform duration-300"/>}
                </div>
                <div className="hidden md:block">
                    <ul className="flex gap-3">
                        <Link href='#home'><li>Home</li></Link>
                        <Link href='#about'><li>About</li></Link>
                        <Link href='#skills'><li>Skills</li></Link>
                        <Link href='#projects'><li>Projects</li></Link>
                        <Link href='#experience'><li>Experience</li></Link>
                        <Link href='#contact'><li>Contact</li></Link>
                    </ul>
                </div>
            </div>
        </nav>
        {
            clicked && (
                <div className="mt-4 text-lg bg-white">
                   <ul className="flex flex-col gap-2 px-3 border-b border-b-gray-400 py-4">
                        <Link onClick={() => setClicked(false)} className="hover:underline" href='#home'><li>Home</li></Link>
                        <Link onClick={() => setClicked(false)} className="hover:underline" href='#about'><li>About</li></Link>
                        <Link onClick={() => setClicked(false)} className="hover:underline" href='#skills'><li>Skills</li></Link>
                        <Link onClick={() => setClicked(false)} className="hover:underline" href='#projects'><li>Projects</li></Link>
                        <Link onClick={() => setClicked(false)} className="hover:underline" href='#experience'><li>Experience</li></Link>
                        <Link onClick={() => setClicked(false)} className="hover:underline" href='#contact'><li>Contact</li></Link>
                    </ul> 
                </div>
            )
        }
    </div>
  )
}

export default Header