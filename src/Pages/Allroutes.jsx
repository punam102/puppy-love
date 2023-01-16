import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import Puppy from './Puppy'
import Search from './Search'

const Allroutes = () => {
  return (
    <Routes>
    <Route path='/' element={<Home/>}></Route>
     <Route path='/puppy' element={<Puppy/>}></Route>
     <Route path='/search' element={<Search/>}></Route> 
    </Routes>
  )
}

export default Allroutes
