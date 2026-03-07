import React from 'react'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import './App.css'

const Top = () => {
  return (
    <div>
        <div>

        
        <div className='d-flex justify-content-between m-1 gap-1'>
           <div className='text-white '>
             <ArrowBackIosOutlinedIcon/>
              <ArrowForwardIosOutlinedIcon/>
          </div>
        <div>
       <button className='rounded-4'>Explore Preminum</button>
       <button className='rounded-5 black'>Install Apps</button>
       <button className='rounded-circle bg-primary'>G</button>
       </div>
      </div>
        <div className='d-flex gap-1 mt'>
     <button className='rounded-4'>All</button>
     <button className='rounded-4 black'>Music</button>
     <button className='rounded-4 black'>Podcasts</button>
        </div>
          <p className='text-white m-1  fw-medium fs-5'>Featured Charts</p>
          

     </div>


    </div>
  )
}

export default Top