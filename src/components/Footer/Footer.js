import React, { useState } from 'react';
import './Footer.css'
import Images from '../Media';
import { FaInstagram,FaFacebookF,FaYoutube,FaTwitter,FaLinkedinIn } from "react-icons/fa";

function Footer() {
    const [hovered,setHovered] = useState(false);

    return (
        <div style={{ display: "flex", justifyContent: "space-around",padding:"10px", flexWrap: "wrap" ,backgroundColor:"black",paddingBottom:"30px"}}>
            <div style={{textAlign:"center",margin:"5px"}}>
                <center>
                    <p style={{borderBottom:"1px solid yellow",width:"fit-content",marginBottom:"20px"}}>About us</p>
                </center>
                <img src={Images.nssLogo} width="100px" /><br />
                <b style={{ fontSize: "32px" }}>NSS VNR VJIET</b><br />
                <label>&copy; NSS, VNRVJIET, 2024.</label>
            </div>
            <div style={{margin:"5px"}}>
                <p style={{borderBottom:"1px solid yellow",width:"fit-content",marginBottom:"20px"}}>Quick Links</p>
                <label className='quick-links-navitems'
                onClick={()=>window.open(`${process.env.REACT_APP_BASE_URL}`)}
                >Home page</label><br />
                <label className='quick-links-navitems' 
                onClick={()=>window.open(`${process.env.REACT_APP_BASE_URL}/events`,"_blank")}
                >NSS events</label><br />
                <label className='quick-links-navitems'>Subscribe to newsletter</label><br />
                <label className='quick-links-navitems'>Gallery</label><br />
                <label className='quick-links-navitems'
                onClick={()=>window.open(`${process.env.REACT_APP_BASE_URL}/team`,"_blank")}
                >Team-NSS</label><br />
                <label className='quick-links-navitems'>VNR VJIET website</label>
                <br/>
                <label className='quick-links-navitems'
                 onClick={()=>window.open(`${process.env.REACT_APP_BASE_URL}/admin`,"_blank")}
                 >Admin Login
                 </label><br />
            </div>
            <div style={{margin:"5px"}}>
                <p style={{ borderBottom: "1px solid yellow", width: "fit-content", marginBottom: "20px" }}>
                    Follow us on Social Media
                </p>
                <div
                    onMouseEnter={() => setHovered('instagram')}
                    onMouseLeave={() => setHovered(null)}
                    style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
                    onClick={()=>window.open("https://www.instagram.com/nss_vnrvjiet/","_blank")}
                >
                    <FaInstagram color={hovered === 'instagram' ? "blue" : "white"} size={24} />
                    <label style={{ color: hovered === 'instagram' ? "blue" : "white", marginLeft: "8px" }}>Instagram</label>
                </div>
                <div
                    onMouseEnter={() => setHovered('facebook')}
                    onMouseLeave={() => setHovered(null)}
                    style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
                    onClick={()=>window.open("https://www.facebook.com/groups/VNRVJIETNSS/","_blank")}
                >
                    <FaFacebookF color={hovered === 'facebook' ? "blue" : "white"} size={24} />
                    <label style={{ color: hovered === 'facebook' ? "blue" : "white", marginLeft: "8px" }}>Facebook</label>
                </div>
                <div
                    onMouseEnter={() => setHovered('youtube')}
                    onMouseLeave={() => setHovered(null)}
                    style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
                    onClick={()=>window.open("https://www.youtube.com/@nssvnrvjiet9537","_blank")}
                >
                    <FaYoutube color={hovered === 'youtube' ? "blue" : "white"} size={24} />
                    <label style={{ color: hovered === 'youtube' ? "blue" : "white", marginLeft: "8px" }}>YouTube</label>
                </div>
                <div
                    onMouseEnter={() => setHovered('twitter')}
                    onMouseLeave={() => setHovered(null)}
                    style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
                    // onClick={()=>window.open("https://www.instagram.com/nss_vnrvjiet/","_blank")}
                >
                    <FaTwitter color={hovered === 'twitter' ? "blue" : "white"} size={24} />
                    <label style={{ color: hovered === 'twitter' ? "blue" : "white", marginLeft: "8px" }}>Twitter</label>
                </div>
                <div
                    onMouseEnter={() => setHovered('linkedin')}
                    onMouseLeave={() => setHovered(null)}
                    style={{ display: "flex", alignItems: "center" }}
                    // onClick={()=>window.open("https://www.instagram.com/nss_vnrvjiet/","_blank")}
                >
                    <FaLinkedinIn color={hovered === 'linkedin' ? "blue" : "white"} size={24} />
                    <label style={{ color: hovered === 'linkedin' ? "blue" : "white", marginLeft: "8px" }}>LinkedIn</label>
                </div>
            </div>
            <div style={{margin:"5px"}}>
                <p style={{borderBottom:"1px solid yellow",width:"fit-content",marginBottom:"20px"}}>Contact Us</p>
                <label>nss@vnrvjiet.ac.in</label><br />
                <label>+91 9876543210</label>
            </div>
        </div>
    );
}

export default Footer;
