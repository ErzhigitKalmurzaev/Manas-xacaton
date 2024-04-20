import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import ModeratorLayout from '../layout/ModeratorLayout'
import ApplicationPage from '../pages/ApplicationPage'
import ApplicationDetailPage from '../pages/Moderator/ApplicationDetailPage'
import ExamResultsUploadPage from '../pages/ExamResultsUploadPage'

const ModeratorRoutes = () => {

  return (
    <Routes>
        <Route path='/' element={<ModeratorLayout/>}>
            <Route index element={<Navigate to="applications" />} /> 
            <Route path='applications' element={<ApplicationPage/>}/>
            <Route path="applications/:id" element={<ApplicationDetailPage/>} /> 
            <Route path="exam_results" element={<ExamResultsUploadPage/>} /> 
        </Route>
    </Routes>
  )
}

export default ModeratorRoutes
