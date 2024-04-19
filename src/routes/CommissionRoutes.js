import React from 'react'
import { Route, Routes } from 'react-router'
import CommissionLayout from '../layout/CommissionLayout'
import ExamsDetailPage from '../pages/ExamsDetailPage';
import ExamsPage from '../pages/ExamsPage';
import QuestionnairesPage from '../pages/QuestionnairesPage'
import RatingPage from '../pages/RatingPage';

const CommissionRoute = () => {

  return (
    <Routes>
        <Route path='/' element={<CommissionLayout/>}>
            <Route path="rating" element={<RatingPage />} />  
            <Route path="questionnaires" element={<QuestionnairesPage />} /> 
            <Route path="exams" element={<ExamsPage />} /> 
            <Route path="exams/detail" element={<ExamsDetailPage />} /> 
        </Route>
    </Routes>
  )
}

export default CommissionRoute
