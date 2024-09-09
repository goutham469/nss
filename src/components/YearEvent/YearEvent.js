import React from 'react'
import { detailedEvents } from '../Constants'


function CompleteEvent({event})
{
    return <div style={{backgroundColor:"#454545",margin:"10px",padding:"10px",borderRadius:"10px",color:"white"}}>
                <div style={{display:"flex",justifyContent:"space-around",maxWidth:"800px"}}>
                    <img src={event.heroImage} alt='image'/>
                    <div>
                        <b style={{color:"gold"}}>{event.name}</b>
                        <br/>
                        <p style={{width:"200px",backgroundColor:"black",padding:"3px",borderRadius:"5px",marginTop:"5px"}}>{event.description}</p>
                        <br/>
                        <label>started on : {event.dateStarted}</label>
                        <br/>
                        <label>ended on : {event.dateEnded}</label><br/>
                        <label>places visited : {event.placesVisited}</label>
                        <div style={{width:"200px",backgroundColor:"black",padding:"3px",borderRadius:"5px",marginTop:"5px"}}>
                            <b>event achievements</b>
                            <p>{event.eventAchievements}</p>
                        </div>
                        <a href={`${event.driveLink}`}>drive link</a>
                    </div>
                </div>
                <div>
                    <h3>Images</h3>
                    <div style={{display:"flex",justifyContent:"space-around"}}>
                        {
                            event.images.map(image=><div style={{width:"300px",height:"400px",border:"1px solid white"}}>
                                <img width="300px" src={image.url} alt={image.alt}/>
                                <br/>
                                <label>{image.description}</label>
                            </div>)
                        }
                    </div>
                </div>
            </div>
}

function YearEvent({year}) {
    console.log(year)
    function check(data)
    {
        console.log(data)
        return data == year
    }
  return (
    <div>
        {
            detailedEvents.filter(x=>check(x.year)).map(data=><div style={{padding:"20px"}}>
                <div>
                    <b>year : {data.year}</b>
                    <br/>
                    <b>events conducted : {data.eventsConducted}</b>
                </div>
                <div>
                    <h3>events</h3>
                    {
                        data.events.map(event=><CompleteEvent event={event}/>)
                    }
                </div>
            </div>)
        }
    </div>
  )
}

export default YearEvent