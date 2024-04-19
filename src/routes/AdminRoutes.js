import React from 'react'
import { Route, Routes } from 'react-router'
import AdminLayout from '../layout/AdminLayout';
import DepartmentPage from '../pages/Departments/DepartmentsPage';

const AdminRoutes = () => {

  return (
    <Routes>
        <Route path='/' element={<AdminLayout/>}>  
            <Route path="departments" element={<DepartmentPage />} />  
        </Route>
    </Routes>
  )
}

export default AdminRoutes
