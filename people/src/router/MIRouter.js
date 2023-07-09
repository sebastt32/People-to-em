import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Listado from '../components/Listado'
import Gestion from '../components/Gestion'

const MIRouter = () => {
  return (
    <Routes>
        
        <Route path='/' element={<Listado/>}></Route>
        <Route path='/candidatos' element={<Listado/>}></Route>
        <Route path='/gestion' element={<Gestion/>}></Route>
        <Route path='*' element={<Listado/>}></Route>
    </Routes>
  )
}

export default MIRouter
