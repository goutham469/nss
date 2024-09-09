import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import React, { useState } from 'react'

function AdminLogin() {
    const [formData,setFormData] = useState({
        "password":"",
        "securityKey":"",
        "AuthorizedEmail":"",
        "Authorized":false
    })
    function login(event)
    {
        event.preventDefault();

        let returnValue = true;
        if(AuthorizedEmail !== process.env.REACT_APP_DEVELOPER_EMAIL)
        {
            alert("not registered admin email")
            returnValue = false;
        }
        if(password != process.env.REACT_APP_ADMIN_PASSWORD)
        {
            alert("incorrect password")
            returnValue = false;
        }
        if(formData.securityKey != process.env.REACT_APP_ADMIN_SECURITY_KEY)
        {
            alert("incorrect security key")
            returnValue = false;
        }

        if(returnValue)
        {
            setFormData(...prevData=>({...prevData,Authorized:true}))
            alert("Admin login success");
        }
    }

    function onSuccess(response)
    {
        const email = jwtDecode(response.credential).email
        setFormData(prevData=>({...prevData,AuthorizedEmail:email}))
    }

  return (
    <div>
        <form>
            <h3>NSS-Admin Login</h3>
            <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}>
                <GoogleLogin
                onSuccess={onSuccess}
                />
            </GoogleOAuthProvider>

            <input 
            type='text'
            placeholder='password'
            onChange={(event)=>setFormData(prevData=>({...prevData,password:event.target.value}))}
            />
            <br/>

            <input 
            type='text'
            placeholder='security key'
            onChange={(event)=>setFormData(prevData=>({...prevData,securityKey:event.target.value}))}
            />
            <br/>

            <button onClick={(event)=>login(event)}>Login</button>
        </form>
    </div>
  )
}

export default AdminLogin