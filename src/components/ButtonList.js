import React from 'react'
import Button from './Button'

const list = ["All", "Mixes", "Music", "Movies", "Live", "React","Stock Market", "Java", "Friends",
 "Chandler", "Suits", "Vampire Dairies"]

const ButtonList = () => {
  return (
    <div className='flex p-4 m-4 font-semibold '>
      {list.map((listItem, index) => (
         <Button  key={index} name={listItem}/>
      ))}
       
    </div>
  )
}

export default ButtonList