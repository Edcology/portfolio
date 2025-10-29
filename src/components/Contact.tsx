import { EnvelopeIcon, MapPinIcon, PhoneIcon, CheckIcon } from "@heroicons/react/24/outline"
import ContactForm from "./ContactForm"


const Contact = () => {
  return (
    <section id="contact" className="mt-12">
        <h1 className="text-center text-[#030212] text-3xl lg:text-4xl mb-8 font-medium">Get In Touch</h1>
        <div className="flex flex-col md:flex-row gap-6 lg:px-36 px-2 md:px-4">
            <div className="md:w-1/2">
                <h2 className="text-2xl font-medium mb-6">Let&apos;s Work Together</h2>
                <p className="mb-4 md:mb-6 text-[#86888e] text-sm">
                    Always up for new challenges and cool projects! Got a question or just want to say hi? Reach out anytime!
                </p>
                <p className="flex items-center gap-1 mb-2 text-sm"><EnvelopeIcon className="w-4 h-4 md:w-5 md:h-5" /> edawofal@gmail.com</p>
                <p className="flex items-center gap-1 mb-2 text-sm"><PhoneIcon className="w-4 h-4 md:w-5 md:h-5" /> +2348140361990</p>
                <p className="flex items-center gap-1 mb-2 text-sm"><MapPinIcon className="w-4 h-4 md:w-5 md:h-5" /> Lagos, NG</p>
                <h3 className="mt-4 md:mt-6 mb-2 md:mb-4 font-medium">Why Choose Me?</h3>
                <ul className="text-sm text-[#86888e] flex flex-col gap-1 md:gap-3">
                    <li className="flex items-center"><CheckIcon className="w-4 h-4 text-black" />2+ years of experience in web development</li>
                    <li className="flex items-center"><CheckIcon className="w-4 h-4 text-black" />Focused on clean, responsive design</li>
                    <li className="flex items-center"><CheckIcon className="w-4 h-4 text-black" />Delivers quality work on time</li>
                    <li className="flex items-center"><CheckIcon className="w-4 h-4 text-black" />Strong problem-solving skills</li>
                </ul>
            </div>
            <div className="md:w-1/2">
                <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default Contact