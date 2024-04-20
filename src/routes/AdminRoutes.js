import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import AdminLayout from '../layout/AdminLayout';
import DepartmentPage from '../pages/Departments/DepartmentsPage';

const AdminRoutes = () => {

  return (
    <Routes>
        <Route path='/' element={<AdminLayout/>}> 
            <Route index element={<Navigate to="departments" />} /> 
            <Route path="departments" element={<DepartmentPage />} />  
        </Route>
    </Routes>
  )
}

export default AdminRoutes
