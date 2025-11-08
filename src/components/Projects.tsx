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
            projectName: 'CSVote',
            projectDesc: 'A decentralized e-voting platform built with Solana, Rust, and Node.js. Features include voter authentication, transparent results, real-time vote tracking, and secure blockchain-based storage.',
            stacks: ['ReactJS', 'Rust', 'Tailwind', 'Express.js', 'MongoDB'],
            liveDemo: 'https://evoting-frontend.vercel.app/',
            image: '/csvote.png'
        },
        {
            projectName: 'JobNest',
            projectDesc: 'A responsive job discovery platform built with React and TailwindCSS. Features include smart job filtering by role, location, and keyword, and an accessible design focused on user engagement.',
            stacks: ['ReactJS', 'Tailwind'],
            liveDemo: 'https://jobnest89.netlify.app/',
            image: '/jobnest.png'
        }
    ]
  return (
    <section id="projects" className="px-4 py-12">
        <h1 className='text-center text-[#030212] text-3xl lg:text-4xl mb-8 font-medium'>My Projects</h1>
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] lg:px-36">
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