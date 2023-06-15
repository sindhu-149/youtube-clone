import React from 'react'
import './SideBar.css'
import SidebarRow from './SideBarRow'
import { Home,Whatshot,Subscriptions,VideoLibrary,History,OndemandVideo,WatchLater,ThumbUpOffAltOutlined,ExpandMoreOutlined} from '@mui/icons-material'

function SideBar() {
  return (
    <div className='sidebar'>
    <SidebarRow selected Icon={Home} title="Home"/>
    <SidebarRow Icon={Whatshot} title="Trending" />
    <SidebarRow Icon={Subscriptions} title="Subscription"/>
    <hr />
    <SidebarRow Icon={VideoLibrary} title="Library"/>
    <SidebarRow Icon={History} title="History"/>
    <SidebarRow Icon={OndemandVideo} title="Your Videos"/>
    <SidebarRow Icon={WatchLater} title="Watch Later"/>
    <SidebarRow Icon={ThumbUpOffAltOutlined} title="Liked Videos"/>
    <SidebarRow Icon={ExpandMoreOutlined} title="Show More"/>
    <hr />
    </div>
  )
}

export default SideBar