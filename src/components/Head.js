import React from 'react'

const Head = () => {
  return (
    <div className='grid grid-flow-col p-4 m-2 shadow-lg' >
      <div className='flex col-span-1'>
        <img
        className='h-10 mx-4'
         alt='menu' 
         src='https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-462145.png?f=webp&w=256'
         />
        <img 
        className='h-8'
        alt='logo' 
        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
        />
      </div>

      <div className='col-span-10' >
        <input className="w-[50%] h-10 border border-gray-500 rounded-l-full" type='text' placeholder='  Search'></input>
        <button className='border h-10 bg-gray-100 border-gray-500 rounded-r-full px-8 py-1'> 🔍</button>
      </div>

      <div className='col-span-1'>
        <img 
        className='h-10'
        alt='user'
         src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' 
         />
      </div>


    </div>
  )
}

export default Head