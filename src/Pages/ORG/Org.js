import React from 'react'
import '../ORG/Org.css'
import TimelineHeader from '../../Components/TimlineHeader/TimelineHeader';
import OrgTimeline from './OrgTimeline';

export default function Org() {
    return (
        <div className='org-main'>
            <TimelineHeader />
            <div className='org-body'>
                <OrgTimeline />
            </div>
        </div>
    )
}
