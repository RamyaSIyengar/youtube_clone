import React from 'react'

const Sidebar = () => {
  return (
    <div className='p-4  shadow-lg w-52'>
      <h1 className='m-3 cursor-pointer hover:bg-gray-100 rounded-lg'>Home</h1>
      <h1 className='m-3 cursor-pointer hover:bg-gray-100 rounded-lg'>Shorts</h1>
      <h1 className='m-3 cursor-pointer hover:bg-gray-100 rounded-lg'>Subscriptions</h1>
      <div className="border-b border-gray-300 my-4"></div> 
       
      <h1 className='m-3 cursor-pointer font-bold'>You &nbsp;  {">"}</h1>
      <ul className='m-3 cursor-pointer '>
        <li className='pt-3 px-2 hover:bg-gray-100 rounded-lg'>Your channel</li>
        <li className='pt-3 px-2 hover:bg-gray-100 rounded-lg'>History</li>
        <li className='pt-3 px-2 hover:bg-gray-100 rounded-lg'>Your videos</li>
        <li className='pt-3 px-2 hover:bg-gray-100 rounded-lg'>Watch later</li>
        <li className='pt-3 px-2 hover:bg-gray-100 rounded-lg'>Your clips</li>
        <li className='pt-3 px-2 hover:bg-gray-100 rounded-lg'>Liked videos</li>
      </ul>
       
      <h1 className='m-3 cursor-pointer font-bold pt-5'>Explore  {">"}</h1>
      <ul className='m-3 cursor-pointer '>
        <li className='pt-3 px-2 hover:bg-gray-100 rounded-lg'>Movies</li>
        <li className='pt-3 px-2 hover:bg-gray-100 rounded-lg'>Trending</li>
        <li className='pt-3 px-2 hover:bg-gray-100 rounded-lg'>Shopping</li>
        <li className='pt-3 px-2 hover:bg-gray-100 rounded-lg'>Music</li>
        <li className='pt-3 px-2 hover:bg-gray-100 rounded-lg'>Live</li>
        <li className='pt-3 px-2 hover:bg-gray-100 rounded-lg'>Gaming</li>
      </ul>

      







      








    </div>
    
  )
}

export default Sidebar