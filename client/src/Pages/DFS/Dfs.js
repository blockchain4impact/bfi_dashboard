import React from 'react'
import "../DFS/Dfs.css"
import DfsTimeline from './DfsTimeline';
import TimelineHeader from '../../Components/TimlineHeader/TimelineHeader';

export default function Dfs() {
    return (
        <div className='dfs'>
            <TimelineHeader />
            <div className='bri-body'>
                <DfsTimeline />
            </div>
        </div>
    )
}
