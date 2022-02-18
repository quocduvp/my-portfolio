import SkillData from '../../data/skills.json'

interface SkillItemProps {
  items: String[]
}

const SkillItems: React.FC<SkillItemProps> = ({ items }) => {
  return (
    <div className="my-2 flex flex-wrap md:space-x-4">
      {items.map((item, index) => {
        return (
          <div
            className="rounded-lg border-2 bg-rose-500 px-2 py-1 text-white"
            key={index}
          >
            {item}
          </div>
        )
      })}
    </div>
  )
}
const Skill = () => {
  return (
    <div id="Skills" className="container z-10 mx-auto">
      <div className="mt-10 rounded-md bg-white px-5 py-5 shadow-xl md:-mt-10">
        <div className="mb-10 w-full">
          <p className="text-2xl font-bold">Skills</p>
          <p className="w-10 border-4 border-sky-500"></p>
        </div>
        <div className="flex flex-col space-y-3">
          {SkillData.map((item, index) => {
            return (
              <div key={index}>
                <p className="font-bold">{item.name}:</p>
                <SkillItems items={item.values} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Skill
