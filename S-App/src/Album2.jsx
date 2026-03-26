import React from 'react'
import QuranItems from './assets/assets2.js'
import './App.css'


const Album2 = () => {
  return (
    <div>
    <div className='d-flex w-50 gap-1'>
      {QuranItems.map((items)=>(
        <div  key={items.id}  className='LB h-50 rounded-3  btn btn-outline-secondary gap-2' >
          <img src={items.image} className='w25'/>
          <p className='w25 text-white'>{items.Description}</p>
           <a href={items.num}>more</a>
          </div>
      ))}

    </div>
    </div>
  )
}

export default Album2;