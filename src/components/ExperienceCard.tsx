import { CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline"

interface experience {
    role: string,
    company: string,
    startDate: string,
    endDate: string,
    location: string,
    tasks: string[]
}

const ExperienceCard = ({role, company, startDate, endDate, location, tasks}: experience) => {
  return (
    <div className="shadow-xl border border-gray-300 grid h-fit rounded-2xl p-4 px-6">
        <h1 className="text-xl font-semibold mb-2">{role}</h1>
        <h2 className="text-lg font-medium mb-1">{company}</h2>
        <p className="flex gap-1 mb-0.5"><CalendarIcon className="w-5 h-5" />{startDate} - {endDate}</p>
        <p className="flex gap-1 mb-4"><MapPinIcon className="w-5 h-5" />{location}</p>
        <ul className="list-disc px-6 text-sm text-[#86888e]">
            {
                tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))
             }
        </ul>
    </div>
  )
}

export default ExperienceCard