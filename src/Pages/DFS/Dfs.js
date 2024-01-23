import React from 'react'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import "../DFS/Dfs.css"
import DfsTimeline from './DfsTimeline';

export default function Dfs() {
    const today = new Date();
    const month = today.toLocaleString('default', { month: 'short' });
    const date = today.getDate()
    const year = today.getFullYear()
    console.log(year)
    return (
        <div className='dfs'>
            <div className='timeline-tags'>
                <h2 style={{ color: "#232360" }}>Timeline</h2>
                <p className='timeline-tag tag'>Today</p>
                <p className='timeline-date-tag tag'><LeftOutlined />&nbsp; {month}, {date}, {year} &nbsp;<RightOutlined /></p>
            </div>
            <div className='bri-body'>
                <DfsTimeline />
            </div>
        </div>
    )
}
