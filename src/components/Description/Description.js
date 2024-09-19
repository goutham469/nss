import React from 'react'
import './Description.css'
import { HeroTextBarsData,OurReach,events } from '../Constants'
import Images from '../Media'
import ImagesBar from '../ImagesBar/ImagesBar'
import Reach from '../Reach/Reach'
import EventMini from '../EventMini/EventMini'

function HeroTextBars({data})
{
    return <div  className='hero-text-bars' >
                <b>{data.question}</b><br/>
                <p>{data.answer}</p>
            </div>
}


function Description() {
  return (
    <div style={{textAlign:"center"}}>
        <ImagesBar/>
        <div id='about' style={{paddingTop:"10vh"}}>
            <center>
                <b style={{fontSize:"30px"}}>About</b>
                {
                    HeroTextBarsData.map(data=><HeroTextBars data={data}/>)
                }
            </center>
        </div>
        <center id='reach' style={{paddingTop:"10vh"}}>
            <b style={{fontSize:"30px"}}>Our Reach</b>
            <div style={{display:"flex",justifyContent:"space-between",maxWidth:"600px",flexWrap:"wrap",border:"5px solid black",borderRadius:"10px",padding:"20px"}}>
                {
                    OurReach.map(data=><Reach data={data}/>)
                }
            </div>
        </center>
        <br/>
        <br/>
        <center id='events'style={{paddingTop:"10vh"}}>
            <b style={{fontSize:"30px"}}>events</b>
            <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
                {
                    events.map(event=><EventMini data={event}/>)
                }
            </div>
        </center>
    </div>
  )
}

export default Description