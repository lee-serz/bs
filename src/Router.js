import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Screens/Home'
import Users from './Screens/Users'
import About from './Screens/About'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/about' element={<About/>}/>
    </Routes>
  )
}

export default Router