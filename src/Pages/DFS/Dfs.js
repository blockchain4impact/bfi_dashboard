import React, { useEffect, useState } from 'react'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import ProgressBar from '../../Components/ProgressBar/ProgressBar';
import { cardData } from '../Home/Home';
import "../DFS/Dfs.css"
import Timeline from '../../Components/Timeline/Timeline'
import { Chart } from "react-google-charts";

export const data = [
    [
      { type: "string", id: "Position" },
      { type: "string", id: "Name" },
      { type: "date", id: "Start" },
      { type: "date", id: "End" },
    ],
    [
      "President",
      "George Washington",
      new Date(1789, 3, 30),
      new Date(1797, 2, 4),
    ],
    ["President", "John Adams", new Date(1797, 2, 4), new Date(1801, 2, 4)],
    ["President", "Thomas Jefferson", new Date(1801, 2, 4), new Date(1809, 2, 4)],
    ["Vice President", "John Adams", new Date(1789, 3, 21), new Date(1797, 2, 4)],
    [
      "Vice President",
      "Thomas Jefferson",
      new Date(1797, 2, 4),
      new Date(1801, 2, 4),
    ],
    ["Vice President", "Aaron Burr", new Date(1801, 2, 4), new Date(1805, 2, 4)],
    [
      "Vice President",
      "George Clinton",
      new Date(1805, 2, 4),
      new Date(1812, 3, 20),
    ],
    [
      "Secretary of State",
      "John Jay",
      new Date(1789, 8, 25),
      new Date(1790, 2, 22),
    ],
    [
      "Secretary of State",
      "Thomas Jefferson",
      new Date(1790, 2, 22),
      new Date(1793, 11, 31),
    ],
    [
      "Secretary of State",
      "Edmund Randolph",
      new Date(1794, 0, 2),
      new Date(1795, 7, 20),
    ],
    [
      "Secretary of State",
      "Timothy Pickering",
      new Date(1795, 7, 20),
      new Date(1800, 4, 12),
    ],
    [
      "Secretary of State",
      "Charles Lee",
      new Date(1800, 4, 13),
      new Date(1800, 5, 5),
    ],
    [
      "Secretary of State",
      "John Marshall",
      new Date(1800, 5, 13),
      new Date(1801, 2, 4),
    ],
    [
      "Secretary of State",
      "Levi Lincoln",
      new Date(1801, 2, 5),
      new Date(1801, 4, 1),
    ],
    [
      "Secretary of State",
      "James Madison",
      new Date(1801, 4, 2),
      new Date(1809, 2, 3),
    ],
  ];

export default function Dfs() {
    let postCount;
    const startyear = new Date(2023)
    const endyear = new Date(2024)
    const years = [2023, 2024]
    const currMonth = [
        'Jan-Mar', 'Apr-Jun', 'Jul-Sep', 'Oct-Dec'
    ]
    const prevMonth = [
        'Oct', 'Nov', 'Dec'
    ]
    const timelinedata = () => {
        cardData.map((val) => val.pathname === window.location.pathname && (postCount = val.items.length))
    }
    timelinedata()

    return (
        <div className='dfs'>
            <div className='timeline-tags'>
                <h2 style={{ color: "#232360" }}>Timeline</h2>
                <p className='timeline-tag tag'>Today</p>
                <p className='timeline-date-tag tag'><LeftOutlined />&nbsp; Nov, 22, 2023 &nbsp;<RightOutlined /></p>
            </div>


            {/* <div className='monthname' style={{ justifyContent: 'space-around', width: "100%" }}>
                {years.map((year) =>
                    <div className='dfs-calendar'>
                        <p>{year}</p>
                        <p className='dfs-months'> {year > 2023 ?
                            currMonth.map((currMonth) => <p>{currMonth}</p>)
                            :
                            prevMonth.map((prevMonth) => <p>{prevMonth}</p>)}</p>
                    </div>
                )}

            </div> */}
            <div className='bri-body'>
                {/* {cardData.map((val) => val.pathname === window.location.pathname &&
                    val.items.map((value) =>
                        <ProgressBar
                            percentage={value.percentage}
                            // lightbgcolor={'rgba(255, 248, 229, 1)'}
                            // bgcolor={value.percentage !== '100%' ? '#FFD659' : '#97C354'}
                            title={value.title}
                            names={value.names}
                        />
                    )
                )} */}
                <Timeline />
            </div>

        </div>
    )
}
