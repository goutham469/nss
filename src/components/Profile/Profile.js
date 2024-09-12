import React, { useEffect, useState } from 'react'
import { MdOutlineEdit } from "react-icons/md";
import './Profile.css'

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { FaBirthdayCake } from "react-icons/fa";

function Profile1({data}){
  return <div className='ProfileMini'>
    <div className='toDisplayFlexAround'>
      <img src={data.profilePicture} alt='picture'/>
      <div>
        <b>{data.name}</b>
        <br/>
        <p>id : {data.roolNo}</p>
        <p>email : {data.alternateEmail}</p>
        <p>college-email : {data.collegeEmail}</p>
      </div>
    </div>
    <center>
      <div className='edit-button'>
        <MdOutlineEdit size={20} className='edit-icon-profile'/>
        <b>edit details</b>
      </div>
    </center>
  </div>
}
function Profile2({data}){
  return <div className='toDisplayFlexAround'>
    <div className='ProfileMini'>
      <p>Branch : <b>{data.branch ? data.branch : "Not set"}</b></p>
      <p>Section : <b>{data.section ? data.section : "Not set"}</b></p>
      <br/>
      <p>
        <FaBirthdayCake size={20}/>
        <b> {data.dateOfBirth}</b>
      </p>
      <br/>
      <p style={{textAlign:"left"}}>Contact numbers</p>
      <ol style={{listStylePosition:"inside",textAlign:"left"}}>
        {
          data.phone&&data.phone.map((number,idx)=><li key={idx}>{number}</li>)
        }
      </ol>
      <br/>
      <p>Blood group : {data.bloodGroup ? data.bloodGroup :"Not set"}</p>

      <center>
        <div className='edit-button'>
          <MdOutlineEdit size={20}  className='edit-icon-profile'/>
          <b>edit details</b>
        </div>
      </center>
    </div>
  </div>
}

function Profile3({data}){
  const [status,setStatus] = useState(1)

  return <center className='ProfileMini'>
            <center><b>Attendence : {data.attendence?data.attendence:'Na'}</b></center>
            <center>
            
            <button onClick={()=>{status==1?setStatus(2):setStatus(1)}} className='edit-button'>
              <HiArrowPathRoundedSquare size={20} style={{position:"relative",top:"5px",right:"5px"}}/>
              {status==1?"attendenceMeetings":"attendenceEvents"}
            </button>
            {
              status == 1 ?
              <div>
                {
                  data.attendenceMeetings ?
                  <table>
                    <thead>
                      <th>s.no</th>
                      <th>name</th>
                      <th>status</th>
                      <th>credits</th>
                    </thead>
                    <tbody>
                      {
                        data.attendenceMeetings.map((data,idx)=><tr>
                          <td>{idx+1}</td>
                          <td>{data.name}</td>
                          <td>{data.status}</td>
                          <td>{data.credits}</td>
                        </tr>)
                      }
                    </tbody>
                  </table>
                  :
                  <b>Not available</b>
                }
              </div>
              :
              <div>
                {
                  data.attendenceEvents ?
                  <table>
                    <thead>
                      <th>s.no</th>
                      <th>name</th>
                      <th>status</th>
                      <th>credits</th>
                    </thead>
                    <tbody>
                      {
                        data.attendenceEvents.map((data,idx)=><tr>
                          <td>{idx+1}</td>
                          <td>{data.name}</td>
                          <td>{data.status}</td>
                          <td>{data.credits}</td>
                        </tr>)
                      }
                    </tbody>
                  </table>
                  :
                  <b>Not available</b>
                }
              </div>
            }
            </center>
          </center>
}

function Profile4({data}){
  return <div >
            <center className='ProfileMini'>
              <center><b>Social Profiles</b></center>
              <div>
                <div>
                  <FaInstagram color='red' size={20} style={{position:"relative",top:"5px",right:"10px"}}/>
                  <label>{data.socialProfiles&&data.socialProfiles.instagram ? data.socialProfiles.instagram : "not set"}</label>
                </div>
                <div>
                  <FaFacebook color='#0a7ee8' size={20} style={{position:"relative",top:"5px",right:"10px"}}/>
                  <label>{data.socialProfiles&&data.socialProfiles.facebook ? data.socialProfiles.facebook : "not set"}</label>
                </div>
                <div>
                  <FaWhatsapp color='green' size={20} style={{position:"relative",top:"5px",right:"10px"}}/>
                  <label>{data.socialProfiles&&data.socialProfiles.whatsApp ? data.socialProfiles.whatsApp : "not set"}</label>
                </div>
                <div>
                  <FaSquareXTwitter color='black' size={20} style={{position:"relative",top:"5px",right:"10px"}}/>
                  <label>{data.socialProfiles&&data.socialProfiles.twitter ? data.socialProfiles.twitter : "not set"}</label>
                </div>
                <div>
                  <FaLinkedin color='#0a66c2' size={20} style={{position:"relative",top:"5px",right:"10px"}}/>
                  <label>{data.socialProfiles&&data.socialProfiles.linkedIn ? data.socialProfiles.linkedIn : "not set"}</label>
                </div>
                <div>
                  <CiGlobe color='white' size={20} style={{position:"relative",top:"5px",right:"10px"}}/>
                  <label>{data.socialProfiles&&data.socialProfiles.website ? data.socialProfiles.website : "not set"}</label>
                </div>
              </div>
              <div className='edit-button'>
                <MdOutlineEdit size={20}  className='edit-icon-profile'/>
                <b>edit details</b>
              </div>
            </center>
          </div>
}
function Profile() {
  const [userData,setUserData] = useState({})

  useEffect(()=>{

    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/volunteers/get-volunteer-details/?rollNo=${localStorage.getItem("rollNo")}`)
    .then(data=>data.json())
    .then(data=>{
      if(data.status == false){
        alert('data not found')
      }else{
        setUserData(data)
      }
    })
  },[])

  return (
    <div>
      <center>Volunteer Profile</center>
      <center>
        <Profile1 data={userData} />
        <Profile2 data={userData} />
        <Profile3 data={userData} />
        <Profile4 data={userData} />
      </center>
    </div>
  )
}

export default Profile