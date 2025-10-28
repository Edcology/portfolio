import ExperienceCard from "./ExperienceCard"

const Experience = () => {
    const experiences = [
        {
            role: 'Frontend Developer Intern',
            company: 'Ofriend Edu',
            startDate: 'Jan 2024',
            endDate: 'Sep 2025',
            location: 'Remote',
            tasks: [' Developed responsive and accessible web interfaces using React.js and TailwindCSS.', ' Improved page load speed by 20% through optimized code and asset management.', 'Collaborated with designers and backend developers to deliver pixel-perfect UI aligned with brand guidelines.']
        },
        {
            role: 'Frontend Developer Intern',
            company: 'Ofriend Edu',
            startDate: 'Jan 2024',
            endDate: 'Sep 2025',
            location: 'Remote',
            tasks: [' Developed responsive and accessible web interfaces using React.js and TailwindCSS.', ' Improved page load speed by 20% through optimized code and asset management.', 'Collaborated with designers and backend developers to deliver pixel-perfect UI aligned with brand guidelines.']
        },
        {
            role: 'Frontend Developer Intern',
            company: 'Ofriend Edu',
            startDate: 'Jan 2024',
            endDate: 'Sep 2025',
            location: 'Remote',
            tasks: [' Developed responsive and accessible web interfaces using React.js and TailwindCSS.', ' Improved page load speed by 20% through optimized code and asset management.', 'Collaborated with designers and backend developers to deliver pixel-perfect UI aligned with brand guidelines.']
        }
    ]
  return (
    <section className="mt-12 md:px-2 lg:px-64 ">
        <h1 className="text-center text-[#030212] text-2xl lg:text-4xl mb-6 font-semibold">Work Experience</h1>
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