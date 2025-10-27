import Image from "next/image"
import profile from "../../public/profile.jpg"

const About = () => {
  return (
    <section id="about" className="md:px-24 lg:px-40">
        <h1 className="text-center text-2xl lg:text-4xl mb-6 font-semibold">About Me</h1>
        <div className="flex flex-col md:flex-row-reverse gap-8 md:flex-1 lg:gap-12">
            <div className="flex justify-center items-center md:p-10">
                <Image src={profile} alt='Profile Picture' height={600} width={600} className="rounded-full w-64 h-64 lg:w-2xl lg:h-2xl" />
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-xl font-semibold ">Hello! I&apos;m Awofala Gbolahan</h2>
                <p className="text-[#86888e]">
                    I&apos;m a Frontend Developer with a growing interest in Artificial Intelligence and Machine Learning. With a strong foundation in React, Next.js, Tailwind CSS, TypeScript, and JavaScript, I focus on building fast, responsive, and user-friendly web applications.
                </p>
                <p className="text-[#86888e]">
                    I&apos;m passionate about crafting clean, maintainable code and solving problems through thoughtful design and functionality. My attention to detail and ability to learn quickly allow me to adapt to new technologies and deliver high-quality results.
                </p>
                <p className="text-[#86888e]">
                    Currently, I&apos;m open to job opportunities and freelance projects while exploring how AI and ML can enhance web experiences. Outside of work, I enjoy reading tech blogs and novels to stay inspired and continually expand my knowledge.
                </p>
                <div className="flex gap-8">
                    <div>
                        <p><span className="font-semibold">Location:</span> Lagos, NG</p>
                        <p><span className="font-semibold">Email:</span>  edawofal@gmail.com</p>
                    </div>
                    <div>
                        <p><span className="font-semibold">Experience:</span>  2+ years</p>
                        <p><span className="font-semibold">Phone:</span>  +2348140361990</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About