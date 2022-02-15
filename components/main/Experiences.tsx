import ExperienceData from '../../data/experiences.json'

const Experiences = () => {
  return (
    <div id="Experiences" className="container z-10 mx-auto">
      <div className="mt-10 rounded-md bg-white px-5 py-5 shadow-xl md:-mt-10">
        <div className="mb-10 w-full">
          <p className="text-2xl font-bold">Experiences</p>
          <p className="w-10 border-4 border-sky-500"></p>
        </div>
        <div className="w-full divide-y divide-slate-800">
          {ExperienceData.map((experience, index) => {
            return (
              <div key={index} className='mb-5 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-1'>
                <div className='flex flex-col space-y-3'>
                  <p className='font-bold text-lg'>{experience.companyName}</p>
                  <p className='text-md'>{experience.startDate} - {experience.endDate}</p>
                </div>
                <div className='flex flex-col space-y-3'>
                  <p className='font-bold text-lg'>{experience.position}</p>
                  <div className='text-md' dangerouslySetInnerHTML={{ __html: experience.description }}/>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Experiences
