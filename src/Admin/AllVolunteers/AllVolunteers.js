import React, { useEffect, useState } from 'react'
import './AllVolunteers.css'

// {
//   _id: ObjectId('66df673e6957d504ba65a0a8'),
//   roolNo: '22071a12k0',
//   password: '123',
//   phone: [ '9398141936', '9398141900', '9398141911' ],
//   alternateEmail: 'gouth@gmail.com',
//   acCreatedOn: 'dd/mm/yyyy',
//   domain: 'out reach',
//   attendenceEvents: [],
//   attendenceMeetings: [],
//   profilePicture: 'url',
//   branch: '',
//   section: '',
//   year: '2022-2026',
//   dateOfBirth: 'dd/mm/yyyy',
//   socialProfiles: {
//     instagram: '',
//     facebook: '',
//     whatsApp: '',
//     twitter: '',
//     linkedIn: '',
//     website: ''
//   }
// }
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

function VolunteerCard({data,index,mainAttendence})
{
  function calculateEventAttendence(data)
  {
    let main = mainAttendence.attendenceEvents
    if(main&& main.length == 0)
    {
      return "100%"
    }
    else if(main && main.length > 0)
    {
      if(data.length == 0)
      {
        return "0%"
      }
      else
      {
        return `${data.length/main.length}`
      }
    }
    return "Na";
  }
  function calculateMeetingsAttendence(data)
  {
    let main = mainAttendence.attendenceMeetings
    if(main&& main.length == 0)
    {
      return "100%"
    }
    else if(main && main.length > 0)
    {
      if(data.length == 0)
      {
        return "0%"
      }
      else
      {
        return `${data.length/main.length}`
      }
    }
    return "Na";
  }
  function deleteAccount(event)
  {
    event.preventDefault();
    let rollNo = prompt("enter the volunteer roll no : ")
    if(rollNo == data.rollNo)
    {
      fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/admin/delete-volunteer-account`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({rollNo:data.rollNo})
      }).then(data=>data.json())
      .then(data=>console.log(data))
    }
    else{alert("deletion failed !")}
    
  }
  return <tr>
          <td>{index}.</td>
          <td>
            {
              data.profilePicture ?
              <img src={data.profilePicture} alt='no' width="70px" height="50px" style={{borderRadius:"10px"}}/>
              :
              <IoPersonCircleOutline size={40} />
            }
          </td>
          <td>{data.name}</td>
          <td>{data.rollNo}</td>
          <td>{data.year}</td>
          <td>{calculateEventAttendence(data.attendenceEvents)}</td>
          <td>{calculateMeetingsAttendence(data.attendenceMeetings)}</td>
          <td>{data.domain}</td>
          <td>{data.branch?data.branch:"-"}</td>
          <td>{data.section?data.section:'-'}</td>
          <td>{data.rollNo}@vnrvjiet.in</td>
          <td>{data.alternateEmail}</td>
          <td>{data.acCreatedOn.substring(0,10)}</td>
          <td>{data.dateOfBirth}</td>
          <td>{data.phone.map((phone,index)=><p>{index+1} . {phone}</p>)}</td>
          <td>{data.socialProfiles.instagram?data.socialProfiles.instagram:"-"}</td>
          <td>{data.socialProfiles.facebook?data.socialProfiles.facebook:"-"}</td>
          <td>{data.socialProfiles.whatsApp?data.socialProfiles.whatsApp:"-"}</td>
          <td>{data.socialProfiles.twitter?data.socialProfiles.twitter:"-"}</td>
          <td>{data.socialProfiles.linkedIn?data.socialProfiles.linkedIn:"-"}</td>
          <td>{data.socialProfiles.website?data.socialProfiles.website:"-"}</td>
          <td>{data.password}</td>
          <td>
            <button 
            onClick={(event)=>deleteAccount(event)}
            style={{backgroundColor:"#ff1000",border:"none",color:"white",padding:"5px",fontWeight:"500",fontSize:"16px",borderRadius:"5px"}}
            >delete</button>
          </td>
          
        </tr>
}

function AllVolunteers() {
  const [volunteers,setVolunteers] = useState([])
  const [mainAttendence,setMainAttencence] = useState({})
  const styles = {socialMediaLabel:{position:"relative",bottom:"5px",left:"5px"}}

  useEffect(()=>{
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/admin/all-volunteers`).
    then(data=>data.json()).then(data=>setVolunteers(data))
    
    // mainAttendence is of the format 
    // {attendenceEvents: [],attendenceMeetings: [],}
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/admin/get-main-attendence`)
    .then(data=>data.json())
    .then(data=>setMainAttencence(data))

  },[])
  return (
    <table className='all-volunteers-table'>
      <thead className='all-volunteers-table-head'>
        <th className='all-volunteers-table-head-data' style={{width:"40px"}}>S.no</th>
        <th className='all-volunteers-table-head-data' style={{width:"80px"}}>
          <IoPersonCircleOutline size={20} />
          <label>Picture</label>
        </th>
        <th className='all-volunteers-table-head-data' style={{width:"200px"}}>Name</th>
        <th className='all-volunteers-table-head-data' style={{width:"100px"}}>rool no</th>
        <th className='all-volunteers-table-head-data' style={{width:"80px"}}>Year</th>
        <th className='all-volunteers-table-head-data' style={{width:"90px"}}>events Attendence</th>
        <th className='all-volunteers-table-head-data' style={{width:"90px"}}>meeting Attendence</th>
        <th className='all-volunteers-table-head-data' style={{width:"100px"}}>domain</th>
        <th className='all-volunteers-table-head-data' style={{width:"80px"}}>branch</th>
        <th className='all-volunteers-table-head-data'  style={{width:"80px"}}>section</th>
        <th className='all-volunteers-table-head-data'  style={{width:"200px"}}>college email</th>
        <th className='all-volunteers-table-head-data'  style={{width:"270px"}}>personal email</th>
        <th className='all-volunteers-table-head-data' style={{width:"100px"}}>a/c created on</th>
        <th className='all-volunteers-table-head-data'  style={{width:"100px"}}>date of Birth</th>
        <th className='all-volunteers-table-head-data'>Contact numbers</th>
        <th className='all-volunteers-table-head-data'>
          <FaInstagram size={20}/>
          <label style={styles.socialMediaLabel}>Instagram</label>
        </th>
        <th className='all-volunteers-table-head-data'>
          <FaFacebook size={20}/>
          <label style={styles.socialMediaLabel}>Facebook</label>
        </th>
        <th className='all-volunteers-table-head-data'>
          <FaWhatsapp size={20}/>
          <label style={styles.socialMediaLabel}>Whats App</label>
        </th>
        <th className='all-volunteers-table-head-data'>
          <FaSquareXTwitter size={20}/>
          <label style={styles.socialMediaLabel}>twitter</label>
        </th>
        <th className='all-volunteers-table-head-data'>
          <FaLinkedin size={20}/>
          <label style={styles.socialMediaLabel}>linkedIn</label>
        </th>
        <th className='all-volunteers-table-head-data'>
          <CiGlobe size={20}/>
          <label style={styles.socialMediaLabel}>website</label>
        </th>
        <th>password</th>
        <th className='all-volunteers-table-head-data'>
          actions
        </th>
      </thead>
      <tbody>
        {
          volunteers.map((volunteer,index)=><VolunteerCard data={volunteer} index={index+1} mainAttendence={mainAttendence}/>)
        }
      </tbody>
    </table>
  ) 
}

export default AllVolunteers