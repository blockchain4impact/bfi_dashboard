import React from 'react';

const BriTimeline = () => {
  const oct = 50, nov = 150, dec = 250,
    ttFourQ1 = 375, ttFourQ2 = 500,
    ttFiveQ1 = 625, ttFiveQ2 = 755,
    ttSixQ1 = 875, ttSixQ2 = 1005,
    ttSevenQ1 = 1125, ttSevenQ2 = 1255;
  const tagColors = ["#FFCBAE", "#CEF2E4", "#8ECDF9", "#BEFBFF", "#D2B7FF"]
  const data = [{
    title: 'To be recognised as an Indian Biomedical Innovation Ecosystem enabler',
    names: ['P', 'G'],
    startDate: '31 Aug 2024',
    endDate: '15 Jan 2027',
    progress: '45%',
    startYear: 2024,
    endYear: 2027
  },
  {
    title: 'Launch BFI-BIOME Network and discussion with Institutes and Incubators',
    names: ['P', 'G'],
    startDate: '31 Oct 2023',
    endDate: '25 Nov 2023',
    progress: '100%',
    startYear: 2023,
    endYear: 2023
  },
  {
    title: 'Signing MoU with Institutes and Incubators for BFI-BIOME',
    names: ['P', 'G'],
    startDate: '31 Oct 2023',
    endDate: '31 Jan 2024',
    progress: '87%',
    startYear: 2023,
    endYear: 20234
  },
  {
    title: 'Finalising projects/programs and commencement of the projects/programs',
    names: ['P', 'G'],
    startDate: '31 Jan 2024',
    endDate: '31 Dec 2024',
    progress: '0%',
    startYear: 2024,
    endYear: 2026
  },
  {
    title: 'Periodic project/program review/evaluation',
    names: ['P', 'G'],
    startDate: '31 Oct 2023',
    endDate: '31 Nov 2023',
    progress: '0%',
    startYear: 2024,
    endYear: 2026
  },
  {
    title: 'Annual Project/Program Review',
    names: ['P', 'G'],
    startDate: '31 Oct 2023',
    endDate: '31 Nov 2023',
    progress: '0%',
    startYear: 2024,
    endYear: 2026
  }
  ]

  const findStartDate = (index) => {
    let xPos;
    const month = data[index].startDate.substring(3, 6)
    const year = data[index].startDate.substring(7, 11)
    const month1 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    const month2 = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    if (year === '2023') {
      if (month === 'Oct') {
        xPos = oct
      } else if (month === 'Nov') {
        xPos = nov
      } else if (month === 'Dec') {
        xPos = dec
      }
    } else if (year === '2024') {

      if (month1.includes(month)) {
        xPos = ttFourQ1
      } else if (month2.includes(month)) {
        xPos = ttFourQ2
      }
    }
    else if (year === '2025') {
      if (month1.includes(month)) {
        xPos = ttFiveQ1
      } else if (month2.includes(month)) {
        xPos = ttFiveQ2
      }
    }
    else if (year === '2026') {
      if (month1.includes(month)) {
        xPos = ttSixQ1
      } else if (month2.includes(month)) {
        xPos = ttSixQ2
      }
    }
    else if (year === '2027') {
      if (month1.includes(month)) {
        xPos = ttSevenQ1
      } else if (month2.includes(month)) {
        xPos = ttSevenQ2
      }
    }
    return xPos
  }

  const findEndingDate = (index) => {
    let yPos;
    const month = data[index].endDate.substring(3, 6)
    const year = data[index].endDate.substring(7, 11)
    const month1 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    const month2 = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    if (year === '2023') {
      if (month === 'Oct') {
        yPos = oct
      } else if (month === 'Nov') {
        yPos = nov
      } else if (month === 'Dec') {
        yPos = dec
      }
    } else if (year === '2024') {

      if (month1.includes(month)) {
        yPos = ttFourQ1
      } else if (month2.includes(month)) {
        yPos = ttFourQ2
      }
    }
    else if (year === '2025') {
      if (month1.includes(month)) {
        yPos = ttFiveQ1
      } else if (month2.includes(month)) {
        yPos = ttFiveQ2
      }
    }
    else if (year === '2026') {
      if (month1.includes(month)) {
        yPos = ttSixQ1
      } else if (month2.includes(month)) {
        yPos = ttSixQ2
      }
    }
    else if (year === '2027') {
      if (month1.includes(month)) {
        yPos = ttSevenQ1
      } else if (month2.includes(month)) {
        yPos = ttSevenQ2
      }
    }
    return yPos
  }

  return (
    <svg viewBox="0 0 1400 1400" preserveAspectRatio="none">
      <g>
        <text x="165" y="15"
          fill="rgba(78, 91, 110, 1)" dx="-11.1953125px" font-weight="700" font-size='16px'>2023</text>

        <text x="50" y="55" id="oct"
          fill="rgba(118, 131, 150, 1)" font-weight="600" dx="-11.1953125px">Oct</text>
        <line x1="50" x2="50" y1="75" y2="1155" fill="none" stroke="rgba(235, 237, 244, 1)" stroke-width="1"></line>

        <text x="150" y="55"
          fill="rgba(118, 131, 150, 1)" font-weight="600" dx="-11.1953125px">Nov</text>
        <line x1="150" x2="150" y1="75" y2="1155" fill="none" stroke="rgba(235, 237, 244, 1)" stroke-width="1"></line>

        <text x="250" y="55" id="dec"
          fill="rgba(118, 131, 150, 1)" font-weight="600" dx="-11.1953125px">Dec</text>
        <line x1="250" x2="250" y1="75" y2="1155" fill="none" stroke="rgba(235, 237, 244, 1)" stroke-width="1"></line>

        <line x1="310" x2="310" y1="0" y2="25" fill="none" stroke="rgba(118, 131, 150, 1)" stroke-width="1"></line>

        <text x="440" y="15"
          fill="rgba(78, 91, 110, 1)" dx="-11.1953125px" font-weight="700" font-size='16px'>2024</text>

        <text x="350" y="55" id="oct"
          fill="rgba(118, 131, 150, 1)" font-weight="600" dx="-11.1953125px">Jan - Jun</text>
        <line x1="375" x2="375" y1="75" y2="1155" fill="none" stroke="rgba(235, 237, 244, 1)" stroke-width="1"></line>

        <text x="480" y="55"
          fill="rgba(118, 131, 150, 1)" font-weight="600" dx="-11.1953125px">Jul - Dec</text>
        <line x1="500" x2="500" y1="75" y2="1155" fill="none" stroke="rgba(235, 237, 244, 1)" stroke-width="1"></line>

        <line x1="565" x2="565" y1="0" y2="25" fill="none" stroke="rgba(118, 131, 150, 1)" stroke-width="1"></line>

        <text x="680" y="15"
          fill="rgba(78, 91, 110, 1)" dx="-11.1953125px" font-weight="700" font-size='16px'>2025</text>

        <text x="600" y="55"
          fill="rgba(118, 131, 150, 1)" font-weight="600" dx="-11.1953125px">Jan - Jun</text>
        <line x1="625" x2="625" y1="75" y2="1155" fill="none" stroke="rgba(235, 237, 244, 1)" stroke-width="1"></line>

        <text x="730" y="55"
          fill="rgba(118, 131, 150, 1)" font-weight="600" dx="-11.1953125px">Jul - Dec</text>
        <line x1="755" x2="755" y1="75" y2="1155" fill="none" stroke="rgba(235, 237, 244, 1)" stroke-width="1"></line>

        <line x1="820" x2="820" y1="0" y2="25" fill="none" stroke="rgba(118, 131, 150, 1)" stroke-width="1"></line>

        <text x="930" y="15"
          fill="rgba(78, 91, 110, 1)" dx="-11.1953125px" font-weight="700" font-size='16px'>2026</text>

        <text x="850" y="55"
          fill="rgba(118, 131, 150, 1)" font-weight="600" dx="-11.1953125px">Jan - Jun</text>
        <line x1="875" x2="875" y1="75" y2="1155" fill="none" stroke="rgba(235, 237, 244, 1)" stroke-width="1"></line>

        <text x="980" y="55"
          fill="rgba(118, 131, 150, 1)" font-weight="600" dx="-11.1953125px">Jul - Dec</text>
        <line x1="1005" x2="1005" y1="75" y2="1155" fill="none" stroke="rgba(235, 237, 244, 1)" stroke-width="1"></line>

        <line x1="1060" x2="1060" y1="0" y2="25" fill="none" stroke="rgba(118, 131, 150, 1)" stroke-width="1"></line>

        <text x="1180" y="15"
          fill="rgba(78, 91, 110, 1)" dx="-11.1953125px" font-weight="700" font-size='16px'>2027</text>

        <text x="1100" y="55"
          fill="rgba(118, 131, 150, 1)" font-weight="600" dx="-11.1953125px">Jan - Jun</text>
        <line x1="1125" x2="1125" y1="75" y2="1155" fill="none" stroke="rgba(235, 237, 244, 1)" stroke-width="1"></line>

        <text x="1230" y="55"
          fill="rgba(118, 131, 150, 1)" font-weight="600" dx="-11.1953125px">Jul - Dec</text>
        <line x1="1255" x2="1255" y1="75" y2="1155" fill="none" stroke="rgba(235, 237, 244, 1)" stroke-width="1"></line>

      </g>
      {data.map((value, i) => {
        const xPos = findStartDate(i);
        const yPos = findEndingDate(i);
        const width = yPos - xPos;
        const percentage = width * (parseInt(value.progress) / 100)
        return (
          <g width={'50vh'}>
            <foreignObject className="node" x={xPos + 20} y={`100` * `${i + 1}` - 25} width="100%" height="50">
              <body xmlns="http://www.w3.org/1999/xhtml">
                <div className='timeline-names' style={{ display: 'flex', gap: '1vh' }}>
                  {value.names?.map((name, index) => {
                    const colour = tagColors[Math.floor((Math.random() * tagColors.length))];
                    return (
                      <p style={{ backgroundColor: colour, paddingInline: '5px', borderRadius: '5vh', height: '21px', fontWeight: '700', color: '#505050' }} >{name}</p>
                    )
                  })}
                  <p style={{ textAlign: 'left', fontWeight: '500', color: '#768396' }} onClick={() => findStartDate(i)}>{value.title}</p>
                </div>
              </body>
            </foreignObject>
            <svg x={xPos} y={`100` * `${i + 1}`}>
              <rect x='0' y='0' width={width} height="45" rx="25" ry="25" fill="rgba(253, 212, 212, 1)"></rect>
              <rect x='0' y='0' width={percentage? percentage: '50'} height="45" rx="25" ry="25" fill="rgba(243, 87, 87, 1)"></rect>
              <circle cx='25' cy='22' r="7" fill="rgba(195, 72, 72, 1)" />
              <circle cx='25' cy='22' r="3" fill="#FFF" />
            </svg>
            <svg x={yPos + 10} y={`100` * `${i + 1}` + 8}>
              <filter id="shadow">
                <feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2" />
              </filter>
              <rect filter="url(#shadow)" x='0' y='0' width="49px" height="28px" rx="14" ry="14" fill="#FFFF"></rect>
              <text x='23.5' y='18' fill="black" fontSize={'12px'} font-weight="600" dx="-11.1953125px">
                {value.progress}
              </text>
            </svg>
          </g>

        )
      })}
    </svg >
  );
};

export default BriTimeline;
