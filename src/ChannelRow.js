import React from 'react'
import './ChannelRow.css'
import { Verified } from '@mui/icons-material'
import Avatar from '@mui/material/Avatar';

function ChannelRow({image,channel,subs,noOfVideos,description,verified}) {
  return (
    <div className='channelRow'>
        <Avatar className="channelRow_logo" alt={channel} src={image} />
        <div className="channelRow_text">
            <h4>{channel} {verified && <Verified /> }</h4>
            <p>{subs} subscribes • {noOfVideos} </p>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ChannelRow