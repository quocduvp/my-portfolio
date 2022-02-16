import { useEffect, useState } from 'react'

interface PopupMenuItemProps {
  id: string
  label: string
}

interface PopupMenuProps {
  items: PopupMenuItemProps[]
  scrollToDiv: (id: string) => void
}

const PopupMenu: React.FC<PopupMenuProps> = ({ items, scrollToDiv }) => {
  const [isToggle, setToggle] = useState(false)

  useEffect(() => {
    window.addEventListener('resize', () => {
      // setWidth(window.innerWidth);
      if (window.innerWidth > 767) {
        setToggle(false)
      }
    })
  }, [isToggle])

  const toggleMenu = (e: any) => {
    e.preventDefault()
    setToggle(!isToggle)
  }

  const scrollToDiv2 = (id: string) => {
    scrollToDiv(id)
    setToggle(false)
  }
  return (
    <>
      <div className="align-end mt-5 flex flex-row justify-end md:hidden">
        <div className="px-4">
          <button
            onClick={toggleMenu}
            className="rounded-sm border-2 py-1 px-3 text-lg transition duration-150 hover:scale-110"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>

      {isToggle ? (
        <div className="z-100 fixed top-0 left-0 h-screen w-full bg-white opacity-90 md:hidden">
          <div className="mt-10 flex h-screen flex-col items-center space-y-5">
            <button onClick={(e) => setToggle(false)} className="border-2 px-3 py-1 fixed top-0 right-0 text-xl -translate-x-5 translate-y-5 rounded-sm transition duration-150 hover:scale-110 hover:bg-blue-500 hover:text-white hover:border-none">
              <i className="fa-solid fa-xmark"></i>
            </button>
            {items.map((item, index) => {
              return (
                <div key={index} className="px-4">
                  <button
                    className="text-md font-bold text-sky-400 hover:text-black"
                    onClick={(e) => scrollToDiv2(item.id)}
                  >
                    {item.label}
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      ) : null}
    </>
  )
}

export default PopupMenu
