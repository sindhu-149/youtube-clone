import React from 'react'
import './SearchPage.css'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
import { TuneOutlined } from '@mui/icons-material'

function SearchPage() {
  return (
    <div className='searchPage'>
        <div className="searchPage_filter">
            <TuneOutlined />
            <h2>FILTER</h2>
        </div>
        <hr />
        <ChannelRow 
            image="https://yt3.googleusercontent.com/ytc/AGIKgqPVOrBQeqJu20COqGiVF7RJ0nuC8VVKwFim8WU=s176-c-k-c0x00ffffff-no-rj"
            channel="Frontlinesmedia"
            verified
            subs="296k"
            noOfVideos={789}
            description="Frontlines Media is a new generation Edu Tech company and a portal for providing job opportunities, career guidance, mentorships, and many more. Frontlines Media's aim is to empower students, especially from rural areas. "
        />
        <hr />
        <VideoRow 
            views="1.4M"
            subs="296k"
            description="Top 10 mistakes to avoid in a job interview"
            timeStamp="40 minutes ago"
            channel="Frontlinesmedia"
            title="Interview Success Blueprint"
            image="data:image/jpeg;base64,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"
        />
        <VideoRow 
            views="1.4M"
            subs="296k"
            description="Top 10 mistakes to avoid in a job interview"
            timeStamp="40 minutes ago"
            channel="Frontlinesmedia"
            title="Interview Success Blueprint"
            image="data:image/jpeg;base64,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"
        />
        <VideoRow 
            views="1.4M"
            subs="296k"
            description="Top 10 mistakes to avoid in a job interview"
            timeStamp="40 minutes ago"
            channel="Frontlinesmedia"
            title="Interview Success Blueprint"
            image="data:image/jpeg;base64,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"
        />
        <VideoRow 
            views="1.4M"
            subs="296k"
            description="Top 10 mistakes to avoid in a job interview"
            timeStamp="40 minutes ago"
            channel="Frontlinesmedia"
            title="Interview Success Blueprint"
            image="data:image/jpeg;base64,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"
        />
        <VideoRow 
            views="1.4M"
            subs="296k"
            description="Top 10 mistakes to avoid in a job interview"
            timeStamp="40 minutes ago"
            channel="Frontlinesmedia"
            title="Interview Success Blueprint"
            image="data:image/jpeg;base64,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"
        />
        <VideoRow 
            views="1.4M"
            subs="296k"
            description="Top 10 mistakes to avoid in a job interview"
            timeStamp="40 minutes ago"
            channel="Frontlinesmedia"
            title="Interview Success Blueprint"
            image="data:image/jpeg;base64,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"
        />
    </div>
  )
}

export default SearchPage