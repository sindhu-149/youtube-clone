import React, { useState } from 'react'
import './Header.css'
import { Menu,Search,VideoCall,Apps,Notifications } from '@mui/icons-material'
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
const Header = () => {
  const [inputSearch, setInputSearch]= useState("")
  return (
    <div className='header'> 
      <div className='header-left'>
          <Menu />
          <Link to='/'>
            <img  className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/508px-YouTube_Logo_2017.svg.png" alt="youtube logo"></img>
          </Link>
      </div>
      <div className='header-input'>
          <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
          <Link to={`/search/${inputSearch}`}>
            <Search className='header-inputButton'/>
          </Link>
          
      </div>
          <div className='header-icons'>
          <VideoCall  className='header-icon'/>
          <Apps className='header-icon' />
          <Notifications className='header-icon' />
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgDFp3dmPTGj1xOEuSlAt-ilTfBOmYfth5hQ&usqp=CAU" alt="User" />
    </div>
    </div>

  )
}

export default Header