import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import React, { useState } from 'react'
import './SignUp.css'

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

import Images from '../Media'


function SignUpEmail({sendDataToParent})
{
  const [valid,setValid] = useState(0)

  async function onSuccess(response)
  {
    const email = jwtDecode(response.credential).email
    const rollNo = email.substring(0,10)
    console.log(rollNo)
    
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/volunteers/signup-check-roolno`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({rollNo:rollNo})
    }).then(data=>data.json())
    .then(data=>{
      if(data.message == "user exists"){
        sendDataToParent({"status":"success",email:email})
      }else{
        setValid(2)
      }
    })

  }

  return <div>
          {
            valid == 0 ?
            <div style={{textAlign:"center"}}>
              <b>Verify your College e-mail id</b><br/>
              <br/>
              <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}>
                <GoogleLogin onSuccess={onSuccess}/>
              </GoogleOAuthProvider>
            </div>
            :
            <div>
              <b style={{color:"red"}}>Seems you are not a Volunter !</b>
              <br/>
              <b>If you are genuine,<br/> Contact Website Admin to add your rool no.</b>
              <br/>
              <a href={`mailto:${process.env.REACT_APP_DEVELOPER_EMAIL}`}>you may send a mail to<br/> {process.env.REACT_APP_DEVELOPER_EMAIL}</a>
            </div>
          }
        </div>
}

function Details1({sendDataToParent})
{
  const [data,setData] = useState({})
  const styles = {
    label:{color:"black",padding:"5px",margin:"5px"},
    input:{border:"1px solid black",borderRadius:"10px",padding:"5px",margin:"5px"},
    InvalidLabel:{color:"red",padding:"5px",margin:"5px"},
    InvalidInput:{border:"1px solid red",borderRadius:"10px",padding:"5px",margin:"5px"},
    select:{fontSize:"16px",borderRadius:"5px",padding:"5px",margin:"5px",width:"150px"},
    button:{backgroundColor:"green",color:"white",fontSize:"16px",fontWeight:"400",border:"none",borderRadius:"5px",padding:"5px"}
  }
  function SubmitForm(event)
  {
    event.preventDefault()
    console.log(data)
    sendDataToParent({status:"success",data:data})
    setData({})
  }
  return <div>
    <form onSubmit={(event)=>SubmitForm(event)}>
      <label style={data.name?styles.label:styles.InvalidLabel}>Your name</label><br/>
      <input 
      required
      style={data.name?styles.input:styles.InvalidInput} 
      typeof='text'
      value={data.name?data.name:""}
      onChange={(event)=>setData(prevData=>({...prevData,name:event.target.value}))}
      />
      <br/>
      <label style={data.branch?styles.label:styles.InvalidLabel}>Branch : {data.branch?data.branch:"not choosen"}</label><br/>
      <select 
      style={styles.select}
      required
      value={data.branch?data.branch:""}
      onChange={(event)=>setData(prevData=>({...prevData,branch:event.target.value}))}>
        <option id='Automobile'>Automobile</option>
        <option id='Civil'>Civil</option>
        <option id='CSE'>CSE</option>
        <option id='CSBS'>CSBS</option>
        <option id='AIML'>AIML</option>
        <option id='IoT'>IoT</option>
        <option id='Cyber'>Cyber</option>
        <option id='Data Science'>Data Science</option>
        <option id='EEE'>EEE</option>
        <option id='ECE'>ECE</option>
        <option id='EIE'>EIE</option>
        <option id='IT'>IT</option>
        <option id='Mechanical'>Mechanical</option>
      </select>
      <br/>
      <label style={data.section?styles.label:styles.InvalidLabel}>Section : {data.section?data.section:"not choosen"}</label><br/>
      <select 
      style={styles.select}
      required
      value={data.section?data.section:""}
      onChange={(event)=>setData(prevData=>({...prevData,section:event.target.value}))}>
        <option id='A'>A</option>
        <option id='B'>B</option>
        <option id='C'>C</option>
        <option id='D'>D</option>
      </select>
      <br/>
      <label style={data.dateOfBirth?styles.label:styles.InvalidLabel}>Date of Birth</label><br/>
      <input 
      required
      style={data.name?styles.input:styles.InvalidInput} 
      type='date'
      value={data.dateOfBirth?data.dateOfBirth:""}
      onChange={(event)=>setData(prevData=>({...prevData,dateOfBirth:event.target.value}))}
      />
      <br/>
      <label style={data.email?styles.label:styles.InvalidLabel}>personal email</label><br/>
      <input 
      required
      style={data.alternateEmail?styles.input:styles.InvalidInput} 
      typeof='email'
      value={data.alternateEmail?data.alternateEmail:""}
      onChange={(event)=>setData(prevData=>({...prevData,alternateEmail:event.target.value}))}
      />
      <br/>
      <br/>
      <center>
        <button
        style={styles.button}
        onClick={(event)=>SubmitForm(event)}
        >Submit</button>
      </center>
    </form>
  </div>
}

function ContactDetails({sendDataToParent})
{
  const [data,setData] = useState({})
  const styles = {
    label:{color:"black",padding:"5px",margin:"5px"},
    input:{border:"1px solid black",borderRadius:"10px",padding:"5px",margin:"5px"},
    InvalidLabel:{color:"red",padding:"5px",margin:"5px"},
    InvalidInput:{border:"1px solid red",borderRadius:"10px",padding:"5px",margin:"5px"},
    select:{fontSize:"16px",borderRadius:"5px",padding:"5px",margin:"5px",width:"150px"},
    button:{backgroundColor:"green",color:"white",fontSize:"16px",fontWeight:"400",border:"none",borderRadius:"5px",padding:"5px"}
  }

  function SubmitForm(event)
  {
    event.preventDefault()
    sendDataToParent({"status":"success",data:data})
    setData({})
  }

  return <div>
          <form onSubmit={(event)=>SubmitForm(event)}>
            <label style={data.number1?styles.label:styles.InvalidLabel}>Contact number - 1</label><br/>
            <input 
            required
            style={data.number1?styles.input:styles.InvalidInput} 
            typeof='number'
            value={data.number1?data.name:""}
            onChange={(event)=>setData(prevData=>({...prevData,number1:event.target.value}))}
            />
            <br/>
            <label style={data.number2?styles.label:styles.InvalidLabel}>Contact number - 2</label><br/>
            <input 
            required
            style={data.number2?styles.input:styles.InvalidInput} 
            typeof='number'
            value={data.number2?data.name:""}
            onChange={(event)=>setData(prevData=>({...prevData,number2:event.target.value}))}
            />
            <br/>
            <center>
              <button
              style={styles.button}
              onClick={(event)=>SubmitForm(event)}
              >Submit</button>
            </center>
          </form>
        </div>
}

function SocialMediaProfiles({sendDataToParent})
{
  const [data,setData] = useState({})
  const styles = {
    input:{border:"1px solid black",borderRadius:"10px",padding:"5px",margin:"5px"},
    button:{backgroundColor:"green",color:"white",fontSize:"16px",fontWeight:"400",border:"none",borderRadius:"5px",padding:"5px"}
  }
  function SubmitForm(event)
  {
    event.preventDefault()
    console.log(data)
    sendDataToParent({status:"success",data:data})
    setData({})
  }

  return <div>
    <form onSubmit={(event)=>SubmitForm(event)}>
      <div>
        <FaInstagram 
        size={20}
        className='social-media-icon-signup-volunteer'
        />
        <input
        type='text'
        className='social-media-input-signup-volunteer'
        required
        value={data.instagram}
        onChange={(event)=>setData(prevData=>({...prevData,instagram:event.target.value}))}
        />
      </div>
      <div>
        <FaFacebook 
        size={20}
        className='social-media-icon-signup-volunteer'
        />
        <input
        type='text'
        className='social-media-input-signup-volunteer'
        required
        value={data.facebook}
        onChange={(event)=>setData(prevData=>({...prevData,facebook:event.target.value}))}
        />
      </div>
      <div>
        <FaWhatsapp 
        size={20}
        className='social-media-icon-signup-volunteer'
        />
        <input
        type='text'
        className='social-media-input-signup-volunteer'
        required
        value={data.whatsApp}
        onChange={(event)=>setData(prevData=>({...prevData,whatsApp:event.target.value}))}
        />
      </div>
      <div>
        <FaSquareXTwitter 
        size={20}
        className='social-media-icon-signup-volunteer'
        />
        <input
        type='text'
        className='social-media-input-signup-volunteer'
        required
        value={data.twitter}
        onChange={(event)=>setData(prevData=>({...prevData,twitter:event.target.value}))}
        />
      </div>
      <div>
        <FaLinkedin 
        size={20}
        className='social-media-icon-signup-volunteer'
        />
        <input
        type='text'
        className='social-media-input-signup-volunteer'
        required
        value={data.linkedIn}
        onChange={(event)=>setData(prevData=>({...prevData,linkedIn:event.target.value}))}
        />
      </div>
      <div>
        <CiGlobe 
        size={20}
        className='social-media-icon-signup-volunteer'
        />
        <input
        type='text'
        className='social-media-input-signup-volunteer'
        required
        value={data.website}
        onChange={(event)=>setData(prevData=>({...prevData,website:event.target.value}))}
        />
      </div>

      <br/>
      <center>
        <button
        style={styles.button}
        onClick={(event)=>SubmitForm(event)}
        >Submit</button>
      </center>
    </form>
  </div>
}

function SetPassword({sendDataToParent}){
  const [data,setData] = useState({})

  const styles = {
    input:{border:"1px solid black",borderRadius:"10px",padding:"5px",margin:"5px"},
    button:{backgroundColor:"green",color:"white",fontSize:"16px",fontWeight:"400",border:"none",borderRadius:"5px",padding:"5px"}
  }

  function SubmitForm(event)
  {
    event.preventDefault();
    console.log(data)
    if(data.password.trim()){
      sendDataToParent({status:"success",data:data})
      setData({})
    }else{
      alert("empty password")
    }
  }

  return <div>
    <form onSubmit={(event)=>SubmitForm(event)}>
      <label>enter password</label>
      <br/>
      <input
      type='password'
      value={data.password?data.password:""}
      onChange={(event)=>setData(prevData=>({...prevData,password:event.target.value}))}
      />
      <br/>
      <br/>
      <br/>
      <center>
        <button 
        style={styles.button}
        onClick={(event)=>SubmitForm(event)}
        >
          Finish
        </button>
      </center>
    </form>
  </div>
}

function SignUp() {
  const [state,setState] = useState(0)
  const [formdata,setFormData] = useState({})

  async function createAccount()
  {
    console.log(formdata);
    let response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/volunteers/create-volunteer-account`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        name:formdata.newData.name,
        rollNo:formdata.email.substring(0,10),
        password : formdata.password,
        phone:[formdata.newData1.number1,formdata.newData1.number2],
        alternateEmail : formdata.newData.alternateEmail,
        acCreatedOn : new Date,
        attendenceEvents : [],
        attendenceMeetings : [],
        profilePicture : "",
        branch : formdata.newData.branch,
        section : formdata.newData.section,
        dateOfBirth : formdata.newData.dateOfBirth,
        socialProfiles : {
          instagram:formdata.newData2.instagram,
          facebook:formdata.newData2.facebook,
          whatsApp:formdata.newData2.whatsApp,
          twitter:formdata.newData2.twitter,
          linkedIn:formdata.newData2.linkedIn,
          website:formdata.newData2.website
        }
      })
    })
    
    response = await response.json()
    console.log(response)
    if(response.message == "user already exists"){
      setState(6)
    }else{
      setState(5);
    }

  }
  function handleDataFromEmail(data)
  {
    if(data.status == "success"){
      setFormData(prevData=>({...prevData,email:data.email}))
      setState(1)
      console.log(formdata)
    }
  }
  function handleDataFromDetails1(data)
  {
    
    if(data.status == "success"){
      let newData = data.data
      setFormData(prevData=>({...prevData,newData}))
      setState(2)
    }
    console.log(formdata)
  }
  function handleContactDetails(data){
   
    if(data.status == "success"){
      let newData1 = data.data
      setFormData(prevData=>({...prevData,newData1}))
      setState(3)
    }
    console.log(formdata)
  }
  function handleSocialMediaProfiles(data){
    if(data.status == "success"){
      setState(4);
      const newData2 = data.data;
      setFormData(prevData=>({...prevData,newData2}))
    }
    console.log(formdata)
  }
  function handlePassword(data){
    if(data.status == "success"){
      const newData3 = data.data;
      console.log(newData3)

      setFormData(prevData=>({...prevData,password:newData3.password}))
      formdata.password = newData3.password;
    } 
    console.log(formdata)
    createAccount()
  }


  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
      <form className='sign-up-nss'>
        <center>
          <b style={{color:"red"}}>Sign up</b><br/>
          <img src={Images.nssLogo} width="100px"/>
          <br/>
          <b>NSS VNR-VJIET</b>
          <br/><br/><br/>
        </center>
        {
          state == 0 ?
          <SignUpEmail sendDataToParent={handleDataFromEmail}/>
          :
          state == 1 ?
          <Details1 sendDataToParent={handleDataFromDetails1}/>
          :
          state == 2 ?
          <ContactDetails sendDataToParent={handleContactDetails}/>
          :
          state == 3 ?
          <SocialMediaProfiles sendDataToParent={handleSocialMediaProfiles}/>
          :
          state == 4 ?
          <SetPassword sendDataToParent={handlePassword}/>
          :
          state == 5 ?
          <h1 style={{color:"green"}}>Account created successfully,Login to continue.</h1>
          :
          <h1 style={{color:"red"}}>Your a/c already exists, duplicate a/c can't be created !</h1>
        }
      </form>
    </div>
  )
}

export default SignUp