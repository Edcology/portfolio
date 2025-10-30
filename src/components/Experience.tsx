import ExperienceCard from "./ExperienceCard"

const Experience = () => {
    const experiences = [
        {
            role: 'Frontend Developer Intern',
            company: 'Ofriend Edu',
            startDate: 'Oct 2024',
            endDate: 'Nov 2024',
            location: 'Remote',
            tasks: ['Built and deployed interactive educational platform pages, ensuring cross-browser compatibility.', ' Enhanced site performance with code optimization, reducing initial load time by 15%', 'Worked closely with product managers to deliver features ahead of schedule.']
        },
        {
            role: 'Frontend Developer Intern',
            company: 'Enoverlab',
            startDate: 'Nov 2024',
            endDate: 'Feb 2025',
            location: 'Remote',
            tasks: [' Developed responsive and accessible web interfaces using React.js and TailwindCSS.', ' Improved page load speed by 20% through optimized code and asset management.', 'Collaborated with designers and backend developers to deliver pixel-perfect UI aligned with brand guidelines.']
        }
    ]
  return (
    <section id="experience" className="bg-[#fbfdfc] py-12 mt-12 px-4 lg:px-64 ">
        <h1 className="text-center text-[#030212] text-3xl lg:text-4xl mb-8 font-medium">Work Experience</h1>
        <div className="md:border-l border-gray-300">
            <div className="grid gap-8 md:pl-7">
                {
                    experiences.map((experience, index) => (
                        <div className="relative" key={index}>
                            <div className="absolute -left-[35px] top-6 w-3 h-3 bg-black rounded-full border-2 border-white"></div>
                            <ExperienceCard 
                                role={experience.role}
                                company={experience.company} 
                                startDate={experience.startDate}
                                endDate={experience.endDate}
                                location={experience.location}
                                tasks={experience.tasks}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Experience