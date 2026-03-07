import React from 'react'
import QuranItems from './assets/assets'
import Top from './Top.jsx'
import './App.css'

const Album = () => {
  return (
    <div>
      <Top/>
    <div className='d-flex w-75 gap-1 '>
      {QuranItems.map((items)=>(
        <div  key={items.id}  className='bg-secondary bg-gradient h-75 rounded-3 ' >
          <img src={items.image} className='w25'/>
          <p className='w25 text-white'>{items.description}</p>
          </div>
      ))}

    </div>
    </div>
  )
}

export default Album