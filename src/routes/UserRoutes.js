import styled from '@emotion/styled'
import React from 'react'
import { Route, Routes } from 'react-router'
import UserLayouts from '../layout/UserLayouts'
import MainPage from '../pages/UserPages/MainPage'

const UserRoutes = () => {

  return (
    <Routes>
        <Route path='/' element={<UserLayouts/>}>
          <Route path='' element={<MainPage/>}/>
        </Route>
    </Routes>
  )
}

export default UserRoutes
