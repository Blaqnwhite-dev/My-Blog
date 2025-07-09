import React from 'react'

export const  Footer = () => {
  return (
    <div className='bg-gray-900'>
      <div className='px-4 pt-16 mx:auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
        <div className=''>
          <div className='grid grid-cols-2 gap-5lg:col-span-4 md:grid-cols-4'>
            <div>
              <p className='font-medium tracking-wide text-gray-300'>Category</p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>News</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>World</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Games</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Refrences</a>
                </li>
              </ul>
            </div>

            {/* Category 2 */}
            <div>
              <p className='font-medium tracking-wide text-gray-300'>Apple</p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>web</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>ecomerce</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Business</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Entertainment</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Portfolio</a>
                </li>
              </ul>
            </div>

            {/* Category 3 */}
            <div>
              <p className='font-medium tracking-wide text-gray-300'>Cherry</p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Media</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Brochure</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Non-profit</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Education</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Projects</a>
                </li>
              </ul>
            </div>

            {/* Category 4 */}
            <div>
              <p className='font-medium tracking-wide text-gray-300'>Business</p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Info</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Personal</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Wiki</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Forum</a>
                </li>
  
              </ul>
            </div>

           
          </div>

           {/* Subscription */}
           <div className='md:max-w-md lg:col-span-2 lg:mt-0 mt-5 '>
              <p className='font-medium tracking-wide text-gray-300'>Subscribe for updates</p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Info</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Personal</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Wiki</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Forum</a>
                </li>
  
              </ul>
            </div>
        </div>
      </div>
    </div>
  )
}
