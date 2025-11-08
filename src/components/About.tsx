import Image from "next/image"
import profile from "../../public/profile.jpg"

const About = () => {
  return (
    <section id="about" className="md:px-6 px-4 lg:px-40 py-12">
        <h1 className="text-center text-[#030212] text-3xl lg:text-4xl mb-8 font-medium">About Me</h1>
        <div className="flex flex-col md:flex-row-reverse gap-8 md:flex-1 lg:gap-12">
            <div className="flex justify-center items-center lg:p-10">
                <Image src={profile} alt='Profile Picture' height={600} width={600} className="rounded-full w-64 h-64 md:w-5xl md:h-5xl lg:w-2xl lg:h-2xl" />
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-xl font-semibold ">Hello! I&apos;m Awofala Gbolahan</h2>
                <p className="text-[#86888e]">
                    I&apos;m a Frontend Developer with a growing passion for Artificial Intelligence and Machine Learning. I specialize in building fast, responsive, and intuitive web applications using tools like React, Next.js, Tailwind CSS, TypeScript, and JavaScript, but I&apos;m never limited by a specific stack. I enjoy learning new technologies and picking up whatever tools are needed to bring an idea to life.                </p>
                <p className="text-[#86888e]">
                    I care about writing clean, maintainable code and solving real problems through thoughtful design and functionality. My adaptability, curiosity, and attention to detail help me quickly adjust to new challenges and deliver quality results, no matter the environment.</p>
                <p className="text-[#86888e]">
                    I&apos;m currently open to job opportunities and freelance projects, especially those that explore how AI and ML can shape smarter web experiences. Outside of work, I love reading tech blogs and novels — they keep me inspired and constantly learning.</p>
                <div className="flex gap-4 md:gap-6">
                    <div>
                        <p className="text-sm"><span className="font-semibold">Location:</span> Lagos, NG</p>
                        <p className="text-sm"><span className="font-semibold">Email:</span>  edawofal@gmail.com</p>
                    </div>
                    <div>
                        <p className="text-sm"><span className="font-semibold">Experience:</span>  2+ years</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About