import React from 'react';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Album1 from './Album1.jsx';
import Alb0 from './inner1/alb0.jsx';
import Alb1 from './inner1/alb1.jsx';
import Alb2 from './inner1/alb2.jsx';
import Alb3 from './inner1/alb3.jsx';
import Alb4 from './inner1/alb4.jsx';
const App = () => {
  return (
     
    <BrowserRouter>
    <div>
      <div className='d-flex'>
      <Header/>
      <Routes>
        <Route path="/" element={<Album1 />} />
         <Route path="/first" element={<Alb0/>}></Route>
         <Route path = "/Second" element={<Alb1/>}></Route>
         <Route path = "/Third" element={<Alb2/>}></Route>
         <Route path = "/Fourth" element={<Alb3/>}></Route>
         <Route path = "/Fifth" element={<Alb4/>}></Route>

       
      </Routes>
      </div>
      <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App;