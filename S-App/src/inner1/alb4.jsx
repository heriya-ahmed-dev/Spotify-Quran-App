import React from 'react';
import QuranItem from '../assets/assets1';
import { useEffect } from 'react';

const Alb4 = () => {


     const firstItem = QuranItem[0];
     const secondItem = QuranItem[1];
     const thirdItem = QuranItem[2];
     const forthItem = QuranItem[3];
     const fifthItem = QuranItem[4];



       useEffect(()=>{
              document.body.style.background = fifthItem.bg_color;
            },[fifthItem]);
  return (


    <div> 
     <div className='d-flex gap-5'>
      <div className='mt-4 ms-5'>
        <div className='d-flex w-75 gap-1'>
          <div className='LB h-50 rounded-3 btn btn-outline-secondary text-center'>
            <img src={fifthItem.image} className='w50' alt="" />
            <p className='w50 text-white'>{fifthItem.description}</p>
          </div>
        </div>
      </div>

    <div className='m-5'>
      <h6>Playist</h6>
      <h1 className='fs-1 text fw-bold'>Listen Globally</h1>
      <h6>Your weekly upadate of the most listened Recite </h6>
      <h4>.A lot of recitation within this App</h4>
    </div>
  </div>
      <hr className='line' />


    <div className='d-flex justify-content-between '>

     <div>
      <div className='m-2'>
        <h5 className=''># Title</h5>
        <div className='d-flex gap-4'>
          <h6>1</h6>
          <img src={firstItem.image} className='smallimg' alt="" />
          <h6>Recite One</h6>
        </div>
      </div>

      <div className='m-2'>
        <div className='d-flex gap-4'>
          <h6>2</h6>
          <img src={secondItem.image} className='smallimg' alt="" />
          <h6>Recite Two</h6>
        </div>
      </div>

      <div className='m-2'>
        <div className='d-flex gap-4'>
          <h6>3</h6>
          <img src={thirdItem.image} className='smallimg' alt="" />
          <h6>Recite Three</h6>
        </div>
      </div>

      <div className='m-2'>
      
        <div className='d-flex gap-4'>
          <h6>4</h6>
          <img src={forthItem.image} className='smallimg' alt="" />
          <h6>Recite Four</h6>
        </div>
      </div>

      <div className='m-2'>
        <div className='d-flex gap-4'>
          <h6>5</h6>
          <img src={fifthItem.image} className='smallimg' alt="" />
          <h6>Recite Five</h6>
        </div>
      </div>
     </div>
    
  
      <div className='px-3 d-grid gap-3 mt-1'>
         <h5>Album</h5>
        <h6>Top 50 Global</h6>
        <h6>Top 50 Global</h6>
        <h6>Top 50 Global</h6>
        <h6>Top 50 Global</h6>
        <h6>Top 50 Global</h6>
    </div>
        <div className='d-grid gap-3'>
          <h5>Date Added</h5>
        <h6>5 Days ago</h6>
        <h6>10 Days ago</h6>
        <h6>1 month ago</h6>
        <h6>6 Days ago</h6>
        <h6>5 Days ago</h6>
        </div>
    
    <div className='d-grid gap-3'>
         <h5>Duration</h5>
        <h6>03:10</h6>
        <h6>04:30</h6>
        <h6>08:20</h6>
        <h6>02:30</h6>
        <h6>07:30</h6>
      </div>
    </div>
    </div>
  )
}

export default Alb4;