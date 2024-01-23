import React from 'react'
import ProgressBar from '../../Components/ProgressBar/ProgressBar'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { cardData } from '../Home/Home';
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
