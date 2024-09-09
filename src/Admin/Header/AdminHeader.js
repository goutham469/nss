import React from 'react'
import './AdminHeader.css'
import Images from '../../components/Media'
import { useNavigate } from 'react-router-dom'

function AdminHeader() {
    const naviagte = useNavigate();

  return (
    <div style={{display:"flex",justifyContent:"space-around"}} className='admin-header'>
        <div onClick={()=>naviagte('/admin')}>
            <img style={{width:"100px"}} src={Images.nssLogo}/>
        </div>
        <div style={{display:"flex",justifyContent:"space-around",padding:"10px"}}>
            <b className='admin-header-item'>events</b>
            <b className='admin-header-item'>Volunteers</b>
            <b className='admin-header-item'>Alumini</b>
            <b className='admin-header-item'>Post event</b>
            <b className='admin-header-item'>update website</b>
            <b className='admin-header-item'>add event details</b>
            <b className='admin-header-item'>create Form</b>
        </div>
    </div>
  )
}


export default AdminHeader