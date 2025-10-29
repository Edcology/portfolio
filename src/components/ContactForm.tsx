'use client'
import { useState } from "react"
import { LuSend } from "react-icons/lu"

interface message {
    fullName: string,
    email: string,
    subject: string,
    message: string
}

const ContactForm = () => {
    const [message, setMessage] = useState<message>({
        fullName: '',
        email: '',
        subject: '',
        message: ''
    })
  return (
        <form className="grid gap-4 md:gap-3 text-sm" action="">
            <div className="lg:flex md:gap-6 w-full">
                <label className="grid gap-2 w-full" htmlFor="fullName">Full Name
                    <input 
                        type="text"
                        id="fullName"
                        onChange={(e) => setMessage({...message, fullName: e.target.value})}
                        placeholder='Your name' 
                        className="p-3 w-full border border-gray-300 rounded-xl focus:outline-none placeholder:text-[#86888e]" 
                    />
                </label>
                <label className="grid gap-2 w-full" htmlFor="fullName">Email Address
                    <input 
                        type="email"
                        id="email"
                        onChange={(e) => setMessage({...message, email: e.target.value})}
                        placeholder='your.email@example.com' 
                        className="p-3 w-full border border-gray-300 rounded-xl focus:outline-none placeholder:text-[#86888e]" 
                    />
                </label>
            </div>
            <label className="grid gap-2 w-full" htmlFor="fullName">Subject
                <input 
                    type="text"
                    id="subject"
                    onChange={(e) => setMessage({...message, subject: e.target.value})}
                    placeholder='What&apos;s this about?' 
                    className="p-3 w-full border border-gray-300 rounded-xl focus:outline-none placeholder:text-[#86888e]" 
                />
            </label>
            <label className="grid gap-2 w-full" htmlFor="message">Message
                <textarea 
                    name="message" 
                    id="message" 
                    placeholder="Tell me about your project or question..."
                    rows={5}
                    className="p-3 border border-gray-300 rounded-xl focus:outline-none placeholder:text-[#86888e]"
                >
                </textarea>
            </label>
            <button className="flex gap-2 items-center justify-center bg-[#030212] hover:bg-[#515153] cursor-pointer text-white text-center rounded-xl p-3" type="submit">
                <LuSend />Send Message
            </button>
        </form>
  )
}

export default ContactForm