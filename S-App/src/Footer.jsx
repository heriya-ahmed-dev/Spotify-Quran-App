 import React from 'react';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
// import images1 from'./images/ramadan-holy-month-greeting-poster.jpg'
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import image1 from './images/image1.png';

import './App.css'
 
 const Footer = () => {
   return (
     <div className='d-flex justify-content-between mt-5'>
        
          <div className='d-flex gap-2  text-center mb-3'>
             <div className='d-flex gap-2 '>
                <div>
                   <img src={image1} className='image1'/>
                </div>
               <div className='pt-2 text-secondary'>
                 <p className='mb-0'>Listen one</p>    
                 <p className='mt-0'>Put Smile</p>  
              </div>
           </div>     
         </div>
          
          <div>
          
              <div className=' position-absolute start-50 translate-middle-x mb-3'>
              <div className='position-absolute top-100 start-50 translate-middle '>
                    <hr className="h" style={{width:'500px', height:'5px', backgroundColor:'white', border:'none'}} />
               </div> 

               <div className=" d-flex justify-content-center gap-3 text-white mt-3">
                  
                      <SkipPreviousIcon />
                      <PlayArrowIcon/>
                      <PauseOutlinedIcon/>
                      <SkipNextIcon/>
                      <LoopOutlinedIcon />

               </div>
            </div>
         </div>



     </div>
   )
 }
 
 export default Footer;
 


 
 
 
 
 




       