import React from 'react'
import "../Timeline/Timeline.css"
import { LeftOutlined, RightOutlined } from '@ant-design/icons';


export default function Timeline() {
  const week = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
  return (
    <div className='timeline'>
      <div className='timeline-head'>
        <div className='timeline-tags'>
          <h2 style={{ color: "#232360" }}>Timeline</h2>
          <p className='timeline-tag tag'>Today</p>
          <p className='timeline-date-tag tag'><LeftOutlined />&nbsp; Nov, 22, 2023 &nbsp;<RightOutlined /></p>
        </div>

        <div className='months'>
          <p>Octobar</p> |
          <p>November</p> |
          <p>December</p>
        </div>
      </div>

      <div className='timeline-body'>
        <div className='timeline-body-contenthead'>
          <p>Objective</p>
          <div className='timeline-week'>
            <p>Week</p>
            {week.map((v, i) => <p>{v}</p>)}
          </div>
        </div>
      </div>
    </div>
  )
}
