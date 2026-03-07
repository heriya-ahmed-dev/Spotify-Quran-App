import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

import AllInclusiveOutlinedIcon from '@mui/icons-material/AllInclusiveOutlined';
import './App.css'
import Albums from './Albums';


const Header = () => {
  return (
    <div className='w-25  text-white '>
    <div>
        <div className=''>
          <div className=' text-white  p-3'>
            <div className='bg-dark mb-3'>
              <div className='d-flex  gap-2 mb-2 bg-dark'>
                   <div className=''><HomeOutlinedIcon sx={{fontSize : 30}}/> </div>
                       <div><h3 className='ms-2 fs-6 pt-1'>Home</h3></div>
             </div>

        <div className='d-flex  gap-2 bg-dark'>
            <div className=''><SearchOutlinedIcon sx={{fontSize : 30}}/> </div>
                <div><h3 className='ms-2 fs-6 pt-1'>Search</h3></div>
        </div>
            </div>


        <div>
          <div className='d-flex gap-2 bg-dark justify-content-between'>
            <div className=''>
              <div className='me-3 d-flex gap-2' ><BookmarksOutlinedIcon sx={{fontSize : 30}}/> 
                   <h3 className='m-1 fs-6 '>Your library</h3>
              </div>
            </div>
            <div>
            <ArrowForwardOutlinedIcon/>
            <AddOutlinedIcon/>
            </div>
           </div>
        </div>
    
       <div className='bg-dark ps-3 mt-2 pt-2'>
         <div>
              <h6 className='pb-0 mb-0 fs-6'>Create your first Playist</h6>
              <p className='pt-0 mt-0 fs-6 fw-light'>It's easy we will help you</p>
              <button className='rounded-5 mb-2 text-center fs-6'>Create playist</button> 
         </div>
       </div>
  
      <div className='bg-dark ps-3 mt-2 pt-2 mb'>
         <div>
              <h6 className='pb-0 mb-0'>let's findsome podcasts to follow</h6>
              <p className='pt-0 mt-0 fw-light'>We'll keep you upadte on new episodes</p>
              <button className='rounded-5 mb-2 text-center'>Browse Podcasts</button> 
         </div>
         </div>
       </div>

       
     

        </div>

        
        

        </div>




    </div>
  )
}

export default Header