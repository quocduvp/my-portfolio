import ProjectData from '../../data/projects.json'


interface ProjectItemProps {
  name: string
  description: string
  website: string
  position: string
}

interface ProjectProps {
  project: ProjectItemProps
}

const ProjectItem: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-1 border-2 border-current rounded-md md:border-none px-3 py-5'>
      <div className='flex flex-col space-y-3'>
        <p className='font-bold text-md'>{project.name}</p>
      </div>
      <div className='flex flex-col space-y-3'>
        <p className='font-bold text-md'>{project.position}</p>
        <div className='text-md' dangerouslySetInnerHTML={{ __html: project.description }}/>
        <div className=''>
          <a className='py-2 px-3 border-2 border-current text-blue-600' href={project.website} target="_blank">Project {` `}<i className="fa-solid fa-up-right-from-square"></i></a>
        </div>
      </div>
      
    </div>
  )
}

const Project = () => {
  return (
    <div id="Projects" className="container z-10 mx-auto">
      <div className="mt-10 rounded-md bg-white px-5 py-5 shadow-xl md:-mt-10">
        <div className="mb-10 w-full">
          <p className="text-2xl font-bold">Projects</p>
          <p className="w-10 border-4 border-sky-500"></p>
        </div>
        <div className="w-full divide-y divide-slate-800">
          {ProjectData.map((item, index) => {
            return (
              <div key={index} className='mb-5 grid grid-cols-1'>
                <div className='flex flex-col space-y-3'>
                  <p className='font-bold text-lg'>{item.company}</p>
                </div>
                <div className='flex flex-col space-y-3 my-3'>
                  {item.projects.map((project: any, index) => <ProjectItem key={index} project={project}/>)}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Project
