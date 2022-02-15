const SocialNetworks = [
  {
    components: () => (
      <div
        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-white"
        style={{ fontSize: 18 }}
      >
        <a href="https://www.facebook.com/nguyenquoc.du.37">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
      </div>
    ),
  },
  {
    components: () => (
      <div
        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-700 text-pink-100"
        style={{ fontSize: 18 }}
      >
        <a href="https://github.com/quocduvp">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    ),
  },
  {
    components: () => (
      <div
        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-800 text-white"
        style={{ fontSize: 18 }}
      >
        <a href="https://www.linkedin.com/in/d%E1%BB%B1-nguy%E1%BB%85n-a2b6a6165/">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
    ),
  },
]

const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center px-5 py-5">
        <div id="Contact" className="mb-2">
            <p className="text-md font-bold">Contacts</p>
        </div>
      <div className="mb-2 flex space-x-2">
        {SocialNetworks.map((item, index) => {
          return <div key={index}> {item.components()} </div>
        })}
      </div>
      <div className="mt-5">Copyright © {new Date().getFullYear()}</div>
    </div>
  )
}

export default Footer
