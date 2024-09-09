import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import React, { useState } from 'react'

function SignUp() {
  const [verified,setVerified] = useState(2)
  const [password,setPassword] = useState()
  async function createAccount(event)
  {
    event.preventDefault();
    if(password.trim())
    {
      alert("a/c created")
      // add data to store
    }
  }

  async function onSuccess(response)
  {
    const email = jwtDecode(response.credential).email
    const roolNo = email.substring(0,10)
    console.log(roolNo)
    
    // fetch the server and check if rool no exists
    setVerified(true)

  }
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
      <form style={{backgroundColor:"white",marginTop:"20px",borderRadius:"10px",padding:"10px",color:"black"}}>
        {
          verified==0?
          <div>
            <b style={{color:"blue"}}>NSS-Volunteer<br/>Sign up</b>
            <br/>
            <br/>
            <br/>
            <label>use your college email-id</label>
            <br/>
            <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}>
              <GoogleLogin
              onSuccess={onSuccess}
              />
            </GoogleOAuthProvider>
            <br/>
            <br/>
          </div>
          :verified == 1?
          <div>
            <b style={{color:"green"}}>You are authorized !</b>
            <p>set up , a password for your a/c to continue</p>
            <input
            placeholder='password'
            required
            onChange={(event)=>setPassword(event.target.value)}
            />
            <br/>
            <button onClick={(event)=>createAccount(event)}>Finish.</button>
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
      </form>
    </div>
  )
}

export default SignUp