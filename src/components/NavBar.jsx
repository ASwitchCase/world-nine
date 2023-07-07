import React from 'react'
import w9_logo from '../images/world9Logo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='nav-container'>
      
      <Link to='/'>
        <div className='nav-item-container'>
            <img src = {w9_logo}></img>
        </div>
      </Link>
      
      <Link to='/About'>
        <div className='nav-item-container'>
            <h1>About</h1>
        </div>
      </Link>
      
      <Link to='/Events'>
      <div className='nav-item-container'>
        <h1>Events</h1>
      </div>
      </Link>

      <Link to='/Community'>
        <div className='nav-item-container'>
            <h1>Community</h1>
        </div>
      </Link>

      <Link to='/Videos'>
        <div className='nav-item-container'>
            <h1>Videos</h1>
        </div>
      </Link>
      

      <div style={{float:'right'}} className='nav-item-container'>
        <button>Log In</button>
      </div>
    </div>
  )
}

export default NavBar
