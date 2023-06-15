import React from 'react'
import './VideoRow.css'

function VideoRow({image,description,timeStamp,channel,title,views,subs}) {
  return (
    <div className='videoRow'>
        <img src={image} alt=""></img>
        <div className='videoRow_text'>
            <h3>{title}</h3>
            <p className='videoRow_headline'>
            {channel} • {" "}
            <span className='videoRow_subs'>
                <span className='videoRow_subsNumber'>{subs}</span> Subscribers 
            </span>
            {" "} {views} views • {timeStamp} </p>
            <p className='videoRow_description'>{description}</p>
        </div>
    </div>
  )
}

export default VideoRow