import React from 'react'
import Header from './Header'
import Albums from './Albums'
import Footer from './Footer'
const App = () => {
  return (
    <div>
    <div className='d-flex'>
      <Header/>
      <Albums/>
    </div>
      {/* <Footer/> */}
    </div>
  )
}

export default App