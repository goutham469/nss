import React, { useState } from 'react'
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import './EventsMini.css'

function EventMini({data}) {
    const [hover,setHover] = useState(false)
  return (
    <div 
        onMouseLeave={()=>setHover(false)}
        className='event-mini-main-card'
     >
       
        {
            hover?
            <div
                onMouseLeave={()=>setHover(false)}
                onMouseEnter={()=>setHover(true)}
                style={{padding:"10px"}}
            >
                <b style={{color:"gold",fontSize:"26px",fontFamily:"sans-serif"}}>{data.name}</b>
                <br/>
                <br/>
                <p style={{textAlign:"justify",fontFamily:"cursive"}}>{data.description}</p>
                <button 
                onClick={()=>window.open(data.url,"_blank")}
                style={{backgroundColor:"green",color:"white",border:"none",borderRadius:"5px",marginTop:"10px",fontSize:"20px",padding:"5px"}}
                    >see more</button>
            </div>
            :
            <div className='event-card'>
                <img src={data.image} style={{width:"100%",borderTopLeftRadius:"20px",borderTopRightRadius:"20px",height:"300px"}}/>
                {/* <img src="https://drive.google.com/thumbnail?id=1Vlmw56NRwc6ySN0V7KV-7VRclfWpCrEr"/> */}
                {/* <iframe src={data.image} width="100%" borderRadius="10px"/> */}
                {/* <iframe src="https://drive.google.com/file/d/1d4R3rabNqvzQwf6bYcZ-IMw3y04krlEs/preview" width="100%" height="400px" borderRadius="10px"></iframe> */}
                <br/>
                <b  style={{fontFamily:"initial",fontSize:"20px"}}>{data.name}</b>
                <br/>
                <div
                onMouseLeave={()=>setHover(false)}
                onMouseEnter={()=>setHover(true)}
                style={{backgroundColor:"green",borderBottomRightRadius:"20px",borderBottomLeftRadius:"20px",padding:"10px",position:"relative",bottom:"-20px"}}
                >
                    <label style={{position:"relative",bottom:"10px",right:"10px",fontSize:"20px"}}>see more</label>
                    <BsArrowUpRightCircleFill size={30}
                    />
                </div>

            </div>
        }

    </div>
  )
}

export default EventMini