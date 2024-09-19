import React, { useState } from 'react'
import { teamNSS } from '../Constants';
import './Team.css'

import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosGlobe } from "react-icons/io";
import { MdOutlinePersonOutline } from "react-icons/md";


function FacultySeniorCard({data})
{
    const [hovered,setHovered] = useState(false);
    
    return  <div 
                className='team-nss-faculty-card' 
                onMouseEnter={()=>setHovered(true)} 
                onMouseLeave={()=>setHovered(false)}
                onClick={()=>hovered?setHovered(false):setHovered(true)}
                >
                {
                    !hovered ?
                    <div onMouseEnter={()=>setHovered(true)}>
                        {
                            data.image ?
                            <img src={data.image} alt='image' width="250px" />
                            :
                            <MdOutlinePersonOutline color='black' size={170}/>
                        }
                        <br/>
                        <b>{data.name}</b>
                    </div>
                    :
                    <div onMouseLeave={()=>setHovered(false)}>
                        {
                            data.image ?
                            <img src={data.image} alt='image' width="150px" />
                            :
                            <MdOutlinePersonOutline  color='black' size={120}/>
                        }
                        <br/>
                        <div style={{marginTop:"5em"}}>
                            <FaFacebook color='black' size={25} style={{margin:"5px",cursor:"pointer"}} onClick={()=>window.open(data.SocialProfiles.facebook)}/>
                            <FaLinkedin color='black' size={25} style={{margin:"5px",cursor:"pointer"}} onClick={()=>window.open(data.SocialProfiles.linkedIn)}/>
                            <MdOutlineMail color='black' size={25} style={{margin:"5px",cursor:"pointer"}} onClick={()=>window.open(data.SocialProfiles.email)}/>
                            <AiFillInstagram color='black' size={25} style={{margin:"5px",cursor:"pointer"}} onClick={()=>window.open(data.SocialProfiles.instagram)}/>
                            <IoIosGlobe color='black' size={25} style={{margin:"5px",cursor:"pointer"}} onClick={()=>window.open(data.SocialProfiles.portfolio)}/>
                        </div>
                        <p>{data.phone}</p>
                    </div>
                }
            </div>
}

function VolunteerCard({data})
{
    const [hoverd,setHovered] = useState(false)
    return <div 
                className='team-nss-volunteer-card' 
                onMouseEnter={()=>setHovered(true)} 
                onMouseLeave={()=>setHovered(false)}
                onClick={()=>hoverd?setHovered(false):setHovered(true)}
                >
                {
                    !hoverd ?
                    <div>
                        {
                            data.image?
                            <img src={data.image} width="170px" style={{borderRadius:"90px"}}/>
                            :
                            <MdOutlinePersonOutline size={170} style={{borderRadius:"90px",position:"relative",top:"5px",marginRight:"10px",backgroundColor:"#cccccc"}}/>
                        }
                        <br/>
                        <b>{data.name}</b>
                    </div>
                    :
                    <div>
                        {
                            data.image?
                            <img src={data.image} width="100px" style={{borderRadius:"90px"}}/>
                            :
                            <MdOutlinePersonOutline size={100} style={{borderRadius:"90px",position:"relative",top:"5px",marginRight:"10px",backgroundColor:"#cccccc"}}/>
                        }
                        <div style={{marginTop:"1em"}}>
                            <FaFacebook color='black' size={18} style={{margin:"5px",cursor:"pointer"}} onClick={()=>window.open(data.SocialProfiles.facebook)}/>
                            <FaLinkedin color='black' size={18} style={{margin:"5px",cursor:"pointer"}} onClick={()=>window.open(data.SocialProfiles.linkedIn)}/>
                            <MdOutlineMail color='black' size={18} style={{margin:"5px",cursor:"pointer"}} onClick={()=>window.open(data.SocialProfiles.email)}/>
                            <AiFillInstagram color='black' size={18} style={{margin:"5px",cursor:"pointer"}} onClick={()=>window.open(data.SocialProfiles.instagram)}/>
                            <IoIosGlobe color='black' size={18} style={{margin:"5px",cursor:"pointer"}} onClick={()=>window.open(data.SocialProfiles.portfolio)}/>
                        </div>
                        <p>{data.phone}</p>
                    </div>
                }
                
            </div>
}

function YearTeam({year}) {
    
  return (
    <div style={{marginBottom:"30vh"}}>
        <center>
            <h3>NSS Team : {year}</h3>
        </center>
        <br/>
        {
            teamNSS.filter(data=>()=>data.year==year).map(team=><div style={{textAlign:"center"}}>
                <b><b>Faculty co-ordinators</b></b>
                <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
                    {
                        team.facultyCoOrdinators.map(data=><FacultySeniorCard data={data}/>)
                    }
                </div>
                <br/>
               
                <div>
                    <b>Domains</b>
                    {
                        team.domains.map(domain=><div className='team-nss-domain-card'>
                                                    <b style={{fontSize:"30px",textAlign:"left",color:"blue"}}>{domain.name}</b>
                                                    <br/>
                                                    <br/>
                                                    {/* <label>volunteers : {domain.volunteersCount}</label><br/>
                                                    <b>senior mentees</b> */}
                                                    <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
                                                        {
                                                            domain.menteeSeniors.map(data=><VolunteerCard data={data}/>)
                                                        }
                                                    </div>
                                                    {/* <div>
                                                        {
                                                            domain.volunteers.map(data=><VolunteerCard data={data}/>)
                                                        }
                                                    </div> */}
                                                </div>)
                    }
                </div>
                <div>
                    <b>volunteers : {team.volunteersCount}</b><br/>
                    {/* <b>events conducted : {team.eventsConducted}</b> */}
                </div>
            </div>)
        }
    </div>
  )
}

export default YearTeam;