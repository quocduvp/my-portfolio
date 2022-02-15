const Menus = [
    {
        label: "Abouts",
        id: "Abouts"
    },
    {
        label: "Experiences",
        id: "Experiences"
    },
    {
        label: "Projects",
        id: "Projects"
    },
    {
        label: "Contact",
        id: "Contact"
    }
]

const Menu = () => {
 const scrollToDiv = (id: string) => {
    const divElement: any = document.getElementById(id);
    divElement.scrollIntoView({ behavior: 'smooth' });
 }
  return (
    <div className="fixed left-0 right-0 z-40">
      <div className="align-end mt-5 flex flex-row justify-end">
        {Menus.map((item, index) => {
          return (
            <div
              key={index}
              className="px-4"
            >
              <button className="text-md font-bold text-sky-400 hover:text-black" onClick={(e) => scrollToDiv(item.id)}>{item.label}</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Menu
