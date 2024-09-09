import React from 'react'
import { useNavigate,Outlet } from 'react-router-dom'

function Team() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
          <header style={{display:"flex",justifyContent:"space-around",width:"500px"}}>
              <nav onClick={() => navigate('./year-2024')}>2024</nav>
              <nav onClick={() => navigate('./year-2023')}>2023</nav>
              <nav onClick={() => navigate('./year-2022')}>2022</nav>
              <nav onClick={() => navigate('./year-2021')}>2021</nav>
              <nav onClick={() => navigate('./year-2020')}>2020</nav>
          </header>
          <div>
              <Outlet/>
          </div>
      </div>
    </div>
  )
}

export default Team