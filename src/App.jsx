import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';

import Footer from './Components/Footer/Footer';
import AppDownload from './Components/Appdownload/AppDownload';





function App() {
  return (
    <>
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        
       
      </Routes>
       <AppDownload/>
      <Footer/>
     
    </div>
    </>
  );
}

export default App;