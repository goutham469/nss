import React, { useState } from 'react'
import AdminHeader from '../Header/AdminHeader'
import { Outlet } from 'react-router-dom'
import AdminLogin from '../Login/AdminLogin';


function AdminMain() {
  const [login,setLogin] = useState(localStorage.getItem("adminLoginStatus"));

  return (
    <div>
        {
          login ?
            <div>
              <AdminHeader/>
              <div style={{paddingTop:"50px",color:"white"}}>
                <Outlet/>
              </div>
            </div>
          :
          <AdminLogin/>
        }
    </div>
  )
}

export default AdminMain