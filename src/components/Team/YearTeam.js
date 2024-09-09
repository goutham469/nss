import React, { useState } from 'react'
import { teamNSS } from '../Constants';

import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosGlobe } from "react-icons/io";
import { MdOutlinePersonOutline } from "react-icons/md";


function FacultySeniorCard({data})
{
    return  <div style={{margin:"10px",backgroundColor:"#6b6b6b",borderRadius:"10px",padding:"5px",width:"fit-content",width:"250px",height:"300px"}}>
                {
                    data.image ?
                    <img src={data.image} alt='image' width="250px"/>
                    :
                    <MdOutlinePersonOutline color='black' size={170}/>
                }
                <br/>
                <b>{data.name}</b>
                <div>
                    <FaFacebook color='black' style={{margin:"5px"}} onClick={()=>window.open(data.SocialProfiles.facebook)}/>
                    <FaLinkedin color='black' style={{margin:"5px"}} onClick={()=>window.open(data.SocialProfiles.linkedIn)}/>
                    <MdOutlineMail color='black' style={{margin:"5px"}} onClick={()=>window.open(data.SocialProfiles.email)}/>
                    <AiFillInstagram color='black' style={{margin:"5px"}} onClick={()=>window.open(data.SocialProfiles.instagram)}/>
                    <IoIosGlobe color='black' style={{margin:"5px"}} onClick={()=>window.open(data.SocialProfiles.portfolio)}/>
                </div>
                <p>{data.phone}</p>
            </div>
}

function VolunteerCard({data})
{
    return <div style={{backgroundColor:"#6b6b6b",width:"200px",textAlign:"left",padding:"3px",borderRadius:"3px",margin:"5px"}}>
                {
                    data.image?
                    <img src={data.image} width="100px" style={{borderRadius:"40px"}}/>
                    :
                    <MdOutlinePersonOutline size={20} style={{backgroundColor:"black",borderRadius:"10px",position:"relative",top:"5px",marginRight:"10px"}}/>
                }
                <b>{data.name}</b>
            </div>
}

function YearTeam({year}) {
    
  return (
    <div>
        <center>
            <h3>NSS Team : {year}</h3>
        </center>
        {
            teamNSS.filter(data=>()=>data.year==year).map(team=><div style={{textAlign:"center"}}>
                <b>Incharge faculty</b>
                <br/>
                <center>
                    <FacultySeniorCard data={team.InChargeFaculty}/>
                </center>
                <br/>
                <div style={{display:"flex",justifyContent:"space-around"}}>
                    {
                        team.facultyCoOrdinators.map(data=><FacultySeniorCard data={data}/>)
                    }
                </div>
                <br/>
                <div>
                    <b>volunteers : {team.volunteersCount}</b><br/>
                    <b>events conducted : {team.eventsConducted}</b>
                </div>
                <div>
                    <center><b>Domains</b></center>
                    {
                        team.domains.map(domain=><div>
                            <b>{domain.name}</b>
                            <br/>
                            <label>volunteers : {domain.volunteersCount}</label><br/>
                            <b>senior mentees</b>
                            <div style={{display:"flex",justifyContent:"space-around"}}>
                                {
                                    domain.menteeSeniors.map(data=><FacultySeniorCard data={data}/>)
                                }
                            </div>
                            <div>
                                {
                                    domain.volunteers.map(data=><VolunteerCard data={data}/>)
                                }
                            </div>
                        </div>)
                    }
                </div>
            </div>)
        }
    </div>
  )
}

export default YearTeam;