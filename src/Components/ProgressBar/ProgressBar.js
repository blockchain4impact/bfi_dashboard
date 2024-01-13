import React from 'react'
import "../ProgressBar/ProgressBar.css"

export default function ProgressBar(props) {
    return (
        <div className='progressbar'>
            <div className='progressbar-title'>
                {props.names?.map((name) => <p className='progressbar-name-tag'>{name.substring(0,1)}</p>)}
                <p style={{fontWeight: 800}}>{props.title}</p>
            </div>
            <div className='progressbar-body'>
                <div className='progressbar-container' style={{ backgroundColor: props.lightbgcolor, width: props.percentage!=='0%'? props.percentage : '5%' }}>
                    <div className='progress-done' style={{ backgroundColor: props.bgcolor, width: props.percentage }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <circle cx="7.5" cy="7.5" r="5.5" fill="white" stroke={props.percentage === '100%'?"#BAE47A":"#E6C151"} stroke-width="4" />
                        </svg>
                    </div>
                </div>
                <div className='progress-percentage'><h5>{props.percentage}</h5> </div>
            </div>
        </div>
    )
}
