import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {

  const isMenuOpen = useSelector(store=>store.app.isMenuOpen)
  if(!isMenuOpen) return null;
  return (
    <div className='w-72 pr-20 pl-3 m-5 justify-between shadow-lg '>
     <Link to={"/"}><h1 className=' cursor-pointer hover:bg-gray-100 rounded-lg'>Home</h1></Link> 
      <h1 className=' cursor-pointer hover:bg-gray-100 rounded-lg'>Shorts</h1>
      <h1 className=' cursor-pointer hover:bg-gray-100 rounded-lg'>Subscriptions</h1>
      <div className="border-b border-gray-300 my-4"></div> 
       
      <h1 className=' cursor-pointer font-bold'>You &nbsp;  {">"}</h1>
      <ul className=' cursor-pointer '>
        <li className='  hover:bg-gray-100 rounded-lg'>Your channel</li>
        <li className=' hover:bg-gray-100 rounded-lg'>History</li>
        <li className=' hover:bg-gray-100 rounded-lg'>Your videos</li>
        <li className=' hover:bg-gray-100 rounded-lg'>Watch later</li>
        <li className='  hover:bg-gray-100 rounded-lg'>Your clips</li>
        <li className=' hover:bg-gray-100 rounded-lg'>Liked videos</li>
      </ul>
       
      <h1 className=' cursor-pointer font-bold'>Explore  {">"}</h1>
      <ul className='  cursor-pointer '>
        <li className=' hover:bg-gray-100 rounded-lg'>Movies</li>
        <li className=' hover:bg-gray-100 rounded-lg'>Trending</li>
        <li className=' hover:bg-gray-100 rounded-lg'>Shopping</li>
        <li className=' hover:bg-gray-100 rounded-lg'>Music</li>
        <li className=' hover:bg-gray-100 rounded-lg'>Live</li>
        <li className=' hover:bg-gray-100 rounded-lg'>Gaming</li>
      </ul>

      







      








    </div>
    
  )
}

export default Sidebar