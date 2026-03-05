import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import AllInclusiveOutlinedIcon from '@mui/icons-material/AllInclusiveOutlined';
import './App.css'
import images1 from'./images/ramadan-holy-month-greeting-poster.jpg'


const Header = () => {
  return (
    <div>
        <div className='w-25 text-white h-100'>
        <div className='bg-dark mb-4'>
        <div className='d-flex p-2'>
        <div className='mr-3'><HomeOutlinedIcon sx={{fontSize : 32}}/> </div>
        <div><h3 className='ms-2 fs-6 pt-1'>Home</h3></div>
        </div>

        <div className='d-flex p-2'>
        <div className='mr-3'><SearchOutlinedIcon sx={{fontSize : 32}}/> </div>
        <div><h3 className='ms-2 fs-6 pt-1'>Search</h3></div>
        </div>
        </div>


        <div>
          <div className='d-flex bg-dark justify-content-between'>
            <div className=' p-2  '>
              <div className='mr-3 d-flex' ><BookmarksOutlinedIcon sx={{fontSize : 32}}/> 
                   <h3 className='ms-2 fs-6 pt-1'>Your library</h3>
              </div>
            </div>
            <div>
            <ArrowForwardOutlinedIcon/>
            <AddOutlinedIcon/>
            </div>
           </div>
        </div>
    
       <div className='bg-dark ps-3 mt-4 pt-2'>
         <div>
              <h6 className='pb-0 mb-0 fs-6'>Create your first Playist</h6>
              <p className='pt-0 mt-0 fs-6'>It's easy we will help you</p>
              <button className='rounded-5 mb-2 text-center fs-6'>Create playist</button> 
         </div>
       </div>
  
      <div className='bg-dark ps-3 mt-2 pt-2 mb-5'>
         <div>
              <h6 className='pb-0 mb-0'>let's findsome podcasts to follow</h6>
              <p className='pt-0 mt-0'>We'll keep you upadte on new episodes</p>
              <button className='rounded-5 mb-2 text-center'>Browse Podcasts</button> 
         </div>
       </div><br/><br/>

        <div className='d-flex'>
        <div className='d-flex'>
             <div>
                <img src={images1} className='image1'/>
             </div>
        <div className='pt-2 text-secondary'>
             <p className='mb-0'>Listen one</p>    
             <p className='mt-0'>Put Smile</p>  
        </div>
        </div>
         <div className='hr'>
           <hr className="flex-grow-1 mx-2 border-light" />
        </div>
        </div>
     
       


        </div>

        

  




    </div>
  )
}

export default Header