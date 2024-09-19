import React, { useState } from 'react'
import './ImagesBar.css'
import {ImagesScrollData} from '../Constants'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function ImagesBar() {
    const [ImageState,setImageState] = useState(0)
    function handleNext()
    { 
        setImageState(ImageState === ImagesScrollData.length-1 ? 0 : ImageState+1)
    }
    function handlePrev()
    {
        setImageState(ImageState === 0 ? ImagesScrollData.length-1  : ImageState-1)
    }
  return (
    <div>
        <div style={{display:"flex",justifyContent:"space-around",borderBottom:"1px solid black"}}>
            <FaAngleLeft className='left-arrow-icon'   size={40} onClick={()=>handleNext()}/>
            <img src={ImagesScrollData[ImageState].url} alt={ImagesScrollData[ImageState].text} style={{width:"100vw",height:"85vh"}}/> 
            <FaAngleRight  className='right-arrow-icon'   size={40} onClick={()=>handlePrev()}/>
        </div>
    </div>
  )
}

export default ImagesBar