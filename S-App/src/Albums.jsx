import React from 'react';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import image5 from './images/image5.png';
import Top from './Top.jsx'
import './App.css'

const Albums = () => {
  return (
    <div>
        <Top/>
    <div className='d-flex overflow-hidden '>
    
    <div>
      <img src={image1} className='w25 '/>   
    </div>

     <div>
      <img src={image2} className='w25 '/>   
    </div>

     <div>
      <img src={image3} className='w25 '/>   
    </div>

     <div>
      <img src={image4} className='w25 '/>   
    </div>

     <div>
      <img src={image5} className='w25 '/>   
    </div>

   </div>
</div>
  )
}

export default Albums