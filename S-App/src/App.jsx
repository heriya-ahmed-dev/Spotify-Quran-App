import React from 'react'
import Header from './Header'
import Albums from './Albums'
import Footer from './Footer'
import Album from './Album.jsx'
const App = () => {
  return (
    <div>
    <div className='d-flex'>
      <Header/>
      <Album/>
      

      
      {/* <Albums/> */}
    </div>
      {/* <Footer/> */}
    </div>
  )
}

export default App