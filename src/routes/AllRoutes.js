import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLayouts from '../layout/UserLayouts'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/*' element={
            <UserLayouts/>
        } />
    </Routes>
  )
}

export default AllRoutes
