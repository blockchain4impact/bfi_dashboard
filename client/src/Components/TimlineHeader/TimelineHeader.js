import React from 'react'
import "../TimlineHeader/TimelineHeader.css"
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

export default function TimelineHeader() {
    const today = new Date();
    const month = today.toLocaleString('default', { month: 'short' });
    const date = today.getDate()
    const year = today.getFullYear()
    return (
        <div className='timeline-tags'>
            <h2 style={{ color: "#232360" }}>Timeline</h2>
            <p className='timeline-tag tag'>Today</p>
            <p className='timeline-date-tag tag'><LeftOutlined />&nbsp; {month}, {date}, {year} &nbsp;<RightOutlined /></p>
        </div>
    )
}
