import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import React, { useState } from 'react'
import './AdminLogin.css'

function AdminLogin() {
    const [formData,setFormData] = useState({
        "password":"",
        "securityKey":"",
        "AuthorizedEmail":"",
        "Authorized":false,
        "status":0
    })
    function login(event)
    {
        event.preventDefault();

        let returnValue = true;
        if(formData.AuthorizedEmail !== process.env.REACT_APP_DEVELOPER_EMAIL)
        {
            alert("not registered admin email")
            returnValue = false;
        }
        if(formData.password != process.env.REACT_APP_ADMIN_PASSWORD)
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
            setFormData(prevData=>({...prevData,Authorized:true}))
            alert("Admin login success");

            localStorage.setItem("adminLoginStatus",true)
        }
    }

    function onSuccess(response)
    {
        const email = jwtDecode(response.credential).email
        setFormData(prevData=>({...prevData,AuthorizedEmail:email}))

        if(email != process.env.REACT_APP_DEVELOPER_EMAIL)
        {
            alert("not registered admin email")
        }
        else
        {
            setFormData(prevData=>({...prevData,status:1}))
        }
    }

  return (
    <div className='admin-login'>
        <div>
            <h3>NSS-Admin Login</h3>
            <br/>
            <br/>
            <div>
                {
                    formData.status == 0 ?
                    <div>
                        <b style={{color:"red"}}>Only Admin e-mail is vaild</b>
                        <br/>

                        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}>
                            <GoogleLogin
                            onSuccess={onSuccess}
                            />
                        </GoogleOAuthProvider>
                    </div>
                    :
                    formData.status == 1 &&
                    <div>
                        <label>password</label>
                        <br/>
                        <input 
                        type='password'
                        placeholder='password'
                        onChange={(event)=>setFormData(prevData=>({...prevData,password:event.target.value}))}
                        />
                        <br/>

                        <label>High security Key</label>
                        <br/>
                        <input 
                        type='password'
                        placeholder='security key'
                        onChange={(event)=>setFormData(prevData=>({...prevData,securityKey:event.target.value}))}
                        />
                        <br/>
                        <button onClick={(event)=>login(event)}>Login</button>
                    </div>
                }
            </div>
        </div>
    </div>
  )
}

export default AdminLogin