import React from 'react'
import './AdminHeader.css'
import Images from '../../components/Media'
import { useNavigate } from 'react-router-dom'

function AdminHeader() {
    const naviagte = useNavigate();

  return (
    <div style={{display:"flex",justifyContent:"space-around"}} className='admin-header'>
        <div onClick={()=>naviagte('/admin')}>
            <img style={{width:"50px"}} src={Images.nssLogo}/>
        </div>
        <div style={{display:"flex",justifyContent:"space-around",padding:"10px"}}>
            <b className='admin-header-item' onClick={()=>naviagte("./events")}>events</b>
            <b className='admin-header-item' onClick={()=>naviagte("./all-volunteers")}>Volunteers</b>
            <b className='admin-header-item' onClick={()=>naviagte("./alumini")}>Alumini</b>
            <b className='admin-header-item' onClick={()=>naviagte("./publish-event-details")}>Post event</b>
            <b className='admin-header-item' onClick={()=>naviagte("./update-website")}>update website</b>
            <b className='admin-header-item' onClick={()=>naviagte("./add-event-details")}>add event details</b>
            <b className='admin-header-item' onClick={()=>naviagte("./create-form")}>create Form</b>
            <b className='admin-header-item' onClick={()=>naviagte("./domains")}>Domains</b>
            <b className='admin-header-item' onClick={()=>naviagte("./Attendence")}>Attendence</b>
        </div>
    </div>
  )
}


export default AdminHeader