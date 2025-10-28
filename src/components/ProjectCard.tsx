import Image from 'next/image'
import Link from 'next/link'
import { LuExternalLink } from 'react-icons/lu'

interface project {
    projectName: string,
    projectDesc: string,
    stacks: [],
    liveDemo: string,
    image: string
}
const ProjectCard = ({projectName, projectDesc, stacks, liveDemo, image}: project) => {
  return (
    <div className='w-full shadow-xl border border-gray-100 grid h-fit rounded-2xl'>
        <div className='w-full rounded-t-2xl'>
            <Image src={image} alt='project image' height={8} width={150} className='w-full h-48' />
        </div>
        <div className='p-4 px-6'>
            <h1 className='text-lg mb-2'>{projectName}</h1>
            <p className='mb-4 text-xs'>{projectDesc}</p>
            <div className='flex gap-1 text-xs mb-2'>
                {
                    stacks.map((stack: string, index: number) => (
                        <p className='bg-gray-300 p-1 rounded-md' key={index}>{stack}</p>
                    ))
                 }
            </div>
            <Link className='flex items-center gap-1 hover:underline text-sm' href={liveDemo}><span><LuExternalLink /></span>Live Demo</Link>
        </div>
    </div>
  )
}

export default ProjectCard