import React from 'react'
import NavBar from '../components/NavBar'
import abtimg from '../images/Joker.png'
const About = () => {
  return (
    <div>
        <NavBar></NavBar>
        <div className='page-container'>
            <div className='content-container'>
                <header className='med-large-header'>About Us</header>
                <hr></hr>
                <p>World Nine is a place where normal people play games competitively. The rules are simple:</p>

                <ol>
                        <li>No messing around in tournaments. Try to have a serious match. Tournaments are meant for competitive play</li>
                        <li>Be respectful, we are all friends. The tournaments are not just for smash, they are wholesome social gatherings.</li>
                        <li>SHOWER, with soap</li>
                        <li>Remember to save each game after they are complete.</li>
                        <li>Most importantly have fun.</li>
                </ol>

            </div>
            <div className='img-container'>
                <img src={abtimg}></img>
            </div>
        </div>
    </div>
  )
}

export default About
