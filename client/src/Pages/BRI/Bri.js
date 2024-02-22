import React from 'react'
import "../BRI/Bri.css"
import TimelineHeader from '../../Components/TimlineHeader/TimelineHeader';
import BriTimeline from './BriTimeline';

export default function Bri() {
    return (
        <div className='bri'>
            <TimelineHeader />
            <div className='bri-body'>
                <BriTimeline />
            </div>
        </div>
    )
}
