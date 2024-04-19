import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLayouts from '../layout/UserLayouts'
import DepartmentRoutes from './DepartmentRoutes'
import StudentApplicationForm from '../components/StudentApplicationForm'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<UserLayouts />}/>
      <Route path='/test' element={<StudentApplicationForm />}></Route>  
      <Route path='/department/*' element={<DepartmentRoutes />}>  
       
      </Route>        
      
    </Routes>
  )
}

export default AllRoutes
