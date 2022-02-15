const Content = () => {
  return (
    <div className="pt-5 md:pt-0 h-auto md:relative md:h-screen -z-10">
      <div className="absolute top-0 right-0 w-1/3 md:bg-amber-300 h-screen" ></div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-1">
        <div className="flex md:h-screen flex-col items-center justify-center">
          <h1 className="text:2xl hover font-mono font-bold text-orange-300 transition delay-150 ease-in-out hover:scale-110 hover:text-orange-400 md:text-3xl">
            Nguyễn Đổ Quốc Dự
          </h1>
          <p className="text:1xl font-sans font-bold text-orange-400 md:text-2xl">
            - Backend Developer
          </p>
          <div className="mb-10 mt-10">
          <div className="text-3xl text-indigo-500 text-left leading-tight h-3 ">“</div>
            <p className="text-sm text-gray-600 text-center px-5">I love my codes, I hate my bugs 😎.</p>
            <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div>
          </div>
        </div>
        <div className="md:h-screen pt-5 md:pt-0 w-auto flex h-full flex-col items-center justify-center">
          <div className="w-2/4 md:rotate-2">
            <img
              className="w-auto rounded-lg object-center transition delay-150 ease-in-out hover:scale-110"
              src={'/assets/model.jpg'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
