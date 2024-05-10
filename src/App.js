import React from 'react'
import { Home } from './pages/home'
import { Aboutus } from './pages/aboutus';
import { Route, Routes } from 'react-router-dom';
import { Destination } from './pages/destination';
import { Tips } from './pages/tips';
import { Contact } from './pages/contact';


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/aboutus' element={<Aboutus/>} />
      <Route path='/destination' element={<Destination/>} />
      <Route path='/tips' element={<Tips/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    </>
  )
}

export default App