import React, { useEffect, useState } from 'react'
import './Header.css'
 
import Images from '../Media'
import { useNavigate } from 'react-router-dom'
import { MdMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

function DeskTopView()
{
    const naviagte = useNavigate()
    return <div className='desktop-header-navbar'>
                <div onClick={()=>naviagte('/')}>
                    <img style={{width:"80px"}} src={Images.nssLogo}/>
                </div>
                <div className='desktop-header-navbar-2'>
                    <div className='desktop-header-nav-items'>
                        <b>ABOUT</b>
                    </div>
                    <div className='desktop-header-nav-items'>
                        <b onClick={()=>naviagte("/events")}>EVENTS</b>
                    </div>
                    <div className='desktop-header-nav-items'>
                        <b onClick={()=>naviagte("/team")}>TEAM</b>
                    </div>
                    <div className='desktop-header-nav-items'>
                        <b onClick={()=>naviagte("/gallery")}>GALLERY</b>
                    </div>
                    <div className='desktop-header-nav-items' onClick={()=>naviagte('./volunteer-login')}>
                        <b>LOGIN</b>
                    </div>
                </div>
            </div>
}

function MobileView()
{
    const [click,handleClick] = useState(false)
    const navigate = useNavigate();

    return <div className='mobile-header-navbar'>
                <div onClick={()=>navigate('/')}>
                    <img style={{width:"80px"}} src={Images.nssLogo}/>
                </div>
                <div>
                    {
                        click ?
                        <div className='mobile-header-navbar-2'>
                            <div className='mobile-header-nav-items'>
                                <AiOutlineClose size={30} onClick={()=>handleClick(false)}/>
                            </div>
                            <div className='mobile-header-nav-items'>
                                <b>ABOUT</b>
                            </div>
                            <div className='mobile-header-nav-items'>
                                <b onClick={()=>navigate("/events")}>EVENTS</b>
                            </div>
                            <div className='mobile-header-nav-items'>
                                <b onClick={()=>navigate("/team")}>TEAM</b>
                            </div>
                            <div className='mobile-header-nav-items'>
                                <b onClick={()=>navigate("/gallery")}>GALLERY</b>
                            </div>
                            <div className='mobile-header-nav-items' onClick={()=>navigate('./volunteer-login')}>
                                <b>LOGIN</b>
                            </div>
                        </div>
                        :
                        <MdMenu onClick={()=>handleClick(true)} size={40} style={{position:"relative",right:"30px",top:"10px"}}/>
                    }
                </div>
            </div>
}

function Header() {
    const [screenWidth,setScreenWidth] = useState(window.innerWidth)
    useEffect(()=>{
        window.addEventListener('resize',()=>setScreenWidth(window.innerWidth))
    },[])

  return (
    <div className='header'>
        {
            screenWidth > 500 ?
            <DeskTopView/>
            :
            <MobileView/>
        }
    </div>
  )
}

export default Header