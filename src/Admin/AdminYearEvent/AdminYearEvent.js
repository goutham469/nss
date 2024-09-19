import React, { useEffect, useState } from 'react'
import './AdminNewEvent.css'

function UploadImages({event,setAddImage})
{
    function FileUpload(){
        const [source,setSource] = useState('')
        async function Upload(event)
        {
            let imageFile = event.target.files[0];
            console.log(imageFile);
            // setAddImage()
        }
        return <form>
                    <b>Upload a Image File</b><br/>
                    <img src={source?source:''}/>
                    <input 
                    onChange={(event)=>Upload(event)}
                    type='file' 
                    accept='image/jpg,image/png,image/jpeg'/>
                </form>
    }
    function LinkUpload(){
        const [link,setLink] = useState()
        async function Upload(event)
        {
            event.preventDefault();
            console.log(link)
            setAddImage()
        }
        return <form>
                    <b>paste the link below</b>
                    <br/>
                    <img src={link}/>
                    <input
                    type='text'
                    onChange={(event)=>setLink(event.target.value)}
                    />
                    <br/>
                    <button onClick={(event)=>Upload(event)}>Upload</button>
                </form>
    }

    const [state,setState] = useState(0)
    return <div>
        <navbar>
            <button onClick={()=>setState(1)}>Upload File</button>
            <button onClick={()=>setState(2)}>Upload via <b>link</b></button>
            <button>Bulk upload</button>
        </navbar>
        <div>
            {
                state == 0 ?
                <b>Choose any one Above option !</b>
                :
                state == 1 ?
                <FileUpload />
                :
                <LinkUpload />
            }
        </div>
    </div>
}

function EditEventForm({data,handleClick}){
    console.log(data)
    const [formData,setFormData] = useState({})
    const [addImage,setAddImage] = useState(0)

    const styles = {
        textarea:{width:"300px",height:"150px",padding:"10px"},
        para:{width:"300px",padding:"10px"}
    }
    
    async function saveChanges(event)
    {
        event.preventDefault();
        console.log(formData)
        alert("changes saved") 
        handleClick(event);  
    }
    useEffect(()=>{
        setFormData(data)
    },[])
    return <div>
        <label>event name : <b>{formData.name}</b></label><br/>
        <input 
            value={formData.name} 
            onChange={(event)=>setFormData(x=>({...x,name:event.target.value}))}
            type='text'/>
        <br/>
        <label>Hero Image</label>
        <br/>
        <img src={formData.heroImage} width="300px"/>
        <br/>
        <label>start Date : {formData.dateStarted}</label>
        <input 
        type='date'
        onChange={(event)=>setFormData(x=>({...x,dateStarted:event.target.value}))}/>
        <br/>
        <label>End Date : {formData.dateEnded}</label>
        <input 
        type='date'
        onChange={(event)=>setFormData(x=>({...x,dateEnded:event.target.value}))}/>
        <br/>

        <label>description : <br/><p style={styles.para}>{formData.description}</p> </label><br/>
        <textarea 
            style={styles.textarea}
            value={formData.description} 
            onChange={(event)=>setFormData(x=>({...x,description:event.target.value}))}
            />
        <br/>
        <label>eventAchievements : <br/> <p style={styles.para}>{formData.eventAchievements}</p> </label><br/>
        <textarea 
            style={styles.textarea}
            value={formData.eventAchievements} 
            onChange={(event)=>setFormData(x=>({...x,eventAchievements:event.target.value}))}
            />
        <br/>
        <br/>

        <b>images</b>
        <div style={{maxWidth:"1000px"}}>
            {
                formData.images&&formData.images.map(image=><img src={image.url} alt={image.alt} style={{width:"200px",margin:"10px"}}/>)
            }
        </div>
        <br/>
        {
            addImage ?
            <UploadImages setAddImage={setAddImage} event={formData}/>
            :
            <button onClick={()=>setAddImage(true)}>Add more images</button>
        }
        <br/>

        <button onClick={(event)=>saveChanges(event)}>SAVE CHANGES</button>
    </div>
}

function EventDetails({event})
{
    const [state,setState] = useState(false)
    function handleClick(event){
        event.preventDefault();
        state?setState(false):setState(true);
    }
    return <div className='Admin-event-details'>
                {
                    state ?
                    <EditEventForm data={event} handleClick={handleClick}/>
                    :
                    <div>
                        <button className='btn btn-success' onClick={(event)=>{handleClick(event)}}>EDIT deatails</button>
                        <br/>
                        <br/>
                        <img src={event.heroImage} style={{borderRadius:"50px"}} width="200px"/>
                        <br/>
                        <b>{event.name}</b>
                        <p>from {event.dateStarted} to {event.dateEnded}</p>
                        <p><b>description</b><br/>{event.description}</p>
                        <p><b>achievements <br/></b>{event.eventAchievements}</p>
                        <p>drive link <a href={`${event.driveLink}`}>link</a></p>
                        <h4>images</h4>
                        <div style={{width:"1000px"}}>
                            {
                                event.images&&event.images.map(image=><img src={image.url} alt={image.alt} style={{width:"300px",margin:"10px"}}/>)
                            }
                        </div>
                    </div>
                }
            </div>
}

function AdminYearEvent({data}) {
    console.log(data)
    let [eventData,setEventData] = useState({})
    async function fetchData()
    {
        let response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/events/all-events/?year=${data}`)
        response = await response.json()
        response = response[0]
        console.log(response)
        setEventData(response)
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div style={{textAlign:"center"}}>
        <b>Events of year : {data}</b>
        {
            eventData?
            <div>
                <b>events conducted : {eventData.eventsConducted}</b><br/>
                <b>events</b><br/>
                <center>
                    {
                        eventData.events&&eventData.events.map(event=><EventDetails event={event}/>)
                    }
                </center>
            </div>
            :
            <p>loading</p>
        }
    </div>
  )
}

export default AdminYearEvent