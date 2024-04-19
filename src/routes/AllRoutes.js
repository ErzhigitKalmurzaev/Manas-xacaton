import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLayouts from '../layout/UserLayouts'
import DepartmentRoutes from './DepartmentRoutes'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<UserLayouts />}/>
      <Route path='/department/*' element={<DepartmentRoutes />}>     
      </Route>        
      
    </Routes>
  )
}

export default AllRoutes
