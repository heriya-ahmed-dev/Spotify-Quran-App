import React from 'react'
import QuranItems from './assets/assets1.js'
import Top from './Top.jsx'
import Album2 from './Album2.jsx'
import './App.css'


const Album1 = () => {
  return (
    <div>
      <Top/>
    <div className='d-flex w-50 gap-1'>
      {QuranItems.map((items)=>(
        <div  key={items.id}  className='LB h-50 rounded-3  btn btn-outline-secondary gap-2' >
          <img src={items.image} className='w25'/>
          <p className='w25 text-white'>{items.description}</p>
          <a href={items.num}>more</a>
          </div>
      ))}

    </div><br/>
    <p className='text-white m-1 fw-medium fs-5'>Todays biggest hits</p><br/>
    <Album2/>
    </div>
  )
}

export default Album1;