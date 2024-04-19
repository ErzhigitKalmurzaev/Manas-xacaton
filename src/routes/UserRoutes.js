import styled from '@emotion/styled'
import React from 'react'
import { Route, Routes } from 'react-router'
import UserLayouts from '../layout/UserLayouts'
import MainPage from '../pages/UserPages/MainPage'
import StudentApplicationForm from '../components/StudentApplicationForm'
import RegistrationPage from '../pages/RegistrationPage'

const UserRoutes = () => {

  return (
    <Routes>
        <Route path='/' element={<UserLayouts/>}>
          <Route path='' element={<MainPage/>}/>
          <Route path='form' element={<StudentApplicationForm/>}/>
          <Route path='registration' element={<RegistrationPage/>}/>
        </Route>
    </Routes>
  )
}

export default UserRoutes
