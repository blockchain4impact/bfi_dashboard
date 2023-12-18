import React from 'react'
import "../Timeline/Timeline.css"
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Collapse from '../Collapse/Collapse';
import ProgressBar from '../ProgressBar/ProgressBar';
import TaskCards from '../TaskCards/TaskCards';

export default function Timeline() {
  const week = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
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
          <div className='timeline-content'>
            <div style={{ display: 'flex', justifyContent: "space-around" }}>
              <span>Objective</span>
              <span>Week</span>
            </div>

            <div className='timeline-tasks'>
              <Collapse title='Hire core IDFS team' subheads={['Interviews and finalization', 'Contract signing with BVT']} />
              <Collapse title='Launch HCD Fellowship' />
              <Collapse title='Launch IHCR Fund' />
            </div>
          </div>
          <div className='timeline-week'>
            <table>
              <tr className='timeline-weeks'>
                {week.map((v, i) => <td>{v}</td>)}
              </tr>
              <tr style={{ display: 'flex', marginTop: '5vh' }}>
                <td style={{ width: '66%' }}><ProgressBar title='Hire core IDFS team' percentage='48%' bgcolor='rgb(138,43,226)' lightbgcolor='rgba(138,43,226,0.2)' /></td>
              </tr>
              <tr style={{ display: 'flex', marginTop: '5vh' }}>
                <td style={{ width: '99%' }}><ProgressBar title='Launch HCD Fellowship' percentage='54%' bgcolor='rgb(255,140,0)' lightbgcolor='rgba(255,140,0,0.2)' /></td>
              </tr>
              <tr style={{ display: 'flex', marginTop: '5vh' }}>
                <td style={{ width: '80%' }}><ProgressBar title='Launch IHCR Fund' percentage='18%' bgcolor='rgb(50,205,50)' lightbgcolor='rgba(50,205,50,0.2)' /></td>
              </tr>
            </table>
            <div className='tab-panel'>
              <div className='tabs' style={{backgroundColor: 'rgb(65,105,225)', color: "white"}}>
                <h5>Quarter 1</h5>
              </div>
              <div className='tabs'>
                <h5>Quarter 2</h5>
              </div>
              <div className='tabs'>
                <h5>Quarter 3</h5>
              </div>
              <div className='tabs'>
                <h5>Quarter 4</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='timeline-footer'>
        <TaskCards />
        <TaskCards />
        <TaskCards />
        <TaskCards />
      </div>
    </div>
  )
}
