import React from 'react'
import "../ProgressBar/ProgressBar.css"
import { RightOutlined, ExclamationCircleOutlined } from "@ant-design/icons"

export default function ProgressBar(props) {
    return (
        <div className='progressbar'>
            <div className='progressbar-container' style={{backgroundColor: props.lightbgcolor}}>
                <div className='progress-done' style={{backgroundColor: props.bgcolor}}>
                <ExclamationCircleOutlined />{props.title}
                </div>
                <div className='progress-percentage'><h5>{props.percentage}</h5> &nbsp; <RightOutlined /></div>      
            </div>
        </div>
    )
}
