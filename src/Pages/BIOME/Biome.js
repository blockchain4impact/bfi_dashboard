import React from 'react'
import downarrow from "../../Assets/images/downarrow.png";
import { cardData } from '../Home/Home';
import { Progress } from 'antd';
import "../BIOME/Biome.css"
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

export default function Biome() {

    return (
        <div className='biome'>
            <div className='timeline-tags'>
                <h2 style={{ color: "#232360" }}>Timeline</h2>
                <p className='timeline-tag tag'>Today</p>
                <p className='timeline-date-tag tag'><LeftOutlined />&nbsp; Nov, 22, 2023 &nbsp;<RightOutlined /></p>
            </div>


            {cardData.map((val) => val.pathname === window.location.pathname &&
                val.items.map((value) =>
                    <div className='biome-data'>
                        <div className='biome-task-list' >
                            <div className='biome-task-name'>
                                <p>{value.title}</p>
                            </div>
                            <div className='biome-badge'>
                                <p>{value.badge}</p>
                            </div>
                        </div>

                        <div className='biome-list-progress'>
                            <div className='biome-progress'>
                                <Progress percent={100} showInfo={false} />
                            </div>
                            <div className='biome-dropdown'>
                                <img src={downarrow} alt='dropdown' />
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    )
}
