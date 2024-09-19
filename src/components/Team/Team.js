import React, { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import './Team.css';
import Images from '../Media';

function TeamHeader(){
  const navigate = useNavigate()

  return <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}} className='team-nss-header'>
    <img 
    src={Images.nssLogo} 
    width="100px"
    onClick={()=>navigate('../')}
    style={{cursor:"pointer"}}
    />
    <b style={{fontSize:"30px"}}>Team NSS VNR VJIET</b>
  </div>
}

function Team() {
  const navigate = useNavigate();
  const [state, setState] = useState('2024'); // Initially setting to '2024'
  
  const styles = {
    clicked: { backgroundColor: 'black',color:"white" }
  };
  
  const years = ['2024', '2023', '2022'];

  return (
    <div>
      <TeamHeader />
      <div>
        <center>
          <header className='team-nss-navbar'>
            {
            years.map(year => (
                                <nav
                                  className='team-nss-nav-item'
                                  key={year}
                                  style={state === year ? styles.clicked : {}}
                                  onClick={() => { navigate(`./year-${year}`); setState(year); }}
                                >
                                  {year}
                                </nav>
                              ))
            }
          </header>
        </center>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Team;
