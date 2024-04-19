import React from 'react'
import { Route, Routes } from 'react-router'
import UserLayouts from '../layout/UserLayouts'
import MainPage from '../pages/UserPages/MainPage'
import StudentApplicationForm from '../components/StudentApplicationForm'

const UserRoutes = () => {

  return (
    <Routes>
        <Route path='/' element={<UserLayouts/>}>
          <Route path='' element={<MainPage/>}/>
          <Route path='form' element={<StudentApplicationForm/>}/>
        </Route>
    </Routes>
  )
}

export default UserRoutes
