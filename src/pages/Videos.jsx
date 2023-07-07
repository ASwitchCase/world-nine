import React from 'react'
import NavBar from '../components/NavBar'
import Video from '../components/Video'
const Videos = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className='page-container'>
        <div className='content-container' style={{width:'90%'}}>
            <header className='med-large-header'>Videos</header>
            <hr></hr>
            <div className='gallery-container'>
                <Video imgsrc="https://www.youtube.com/embed/9En7mS9bPkM" title="Best Of Jokin"></Video>
                <Video imgsrc="https://www.youtube.com/embed/SVIOzbtoa9o" title="SolDrakkon(Fox) vs Pk_Love (Cloud)"></Video>
                <Video imgsrc="https://www.youtube.com/embed/uZ6KQxhejFs" title="When you're late to Smashfest"></Video>

                <Video imgsrc="https://www.youtube.com/embed/a4faoewGSlM" title="GigaBash | Kiryu Combos"></Video>
                <Video imgsrc="https://www.youtube.com/embed/8kW3u4lMSgE" title="More OFFLINE Practice | Playing Wolf"></Video>
                <Video imgsrc="https://www.youtube.com/embed/dDPLgQuRTJE" title="SEPHIROTH IS IN SMASH [REACTION]"></Video>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Videos
