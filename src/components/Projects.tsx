import ProjectCard from "./ProjectCard"


const Projects = () => {
    const projects = [
        {
            projectName: 'CodeChat',
            projectDesc: 'A real-time chat application built with Next.js, Express.js, and Socket.io. Features include user authentication, live messaging, and a responsive UI powered by TailwindCSS.',
            stacks: ['NextJs', 'Socket.io', 'Tailwind', 'Express.js', 'Prisma'],
            liveDemo: 'https://codechat-swart.vercel.app/',
            image: '/codechat.png'
        },
        {
            projectName: 'CodeChat',
            projectDesc: 'A real-time chat application built with Next.js, Express.js, and Socket.io. Features include user authentication, live messaging, and a responsive UI powered by TailwindCSS.',
            stacks: ['NextJs', 'Socket.io', 'Tailwind', 'Express.js', 'Prisma'],
            liveDemo: 'https://codechat-swart.vercel.app/',
            image: '/codechat.png'
        },
        {
            projectName: 'CodeChat',
            projectDesc: 'A real-time chat application built with Next.js, Express.js, and Socket.io. Features include user authentication, live messaging, and a responsive UI powered by TailwindCSS.',
            stacks: ['NextJs', 'Socket.io', 'Tailwind', 'Express.js', 'Prisma'],
            liveDemo: 'https://codechat-swart.vercel.app/',
            image: '/codechat.png'
        },
        {
            projectName: 'CodeChat',
            projectDesc: 'A real-time chat application built with Next.js, Express.js, and Socket.io. Features include user authentication, live messaging, and a responsive UI powered by TailwindCSS.',
            stacks: ['NextJs', 'Socket.io', 'Tailwind', 'Express.js', 'Prisma'],
            liveDemo: 'https://codechat-swart.vercel.app/',
            image: '/codechat.png'
        },
    ]
  return (
    <section id="projects">
        <h1 className='text-center text-[#030212] text-2xl lg:text-4xl mb-6 font-semibold'>My Projects</h1>
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] lg:px-36 px-0.5">
            {
                projects.map((project, index: number) => (
                    <ProjectCard
                        key={index}
                        projectName={project.projectName}
                        projectDesc={project.projectDesc}
                        stacks={project.stacks}
                        liveDemo={project.liveDemo}
                        image={project.image}
                    />
                ))
            }
        </div>
    </section>
  )
}

export default Projects