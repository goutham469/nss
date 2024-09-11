import React, { useState } from 'react'
import { detailedEvents } from '../Constants'
import './YearEvent.css'
import { IoMdClose } from "react-icons/io";


function Image({image})
{
    const [click,handleClick] = useState(false);

    const fullScreenStyles = {
        position: "fixed",
        top: 20,
        left: 20,
        width: "80vw",
        height: "90vh",
        zIndex: 1000,
        backgroundColor:"black",
        display:"flex",
        justifyContent:"space-around",
        padding:"10px"
      };
     
    return <div style={{width:"300px",height:"300px",border:"2px solid gold",borderRadius:"10px",margin:"5px"}}>
                {
                    click?
                    <div style={fullScreenStyles}>
                        <div>
                            <IoMdClose color='white' size={40}
                            onClick={()=>handleClick(false)}
                            />
                            <br/>
                            <img 
                            onClick={()=>handleClick(false)}
                            style={{height:"80vh"}}
                            src={image.url}
                            />
                            <br/>
                            <label>{image.description}</label>
                        </div>
                    </div>
                    :
                    <img 
                    width="300px" 
                    height="300px" 
                    style={{borderRadius:"8px"}} 
                    src={image.url} 
                    alt={image.alt}
                    onClick={()=>handleClick(true)}
                    />
                }
            </div>
}

function CompleteEvent({event})
{
    const styles = {
        "mainBox":{backgroundColor:"#454545",margin:"5px",padding:"10px",borderRadius:"10px",color:"white"},
        "card1":{width:"300px",backgroundColor:"#272626",padding:"8px",borderRadius:"5px",margin:"5px"}
    }
    return <div style={styles.mainBox}>
                <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",maxWidth:"1000px",flexWrap:"wrap"}}>
                    <img src={event.heroImage} alt='image' style={{width:"250px",height:"250px",borderRadius:"150px"}}/>
                    <div style={styles.card1}>
                        <b style={{color:"gold"}}>{event.name}</b>
                        <br/>
                        <p>{event.description}</p>
                        <br/>
                        <label>Started on :- {event.dateStarted}</label>
                        <br/>
                        <label>Ended on :-  {event.dateEnded}</label><br/><br/>
                        <label>places visited : {event.placesVisited}</label>
                        <br/><br/>
                        <div>
                            <b style={{color:"gold"}}>event achievements</b>
                            <p>{event.eventAchievements}</p>
                        </div>
                        <br/>
                        <center>
                            <a href={`${event.driveLink}`} style={{color:"white"}}>drive link</a>
                        </center>
                    </div>
                </div>
                <br/>
                <br/>
                <div>
                    <center>
                        <h2 style={{color:"gold"}}>Images</h2>
                    </center>
                    <br/>
                    <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
                        {
                            event.images.map(image=><Image image={image}/>)
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
                <center>
                    <div>
                        <b style={{color:"red",fontSize:"24px"}}>year : {data.year}</b>
                        <br/>
                        <b style={{color:"pink"}}>events conducted : {data.eventsConducted}</b>
                    </div>
                </center>
                <div className='YearEvent-all-events'>
                    {
                        data.events.map(event=><CompleteEvent event={event}/>)
                    }
                </div>
            </div>)
        }
        {
            detailedEvents.filter(x=>check(x.year)).length == 0 && <div>
                <b style={{fontSize:"40px"}}>for the year {year}, Data is not updated.</b>
            </div>
        }
    </div>
  )
}

export default YearEvent