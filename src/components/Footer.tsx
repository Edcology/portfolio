import { EnvelopeIcon, HeartIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
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
                <ul className="text-[#86888e] text-sm flex flex-col gap-2">
                    <Link className="hover:underline" href='#home'><li>Home</li></Link>
                    <Link className="hover:underline" href='#about'><li>About</li></Link>
                    <Link className="hover:underline" href='#skills'><li>Skills</li></Link>
                    <Link className="hover:underline" href='#projects'><li>Projects</li></Link>
                    <Link className="hover:underline" href='#experience'><li>Experience</li></Link>
                    <Link className="hover:underline" href='#contact'><li>Contact</li></Link>
                </ul>
            </div>
            <div className="grid gap-4 md:flex md:flex-col md:gap-3 md:w-1/3">
                <h1 className="text-xl">Contact</h1>
                <div className="text-[#86888e] text-sm flex flex-col gap-3">
                    <p>Lagos, NG</p>
                    <p>edawofal@gmail.com</p>
                </div>
            </div>
        </div>
        <div className='flex gap-6 py-8 justify-center text-[#86888e]'>
            <Link href='https://github.com/Edcology'><PiGithubLogoLight className='hover:text-black cursor-pointer h-8 w-8' /></Link>
            <Link href='https://www.linkedin.com/in/gbolahan-awofala-537377275'><SlSocialLinkedin className='hover:text-black cursor-pointer h-7 w-7' /></Link>
            <Link href='mailto:edawofal@gmail.com'><EnvelopeIcon className='hover:text-black cursor-pointer h-8 w-8' /></Link>
        </div>
        <hr className="text-gray-300" />
        <div className="text-center pt-6">
            <p className="flex justify-center items-center text-center">&copy; {date.getFullYear()} Awofala Gbolahan. Made with <span><HeartIcon className="h-5 w-5 ml-0.5 text-red-500" /></span></p>
        </div>
    </footer>
  )
}

export default Footer