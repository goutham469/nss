import React from 'react'
import './AddEventDetails.css'
import { Outlet, useNavigate } from 'react-router-dom'
import { detailedEvents } from '../../components/Constants';



async function addDetails(event)
{
    event.preventDefault();

    console.log(detailedEvents[0])

    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/events/new-event`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({event:detailedEvents[0]})
    }).then(data=>data.json())
    .then(data=>console.log(data))
    .then(data=>alert("check status"))
}

function AddEventDetails() {
    const navigate = useNavigate();

  return (
    <div>
        <center style={{fontSize:"26px"}}>Add Event or update event details</center>
        
        <center>
            <button onClick={()=>navigate('./new-event')}>
                Publish new event details
            </button>
            <br/><br/>

            <navbar className='add-event-deatils-navbar'>
                <nav className='add-event-details-nav-item' onClick={(event)=>navigate('./2024')}>2024</nav>
                <nav className='add-event-details-nav-item' onClick={(event)=>navigate('./2023')}>2023</nav>
                <nav className='add-event-details-nav-item' onClick={(event)=>navigate('./2022')}>2022</nav>
                <nav className='add-event-details-nav-item' onClick={(event)=>navigate('./2021')}>2021</nav>
                <nav className='add-event-details-nav-item' onClick={(event)=>navigate('./2020')}>2020</nav>
            </navbar>

            {/* <button onClick={(event)=>addDetails(event)}>add data</button> */}
        </center>
        <Outlet/>

    </div>
  )
}

export default AddEventDetails