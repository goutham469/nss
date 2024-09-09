import React from 'react'
import AdminHeader from '../Header/AdminHeader'
import { Outlet } from 'react-router-dom'

function AdminMain() {
  return (
    <div>
        <AdminHeader/>
        <Outlet/>
    </div>
  )
}

export default AdminMain