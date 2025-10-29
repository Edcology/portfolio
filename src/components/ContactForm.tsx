'use client'
import React, { useState } from "react"
import { LuSend } from "react-icons/lu"

interface message {
    fullName: string,
    email: string,
    subject: string,
    message: string
}

const ContactForm = () => {
    const [form, setForm] = useState<message>({
        fullName: '',
        email: '',
        subject: '',
        message: ''
    })
    const [status, setStatus] = useState<string>("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault()
        setStatus("sending...")
        try {
            const res = fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            })

            if ((await res).ok) {
                setStatus("MEssage sent successfully")
                setForm({ fullName: "", email: "", subject: "", message: "" });
            } else{
                setStatus("Failed to send message")
            }
        } catch (err) {
            setStatus("An error occurred")
            console.error("Error",err)
        }
    }
  return (
        <form onSubmit={handleSubmit} className="grid gap-4 md:gap-3 text-sm">
            <div className="lg:flex grid gap-4 md:gap-6 w-full">
                <label className="grid gap-2 w-full" htmlFor="fullName">Full Name
                    <input 
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={form.fullName}
                        required
                        onChange={handleChange}
                        placeholder='Your name' 
                        className="p-3 w-full border border-gray-300 rounded-xl focus:outline-none placeholder:text-[#86888e]" 
                    />
                </label>
                <label className="grid gap-2 w-full" htmlFor="fullName">Email Address
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        required
                        onChange={handleChange}
                        placeholder='your.email@example.com' 
                        className="p-3 w-full border border-gray-300 rounded-xl focus:outline-none placeholder:text-[#86888e]" 
                    />
                </label>
            </div>
            <label className="grid gap-2 w-full" htmlFor="fullName">Subject
                <input 
                    type="text"
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder='What&apos;s this about?' 
                    className="p-3 w-full border border-gray-300 rounded-xl focus:outline-none placeholder:text-[#86888e]" 
                />
            </label>
            <label className="grid gap-2 w-full" htmlFor="message">Message
                <textarea 
                    name="message" 
                    id="message" 
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or question..."
                    rows={5}
                    required
                    className="p-3 border border-gray-300 rounded-xl focus:outline-none placeholder:text-[#86888e]"
                >
                </textarea>
            </label>
            <button disabled={status == 'sending...'} className="flex gap-2 items-center justify-center bg-[#030212] hover:bg-[#515153] cursor-pointer text-white text-center rounded-xl p-3" type="submit">
                <LuSend />Send Message
            </button>
            {status && <p className="text-center text-sm text-gray-600">{status}</p>}
        </form>
  )
}

export default ContactForm