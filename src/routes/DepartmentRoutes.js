import React from 'react'
import {Route, Routes} from 'react-router-dom'
import ApplicationPage from '../pages/ApplicationPage'
import DepartmentLayout from '../layout/DepartmentLayout'
import RatingPage from '../pages/RatingPage'
import CommissionPage from '../pages/CommissionPage'
import QuestionnairesPage from '../pages/QuestionnairesPage'

const DepartmentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DepartmentLayout />} >
        <Route path="applications" element={<ApplicationPage />} />  
        <Route path="rating" element={<RatingPage />} />  
        <Route path="commission" element={<CommissionPage />} />  
        <Route path="questionnaires" element={<QuestionnairesPage />} />  
      </Route>       
    </Routes>
  )
}

export default DepartmentRoutes