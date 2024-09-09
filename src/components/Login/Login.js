import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'

function Login() {
    const navigate = useNavigate()
    const [formData,setFormData] = useState({
      "roolNo":'',
      "roolNoError":'rool no',
      "roolNoColor":'',
      "password":'',
      "passwordError":'password',
      "passwordErrorColor":'',
      "OAuthEmail":''
    })
    function onSuccess(response)
    {
      let data = jwtDecode(response.credential)
      console.log(data.email)
    }

    function checkForm()
    {
      if(formData.roolNo && formData.password)
      {
        if(formData.roolNo)
        {
          setFormData(prevData=>({...prevData,roolNoError:"rool no",roolNoColor:""}))
        }
        if(formData.password)
        {
          setFormData(prevData=>({...prevData,passwordError:"password",passwordErrorColor:""}))
        }
        return true;
      }
      else
      {
        if(!formData.roolNo)
        {
          setFormData(prevData=>({...prevData,roolNoError:"null rool no",roolNoColor:"red"}))
        }
        if(!formData.password)
        {
          setFormData(prevData=>({...prevData,password:"null password",passwordErrorColor:"red"}))
        }
      }
      return false;
    }

    async function loginToServer(event)
    {
      event.preventDefault();
      if(checkForm())
      {
        // fetch the server
      }
    }
  return (
    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
      <div style={{backgroundColor:"white",color:"black",borderRadius:"10px",padding:"10px",marginTop:"20px"}}>
        <center>
          <b style={{fontSize:"32px"}}>NSS-Volunteer <br/>login</b><br/>
        </center>
        <form>
            <label style={{color:formData.roolNoColor?"red":"black"}} className='volunteer-login-rool-no-label'>{formData.roolNoError}</label><br/>
            <input 
            type='text' 
            className='volunteer-login-rool-no-input'
            onChange={(event)=>setFormData(prevData=>({...prevData,roolNo:event.target.value}))}
            />
            <br/>
            <label style={{color:formData.passwordErrorColor==="red"?"red":"black"}} className='volunteer-login-rool-no-label'>{formData.passwordError}</label><br/>
            <input
             type='password' 
             className='volunteer-login-rool-no-input'
             onChange={(event)=>setFormData(prevData=>({...prevData,password:event.target.value}))}
             />
            <br/>
            <button className='volunteer-login-button'  onClick={(event)=>loginToServer(event)}>Login</button>
        </form>
        <center>
          <label>or</label>
        </center>


        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}>
          <GoogleLogin
          onSuccess={onSuccess}
          />
        </GoogleOAuthProvider>

        <br/>
        <a href='' onClick={()=>navigate('/sign-up')}>new user, Sign up</a>
      </div>
    </div>
  )
}

export default Login