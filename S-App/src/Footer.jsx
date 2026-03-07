 import React from 'react';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import images1 from'./images/ramadan-holy-month-greeting-poster.jpg'

import SlideshowSharpIcon from '@mui/icons-material/SlideshowSharp';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AutoAwesomeMotionOutlinedIcon from '@mui/icons-material/AutoAwesomeMotionOutlined';
import SpeakerPhoneOutlinedIcon from '@mui/icons-material/SpeakerPhoneOutlined';
import './App.css'
 
 const Footer = () => {
   return (
     <div className='d-flex justify-content-between'>
        
          <div className='d-flex gap-2  text-center mb-3'>
             <div className='d-flex gap-2 '>
                <div>
                   <img src={images1} className='image1'/>
                </div>
               <div className='pt-2 text-secondary'>
                 <p className='mb-0'>Listen one</p>    
                 <p className='mt-0'>Put Smile</p>  
              </div>
           </div>     
         </div>
          
          <div>
            <div className='text-white gap-3 center'>
                 <SkipPreviousOutlinedIcon  className='gap-3'/>
                 <PlayArrowOutlinedIcon/>
                 <SkipNextOutlinedIcon/>
                 <LoopOutlinedIcon/>
            </div><br/>
            <div className='position-relative'>
            <div className='position-absolute top-100 start-50 translate-middle '>
                    <hr className="hr text-white" />
            </div> 
            </div>
         </div>


            <div className='text-white mt'>
                <SlideshowSharpIcon/>
                <EditOutlinedIcon/>
                <AutoAwesomeMotionOutlinedIcon/>
                <SpeakerPhoneOutlinedIcon/>
            </div>

     </div>
   )
 }
 
 export default Footer
 


 
 
 
 
 




       