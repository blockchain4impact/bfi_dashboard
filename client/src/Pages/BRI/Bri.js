import React from 'react'
import "../BRI/Bri.css"
import TimelineHeader from '../../Components/TimlineHeader/TimelineHeader';
import BriTimeline from './BriTimeline';

export default function Bri(props) {
    const years = [2023, 2024, 2025, 2026]
    const currMonth = [
        'Jan-Jun', 'Jul-Dec'
    ]
    const prevMonth = [
        'Oct', 'Nov', 'Dec'
    ]
    return (
        <div className='bri'>
            <TimelineHeader />
            <div className='bri-body'>
                <BriTimeline />
            </div>
        </div>
    )
}
