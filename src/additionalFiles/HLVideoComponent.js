import React from 'react'

function HLVideoComponent(props) {
    return (
        <div className='HL-video-container' onPlay={() => console.log('hello')}>
            {props.vid}
            <p className='HL-title'>{props.videoTitle}</p> 
        </div>
    )
}

export default HLVideoComponent