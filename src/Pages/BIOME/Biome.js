import React from 'react'
import { cardData } from '../Home/Home';
import "../BIOME/Biome.css"
import Collapse from '../../Components/Collapse/Collapse';
import TimelineHeader from '../../Components/TimlineHeader/TimelineHeader';

export default function Biome() {
    return (
        <div className='biome'>
            <TimelineHeader />
            {cardData.map((val) => val.pathname === window.location.pathname &&
                val.Dashboarditems.map((value) =>
                    <Collapse items={value}/>
                )
            )}
        </div>
    )
}
