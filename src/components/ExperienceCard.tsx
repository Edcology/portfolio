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
    <div className="shadow-xl border border-gray-300 grid h-fit rounded-2xl p-6">
        <div className="md:flex md:justify-between mb-2">
            <div>
                <h1 className="text-xl font-medium mb-1">{role}</h1>
                <h2 className="text-sm font-medium mb-1">{company}</h2>
            </div>
            <div className="text-sm pt-2 text-[#86888e]">
                <p className="flex gap-1 mb-0.5"><CalendarIcon className="w-5 h-5" />{startDate} - {endDate}</p>
                <p className="flex gap-1 mb-4"><MapPinIcon className="w-5 h-5" />{location}</p>
            </div>
        </div>
        <ul className="list-disc px-6 text-sm text-[#86888e] flex flex-col gap-2">
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