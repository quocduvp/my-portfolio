import Abouts from './Abouts'
import Content from './Content'
import Experiences from './Experiences'
import Menu from './Menu'
import Project from './Projects'



const Main = ({}) => {
  return (
    <main className="w-full">
      {/* Menu */}
      <Menu />
      <div className="h-20 md:h-0"></div>
      <Content />
      <Abouts/>
      <div className="h-20"></div>
      <Experiences/>
      <div className="h-20"></div>
      <Project />
    </main>
  )
}

export default Main
