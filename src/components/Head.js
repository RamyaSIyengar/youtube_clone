import React from 'react'

const Head = () => {
  return (
    <div className='grid grid-flow-col p-3 m-2 shadow-lg' >
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

      <div className='col-span-11' >
        <input className="w-[50%] h-10 border border-gray-500 rounded-l-full pl-10 ml-36" type='text' placeholder='  Search'></input>
        <button className='border h-10 bg-gray-100 border-gray-500 rounded-r-full px-6 py-1'> 🔍</button>
        <button><img  alt="microphone" className='h-6  px-2 mx-2 ' src="https://static.vecteezy.com/system/resources/previews/013/658/851/original/mic-microphone-record-speak-clip-art-icon-vector.jpg" /></button>
      </div>

      <div className='col-span-1 flex mx-2 my-1'>
      <img 
        className='h-8 '
        alt="bellIcon"
        src='https://static.thenounproject.com/png/3750242-200.png'
        />
        <img 
        className='h-7 mx-4'
        alt="bellIcon"
        src='https://static.vecteezy.com/system/resources/thumbnails/002/359/770/small/bell-icon-free-vector.jpg'
        />
        <img 
        className='h-8 '
        alt='user'
         src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' 
         />

      </div>


    </div>
  )
}

export default Head