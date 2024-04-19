import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLayouts from '../layout/UserLayouts'
import DepartmentRoutes from './DepartmentRoutes'
import StudentApplicationForm from '../components/StudentApplicationForm'
import UserRoutes from './UserRoutes'
import ModeratorRoutes from './ModeratorRoutes'
import CommissionRoute from './CommissionRoutes'
import AdminRoutes from './AdminRoutes'

const AllRoutes = () => {


  return (
    <Routes>
      <Route path='/*' element={<UserRoutes />}/>
        <Route path='/test' element={<StudentApplicationForm />}></Route>  
        <Route path='/department/*' element={<DepartmentRoutes />}></Route>  
        <Route path='/moderator/*' element={<ModeratorRoutes />}/> 
        <Route path='/admin/*' element={<AdminRoutes />}/> 
        <Route path='/commission/*' element={<CommissionRoute />}> 
      </Route>        
      
    </Routes>
  )
}

export default AllRoutes
