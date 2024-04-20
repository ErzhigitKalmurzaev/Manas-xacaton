import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import CommissionLayout from '../layout/CommissionLayout'
import ExamsDetailPage from '../pages/ExamsDetailPage';
import ExamsPage from '../pages/ExamsPage';
import QuestionnairesPage from '../pages/QuestionnairesPage'
import RatingPage from '../pages/RatingPage';
import ApplicationDetailPage from '../pages/Moderator/ApplicationDetailPage';

const CommissionRoute = () => {

  return (
    <Routes>
        <Route path='/' element={<CommissionLayout/>}>
            <Route index element={<Navigate to="rating" />} /> 
            <Route path="rating" element={<RatingPage />} />  
            <Route path="questionnaires" element={<QuestionnairesPage />} /> 
            <Route path="exams" element={<ExamsPage />} /> 
            <Route path="exams/detail" element={<ExamsDetailPage />} /> 
        </Route>
    </Routes>
  )
}

export default CommissionRoute
