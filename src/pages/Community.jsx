import React from 'react'
import links from '../images/links2.webp'
import NavBar from '../components/NavBar'
import c1 from '../images/madSpace.jpg'
import c2 from '../images/SeveN.jpg'
import c3 from '../images/theory.jpg'
import c4 from '../images/pfp.jpg'
const Community = () => {
  return (
    <div>
        <NavBar></NavBar>
      <div className='page-container'>
        <div className='content-container' style={{width:'48%'}}>
          <header className='med-large-header'>Community</header>
          <hr></hr>
          <div className='contact-container'>
            <a href='https://www.youtube.com/@MadSpace'><img src={c1}></img></a>
            <h1>MadSapce</h1>
          </div>

          <div className='contact-container'>
            <a href='https://www.youtube.com/@SeveN_7812_'><img src={c2}></img></a>
            <h1>SeveN</h1>
          </div>

          <div className='contact-container'>
            <a href='https://www.youtube.com/@theory4k'><img src={c3}></img></a>
            <h1>Theory</h1>
          </div>

          <div className='contact-container'>
            <a href='https://www.youtube.com/channel/UCzLOAjXkVVhmYHGBe_vQyfw'><img src={c4}></img></a>
            <h1>PkLlove</h1>
          </div>
          
        </div>

        <div className='img-container'>
            <img src={links}></img>
          </div>
        
      </div>
    </div>
  )
}

export default Community
