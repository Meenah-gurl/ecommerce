import React from 'react'

const Navbar = () => {
  return (
    <div className="App bg-green-600">
      <div className='max-w-6xl mx-auto'>
        <nav className=" h-28  text-black relative  shadow-sm font-mono" role="navigation">
              <div className='py-5 w-full'>
                  <div className='grid lg:grid-cols-3 grid-cols-1'>
                      <div>
                          <a href="/" className="text-lg text-white">MinaMart</a>
                      </div>

                      <div>
                          <div className='bg-white w-full rounded-sm '>
                            vdfvgsdf
                          </div>
                      </div>

                      <div className='flex justify-end items-end'>
                          <div className='rounded-full h-8 w-8 bg-red-700'>

                          </div>
                      </div>
                  </div>
              </div>
              <div className="px-4 cursor-pointer md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </div>
              <div className='bg-black py-2 px-3 absolute bottom-0 w-full'>
                `ddfgksd`
              </div>
              {/* <div className=" md:block hidden">
                <a href="/" className="">Home</a>
                <a href="/" className="">About</a>
                <a href="/" className="">Contact</a>
              </div> */}
        </nav>

      </div>
   
  </div>
  )
}

export default Navbar