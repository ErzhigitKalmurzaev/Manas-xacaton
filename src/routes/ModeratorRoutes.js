import React from 'react'
import { Route, Routes } from 'react-router'
import ModeratorLayout from '../layout/ModeratorLayout'
import ApplicationPage from '../pages/ApplicationPage'
import ApplicationDetailPage from '../pages/Moderator/ApplicationDetailPage'

const ModeratorRoutes = () => {

  return (
    <Routes>
        <Route path='/' element={<ModeratorLayout/>}>
            <Route path='applications' element={<ApplicationPage/>}/>
            <Route path="applications/detail" element={<ApplicationDetailPage/>} /> 
        </Route>
    </Routes>
  )
}

export default ModeratorRoutes
