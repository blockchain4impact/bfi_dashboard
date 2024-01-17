import React, { useState } from 'react'
import downarrow from "../../Assets/images/downarrow.png";
import { cardData } from '../Home/Home';
import { Progress } from 'antd';
import "../BIOME/Biome.css"
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Collapse from '../../Components/Collapse/Collapse';

export default function Biome() {
    return (
        <div className='biome'>
            <div className='timeline-tags'>
                <h2 style={{ color: "#232360" }}>Timeline</h2>
                <p className='timeline-tag tag'>Today</p>
                <p className='timeline-date-tag tag'><LeftOutlined />&nbsp; Nov, 22, 2023 &nbsp;<RightOutlined /></p>
            </div>
            {cardData.map((val) => val.pathname === window.location.pathname &&
                val.Dashboarditems.map((value) =>
                    <Collapse items={value}/>
                )
            )}
        </div>
    )
}
