import { EnvelopeIcon, HeartIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { FaXTwitter } from "react-icons/fa6"
import { PiGithubLogoLight } from "react-icons/pi"
import { SlSocialLinkedin } from "react-icons/sl"


const Footer = () => {
    const date = new Date()
  return (
    <footer id="footer" className="md:px-6 px-4 lg:px-40 pt-12 pb-2 bg-[#fbfdfc]">
        <div className="grid gap-4 md:flex">
            <div className="grid gap-4 md:flex md:flex-col md:gap-3 md:w-1/3">
                <h1 className="text-xl">&lt;Awofala Gbolahan/&gt;</h1>
                <p className="text-[#86888e] text-sm">Transforming ideas into seamless, scalable digital solutions with clean design and modern tech.</p>
            </div>
            <div className="grid gap-4 md:flex md:flex-col md:gap-3 md:w-1/3">
                <h1 className="text-xl">Quick Links</h1>
                <ul className="text-[#86888e] text-sm md:flex md:flex-col md:gap-2">
                    <Link href='#home'><li>Home</li></Link>
                    <Link href='#about'><li>About</li></Link>
                    <Link href='#skills'><li>Skills</li></Link>
                    <Link href='#projects'><li>Projects</li></Link>
                    <Link href='#experience'><li>Experience</li></Link>
                    <Link href='#contact'><li>Contact</li></Link>
                </ul>
            </div>
            <div className="grid gap-4 md:flex md:flex-col md:gap-3 md:w-1/3">
                <h1 className="text-xl">Contact</h1>
                <div className="text-[#86888e] text-sm md:flex md:flex-col md:gap-3">
                    <p>Lagos, NG</p>
                    <p>edawofal@gmail.com</p>
                    <p>+2348140361990</p>
                </div>
            </div>
        </div>
        <div className='flex gap-6 py-8 justify-center text-[#86888e]'>
            <Link href='https://www.google.com'><PiGithubLogoLight className='cursor-pointer h-8 w-8' /></Link>
            <Link href='https://www.google.com'><SlSocialLinkedin className='cursor-pointer h-7 w-7' /></Link>
            <Link href='https://www.google.com'><FaXTwitter className='cursor-pointer h-7 w-7' /></Link>
            <Link href='https://www.google.com'><EnvelopeIcon className='cursor-pointer h-8 w-8' /></Link>
        </div>
        <hr className="text-gray-300" />
        <div className="text-center pt-6">
            <p className="flex justify-center items-center text-center">&copy; {date.getFullYear()} Awofala Gbolahan. Made with <span><HeartIcon className="h-5 w-5 ml-0.5 text-red-500" /></span></p>
        </div>
    </footer>
  )
}

export default Footer