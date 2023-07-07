import React from 'react'
import NavBar from '../components/NavBar'
import c1 from '../images/kirby.webp'
import c2 from '../images/kirby3.png'
import e1 from '../images/disk1Logo.gif'
import w9_logo from '../images/world9Logo.png'

const Events = () => {
  return (
    <div>
        <NavBar></NavBar>
      <div className='page-container'>
        <div className='content-container'>
            <header className='med-large-header'>Events</header>
            <hr></hr>
            <div className='event'>
                <img src={e1}></img>
                <div className='event-info'>
                    <h1>World Nine, Disk One</h1>
                    <h2>Summer 2023</h2>
                    <p>Super Smash Bros tournament located in Jersey City New Jersey.
                        Open to all members of world nine.
                    </p>
                </div>
            </div>

            <div className='event'>
                <img src={w9_logo}></img>
                <div className='event-info'>
                    <h1>Winter Warning </h1>
                    <h2>November 2020</h2>
                    <p>Super Smash Bros tournament located in Jersey City New Jersey.
                        Open to all members of world nine.
                    </p>
                </div>
            </div>
        </div>

        <div className='img-container'>
            <img src={c2}></img>
        </div>
        

      </div>
    </div>
  )
}

export default Events
