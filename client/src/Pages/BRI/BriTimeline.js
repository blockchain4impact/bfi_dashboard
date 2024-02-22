import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Spin, message } from 'antd';

const BriTimeline = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([])
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false)
  const fetchData = async () => {
    await axios.get(`https://bfi-server.vercel.app/`).then((res) => setData(res.data))
  }
  useEffect(() => {
    setLoading(true)
    fetchData()
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, []);

  const oct = 50, nov = 150, dec = 250,
    ttFourQ1 = 375, ttFourQ2 = 500,
    ttFiveQ1 = 625, ttFiveQ2 = 755,
    ttSixQ1 = 875, ttSixQ2 = 1005,
    ttSevenQ1 = 1125, ttSevenQ2 = 1255;
  const tagColors = ["#FFCBAE", "#CEF2E4", "#8ECDF9", "#BEFBFF", "#D2B7FF"]
  const error = (err) => {
    messageApi.open({
      type: 'error',
      content: err,
    });
  };
  const navigateToEdit = (id) => {
    navigate('/edit', { state: id })
  }
  const startYear = (date) => {
    let year;
    year = date.substring(7, 11)
    return year
  }
  const endYear = (date) => {
    let year;
    year = date.substring(7, 11)
    return year
  }
  const findStartDate = (startDate) => {
    let xPos;
    const month = startDate.substring(3, 6)
    const year = startYear(startDate)
    const month1 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    const month2 = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    if (year === '23') {
      if (month === 'Oct') {
        xPos = oct
      } else if (month === 'Nov') {
        xPos = nov
      } else if (month === 'Dec') {
        xPos = dec
      } else {
        xPos = oct
      }
    } else if (year === '24') {

      if (month1.includes(month)) {
        xPos = ttFourQ1
      } else if (month2.includes(month)) {
        xPos = ttFourQ2
      }
    }
    else if (year === '25') {
      if (month1.includes(month)) {
        xPos = ttFiveQ1
      } else if (month2.includes(month)) {
        xPos = ttFiveQ2
      }
    }
    else if (year === '26') {
      if (month1.includes(month)) {
        xPos = ttSixQ1
      } else if (month2.includes(month)) {
        xPos = ttSixQ2
      }
    }
    else if (year === '27') {
      if (month1.includes(month)) {
        xPos = ttSevenQ1
      } else if (month2.includes(month)) {
        xPos = ttSevenQ2
      }
    }
    return xPos
  }

  const findEndingDate = (endDate) => {
    let yPos;
    const month = endDate.substring(3, 6)
    const year = endYear(endDate)
    const month1 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    const month2 = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    if (year === '23') {
      if (month === 'Oct') {
        yPos = oct
      } else if (month === 'Nov') {
        yPos = nov
      } else if (month === 'Dec') {
        yPos = dec
      }
    } else if (year === '24') {

      if (month1.includes(month)) {
        yPos = ttFourQ1
      } else if (month2.includes(month)) {
        yPos = ttFourQ2
      }
    }
    else if (year === '25') {
      if (month1.includes(month)) {
        yPos = ttFiveQ1
      } else if (month2.includes(month)) {
        yPos = ttFiveQ2
      }
    }
    else if (year === '26') {
      if (month1.includes(month)) {
        yPos = ttSixQ1
      } else if (month2.includes(month)) {
        yPos = ttSixQ2
      }
    }
    else if (year === '27') {
      if (month1.includes(month)) {
        yPos = ttSevenQ1
      } else if (month2.includes(month)) {
        yPos = ttSevenQ2
      }
    }
    return yPos
  }
  const TimelineColor = (percentage) => {
    if (percentage < 25) {
      return 'rgba(253, 212, 212, 1)'
    } else if (percentage > 25 && percentage < 99) {
      return 'rgba(255, 248, 229, 1)'
    } else if (percentage === 100) {
      return 'rgba(151, 195, 84, 1)'
    }
  }

  const TimelineProgressColor = (percentage) => {
    if (percentage < 25) {
      return 'rgba(243, 87, 87, 1)'
    } else if (percentage > 25 && percentage < 99) {
      return 'rgba(255, 214, 89, 1)'
    } else if (percentage === 100) {
      return 'rgba(151, 195, 84, 1)'
    }
  }

  const buttonColor = (percentage) => {
    if (percentage < 25) {
      return 'rgba(195, 72, 72, 1)'
    } else if (percentage > 25 && percentage < 99) {
      return 'rgba(230, 193, 81, 1)'
    } else if (percentage === 100) {
      return 'rgba(186, 228, 122, 1)'
    }
  }
  return (
    <div>
      {contextHolder}

      <svg viewBox="0 0 1400 1400" preserveAspectRatio="none">
        <g>
          <text x="165" y="15"
            fill="rgba(78, 91, 110, 1)" dx="-11.1953125px" fontWeight="700" fontSize='16px'>2023</text>

          <text x="50" y="55" id="oct"
            fill="rgba(118, 131, 150, 1)" fontWeight="600" dx="-11.1953125px">Oct</text>
          <line x1="50" x2="50" y1="75" y2="1155" fill="none" stroke="rgba(235, 237, 244, 1)" strokeWidth="1"></line>

          <text x="150" y="55"
            fill="rgba(118, 131, 150, 1)" fontWeight="600" dx="-11.1953125px">Nov</text>
          <line x1="150" x2="150" y1="75" y2="1155" fill="none" stroke="rgba(235, 237, 244, 1)" strokeWidth="1"></line>

          <text x="250" y="55" id="dec"
            fill="rgba(118, 131, 150, 1)" fontWeight="600" dx="-11.1953125px">Dec</text>
          <line x1="250" x2="250" y1="75" y2="1155" fill="none" stroke="rgba(235, 237, 244, 1)" strokeWidth="1"></line>

          <line x1="310" x2="310" y1="0" y2="25" fill="none" stroke="rgba(118, 131, 150, 1)" strokeWidth="1"></line>

          <text x="440" y="15"
            fill="rgba(78, 91, 110, 1)" dx="-11.1953125px" fontWeight="700" fontSize='16px'>2024</text>

          <text x="350" y="55" id="oct"
            fill="rgba(118, 131, 150, 1)" fontWeight="600" dx="-11.1953125px">Jan - Jun</text>
          <line x1="375" x2="375" y1="75" y2="1155" fill="none" stroke="rgba(235, 237, 244, 1)" strokeWidth="1"></line>

          <text x="480" y="55"
            fill="rgba(118, 131, 150, 1)" fontWeight="600" dx="-11.1953125px">Jul - Dec</text>
          <line x1="500" x2="500" y1="75" y2="1155" fill="none" stroke="rgba(235, 237, 244, 1)" strokeWidth="1"></line>

          <line x1="565" x2="565" y1="0" y2="25" fill="none" stroke="rgba(118, 131, 150, 1)" strokeWidth="1"></line>

          <text x="680" y="15"
            fill="rgba(78, 91, 110, 1)" dx="-11.1953125px" fontWeight="700" fontSize='16px'>2025</text>

          <text x="600" y="55"
            fill="rgba(118, 131, 150, 1)" fontWeight="600" dx="-11.1953125px">Jan - Jun</text>
          <line x1="625" x2="625" y1="75" y2="1155" fill="none" stroke="rgba(235, 237, 244, 1)" strokeWidth="1"></line>

          <text x="730" y="55"
            fill="rgba(118, 131, 150, 1)" fontWeight="600" dx="-11.1953125px">Jul - Dec</text>
          <line x1="755" x2="755" y1="75" y2="1155" fill="none" stroke="rgba(235, 237, 244, 1)" strokeWidth="1"></line>

          <line x1="820" x2="820" y1="0" y2="25" fill="none" stroke="rgba(118, 131, 150, 1)" strokeWidth="1"></line>

          <text x="930" y="15"
            fill="rgba(78, 91, 110, 1)" dx="-11.1953125px" fontWeight="700" fontSize='16px'>2026</text>

          <text x="850" y="55"
            fill="rgba(118, 131, 150, 1)" fontWeight="600" dx="-11.1953125px">Jan - Jun</text>
          <line x1="875" x2="875" y1="75" y2="1155" fill="none" stroke="rgba(235, 237, 244, 1)" strokeWidth="1"></line>

          <text x="980" y="55"
            fill="rgba(118, 131, 150, 1)" fontWeight="600" dx="-11.1953125px">Jul - Dec</text>
          <line x1="1005" x2="1005" y1="75" y2="1155" fill="none" stroke="rgba(235, 237, 244, 1)" strokeWidth="1"></line>

          <line x1="1060" x2="1060" y1="0" y2="25" fill="none" stroke="rgba(118, 131, 150, 1)" strokeWidth="1"></line>

          <text x="1180" y="15"
            fill="rgba(78, 91, 110, 1)" dx="-11.1953125px" fontWeight="700" fontSize='16px'>2027</text>

          <text x="1100" y="55"
            fill="rgba(118, 131, 150, 1)" fontWeight="600" dx="-11.1953125px">Jan - Jun</text>
          <line x1="1125" x2="1125" y1="75" y2="1155" fill="none" stroke="rgba(235, 237, 244, 1)" strokeWidth="1"></line>

          <text x="1230" y="55"
            fill="rgba(118, 131, 150, 1)" fontWeight="600" dx="-11.1953125px">Jul - Dec</text>
          <line x1="1255" x2="1255" y1="75" y2="1155" fill="none" stroke="rgba(235, 237, 244, 1)" strokeWidth="1"></line>

        </g>
        {!loading ?
          <svg>
            {data.filter((val, index) => val.title === 'BRI').map((value, i) => {
              const xPos = findStartDate(value.startDate);
              const yPos = findEndingDate(value.endDate);
              const width = yPos - xPos;
              const percentage = width * (parseInt(value.Overallprogress) / 100)
              var textx = yPos + 10
              if (xPos === yPos) {
                textx = yPos + 55
              }
              return (
                <g width={'50vh'} onClick={() => { navigateToEdit(value._id) }} style={{ cursor: 'pointer' }} key={i}>
                  <foreignObject className="node" x={xPos + 20} y={`100` * `${i + 1}` - 25} width="100%" height="50">
                    <div className='timeline-names' style={{ display: 'flex', gap: '1vh' }}>
                      <p style={{ backgroundColor: tagColors[Math.floor((Math.random() * tagColors.length))], paddingInline: '6px', display: 'flex', alignItems: 'center', borderRadius: '50%', fontWeight: '700', color: '#505050', fontSize: '12px' }}>{value.dashboardItems[0].BFI?.substring(0, 1)}</p>
                      <p style={{ backgroundColor: tagColors[Math.floor((Math.random() * tagColors.length))], paddingInline: '6px', display: 'flex', alignItems: 'center', borderRadius: '50%', fontWeight: '700', color: '#505050', fontSize: '12px' }}>{value.dashboardItems[0].DFS?.substring(0, 1)}</p>
                      <p style={{ textAlign: 'left', fontWeight: '500', color: '#768396', fontSize: '14px' }}>{value.objective}</p>
                    </div>
                  </foreignObject>
                  <svg x={xPos} y={`100` * `${i + 1}`}>
                    <rect x='0' y='0' width={width} height="45" rx="25" ry="25" fill={TimelineColor(parseInt(value.Overallprogress))}></rect>
                    <rect x='0' y='0' width={percentage ? percentage : '50'} height="45" rx="25" ry="25" fill={TimelineProgressColor(parseInt(value.Overallprogress))}></rect>
                    <circle cx='25' cy='22' r="7" fill={buttonColor(parseInt(value.Overallprogress))} />
                    <circle cx='25' cy='22' r="3" fill="#FFF" />
                  </svg>
                  <svg x={textx} y={`100` * `${i + 1}` + 8}>
                    <filter id="shadow">
                      <feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2" />
                    </filter>
                    <rect filter="url(#shadow)" x='0' y='0' width="49px" height="28px" rx="14" ry="14" fill="#FFFF"></rect>
                    <text x='23.5' y='18' fill="black" fontSize={'12px'} fontWeight="600" dx="-11.1953125px">
                      {value.Overallprogress}
                    </text>
                  </svg>
                </g>

              )
            })}
          </svg >
          :
          <foreignObject className="node" x={0} y={200} width="100%" height="50">
            <Spin />
          </foreignObject>
        }
      </svg>
    </div>

  );
};

export default BriTimeline;
