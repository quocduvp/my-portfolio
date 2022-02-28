const Abouts = () => {
  return (
    <div id="Abouts" className="container z-10 mx-auto">
      <div className="mt-10 rounded-md bg-white px-5 py-5 shadow-2xl md:-mt-10">
        <div className="mb-10 w-full">
          <p className="text-2xl font-bold">Abouts</p>
          <p className="w-10 border-4 border-sky-500"></p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-1">
          <div className="w-full md:flex md:justify-center">
            <div className="mr-5 w-full md:max-w-md">
              <img className="rounded-lg" src={'/assets/about-1.jpg'} />
            </div>
          </div>
          <div className="mb-10 w-full" style={{ maxWidth: 500 }}>
            <ul className="space-y-4">
              <li>Hi My name is Du, I am a Backend developer.</li>
              <li>I started my work in 2018.</li>
              <li>
                I have developed and maintained projects on booking, e-commerce,
                social networks, realtime chat/video call, virtual business
                card...
              </li>
              <li>
                I love researching new technologies and I solve tough problems
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Abouts
