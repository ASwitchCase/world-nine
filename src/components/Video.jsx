import React from 'react'

const Video = (props) => {
  return (
    <React.Fragment>
        <div className='video-container'>
            <iframe src={props.imgsrc} allowfullscreen></iframe>
            <h3>{props.title}</h3>
        </div>
    </React.Fragment>
  )
}

export default Video
