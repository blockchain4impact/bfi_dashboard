import React, { useState, useEffect } from "react";
import Cards from "../../Components/Cards/Cards";
import "./Home.css";
import Overall from "../../Components/Overall/Overall";
import axios from "axios";
import CircularProgress from "../../Components/CircularPB/CircularProgress";

export const biomeData = [
  {
    id: 1,
    badge: "Institute",
    InstituteName: "BITS",
    Institute: "Institute",
    EOLStatus: "Received",
    InDiss: "Done",
    FormalDiss: "Done",
    MoUr: "Shared",
    Mous: "Yet to Start",
    Funds: "Yet to Start",
    ProjectsShortlist: "Yet to Start",
    ProjectsStarted: "Yet to Start"
  },
  {
    id: 2,
    InstituteName: "CCMB",
    badge: "Institute",
    Institute: "Institute",
    EOLStatus: "Received",
    InDiss: "Done",
    FormalDiss: "Done",
    MoUr: "Shared",
    Mous: "Yet to Start",
    Funds: "Yet to Start",
    ProjectsShortlist: "Yet to Start",
    ProjectsStarted: "Yet to Start"
  },
  {
    id: 3,
    badge: "Institute",
    InstituteName: "FNDR",
    Institute: "Institute",
    EOLStatus: "Received",
    InDiss: "Done",
    FormalDiss: "Done",
    MoUr: "Shared",
    Mous: "Yet to Start",
    Funds: "Yet to Start",
    ProjectsShortlist: "Yet to Start",
    ProjectsStarted: "Yet to Start"
  },
  {
    id: 4,
    badge: "Institute",
    InstituteName: "IISc",
    Institute: "Institute",
    EOLStatus: "Received",
    InDiss: "Done",
    FormalDiss: "Done",
    MoUr: "Shared",
    Mous: "Completed",
    Funds: "On Going",
    ProjectsShortlist: "Yet to Start",
    ProjectsStarted: "Yet to Start"
  },
  {
    id: 5,
    badge: "Incubator",
    InstituteName: "AIC CCMB",
    Institute: "Institute",
    EOLStatus: "Received",
    InDiss: "Done",
    FormalDiss: "Not Done",
    MoUr: "in Discussion",
    Mous: "Yet to Start",
    Funds: "Yet to Start",
    ProjectsShortlist: "Yet to Start",
    ProjectsStarted: "Yet to Start"
  }
];

const biomeOverall = {
  percentage: "25",
  names: ["Gaurav", "Pooja"]
}

export default function Home() {
  const [data, setData] = useState([])

  const fetchData = async () => {
    await axios.get(`https://bfi-server.vercel.app/`).then((res) => setData(res.data))
  }
  useEffect(() => {
    fetchData()
  }, []);
  const britotalNames = [], brinames = [];
  const dfstotalNames = [], dfsnames = [];
  const orgtotalNames = [], orgnames = [];
  let bripercent = 0, dfspercent = 0, orgpercent = 0;
  data.filter(val => val.title === 'bri').map(value => { bripercent = bripercent + (parseInt(value.Overallprogress) / 3); value.dashboardItems.map(names => britotalNames.push(names.BFI, names.DFS)) })
  data.filter(val => val.title === 'dfs').map(value => { dfspercent = dfspercent + (parseInt(value.Overallprogress) / 3); value.dashboardItems.map(names => dfstotalNames.push(names.BFI, names.DFS)) })
  data.filter(val => val.title === 'org').map(value => { orgpercent = orgpercent + (parseInt(value.Overallprogress) / 3); value.dashboardItems.map(names => orgtotalNames.push(names.BFI, names.DFS)) })
  brinames.push(...new Set(britotalNames))
  dfsnames.push(...new Set(dfstotalNames))
  orgnames.push(...new Set(orgtotalNames))
  return (
    <div className="home-main">
      <h1 style={{ textAlign: 'left', marginLeft: '3vh', marginBlock: '2vh' }}>Main Dashboard</h1>
      <div className="home">
        <div className="cards">
          <div className="card-head">
            <h2>BRI</h2>
          </div>
          <div className="card-container">
            {data?.filter(val => val.title === 'bri').map((value, index) => (
              <div className="card-body">
                <div className="card-body-content">
                  <div className="card-body-percentage">
                    <CircularProgress percentage={value.dashboardItems[0].progress} width={45} />
                  </div>
                  <div className="card-body-data card-style">
                    <p className="title">{value.objective}</p>
                    <p className="detail" style={{ color: 'gray' }}>{value.dashboardItems[0].Key_Results}</p>
                  </div>
                </div>
                <div className="card-body-details">
                  <p className="card-date card-style">{value.dashboardItems[0].Timeline ? value.dashboardItems[0].Timeline : "31-Mar-27"}</p>
                  <div className="card-status">
                    <p className="card-style status" style={{ color: value.dashboardItems[0].Status === 'Completed' ? 'rgba(56, 156, 57, 1)' : 'rgba(210, 150, 0, 1)', backgroundColor: value.dashboardItems[0].Status === 'Completed' ? 'rgba(250, 255, 247, 1)' : 'rgba(255, 251, 241, 1)' }}>
                      {value.dashboardItems[0].Status}
                    </p>
                  </div>
                </div>
              </div>
            ))
            }
          </div>
        </div>
        <div className="cards">
          <div className="card-head">
            <h2>BIOME</h2>
          </div>
          <div className="card-container">
            <table className="biome-table">
              <thead>
                <tr>
                  <td>Institute/Incubator Name</td>
                  <td>Institute/Incubator</td>
                  <td>EoI status</td>
                  <td>Initial Discussion</td>
                </tr>
              </thead>
              <tbody>
                {biomeData.map((value, index) => (
                  <tr>
                    <td>{value.InstituteName}</td>
                    <td>{value.Institute}</td>
                    <td className="biome-status">{value.EOLStatus}</td>
                    <td className="biome-status">{value.InDiss}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="cards">
          <div className="card-head">
            <h2>DFS</h2>
          </div>
          <div className="card-container">
            {data?.filter(val => val.title === 'dfs').map((value, index) => (
              <div className="card-body">
                <div className="card-body-content">
                  <div className="card-body-percentage">
                    <CircularProgress percentage={value.dashboardItems[0].progress} width={45} />
                  </div>
                  <div className="card-body-data card-style">
                    <p className="title">{value.objective}</p>
                    <p className="detail" style={{ color: 'gray' }}>{value.dashboardItems[0].Key_Results}</p>
                  </div>
                </div>
                <div className="card-body-details">
                  <p className="card-date card-style">{value.dashboardItems[0].Timeline ? value.dashboardItems[0].Timeline : "31st Mar, 2027"}</p>
                  <div className="card-status">
                    <p className="card-style status" style={{ color: value.dashboardItems[0].Status === 'Completed' ? 'rgba(56, 156, 57, 1)' : 'rgba(210, 150, 0, 1)', backgroundColor: value.dashboardItems[0].Status === 'Completed' ? 'rgba(250, 255, 247, 1)' : 'rgba(255, 251, 241, 1)' }}>
                      {value.dashboardItems[0].Status}
                    </p>
                  </div>
                </div>
              </div>
            ))
            }
          </div>
        </div>
        <div className="cards">
          <div className="card-head">
            <h2>ORG</h2>
          </div>
          <div className="card-container">
            {data?.filter(val => val.title === 'org').map((value, index) => (
              <div className="card-body">
                <div className="card-body-content">
                  <div className="card-body-percentage">
                    <CircularProgress percentage={value.dashboardItems[0].progress} width={45} />
                  </div>
                  <div className="card-body-data card-style">
                    <p className="title">{value.objective}</p>
                    <p className="detail" style={{ color: 'gray' }}>{value.dashboardItems[0].Key_Results}</p>
                  </div>
                </div>
                <div className="card-body-details">
                  <p className="card-date card-style">{value.dashboardItems[0].Timeline ? value.dashboardItems[0].Timeline : "31st Mar, 2027"}</p>
                  <div className="card-status">
                    <p className="card-style status" style={{ color: value.dashboardItems[0].Status === 'Completed' ? 'rgba(56, 156, 57, 1)' : 'rgba(210, 150, 0, 1)', backgroundColor: value.dashboardItems[0].Status === 'Completed' ? 'rgba(250, 255, 247, 1)' : 'rgba(255, 251, 241, 1)' }}>
                      {value.dashboardItems[0].Status}
                    </p>
                  </div>
                </div>
              </div>
            ))
            }
          </div>
        </div>
      </div>

      <div className="overall">
        <div className='overall-main'>
          <div className='overall-head'>
            <h4>BRI</h4>
            <p>Overall Percentage</p>
          </div>
          <div className='overall-body-content'>
            <CircularProgress percentage={`${bripercent}%`} width={65} />
            <div className='names'>
              {brinames?.map((name, index) =>
                <p className='name-tag'>{name}</p>
              )}
            </div>
          </div>
        </div>
        <div className='overall-main'>
          <div className='overall-head'>
            <h4>BIOME</h4>
            <p>Overall Percentage</p>
          </div>
          <div className='overall-body-content'>
            <CircularProgress percentage={`${biomeOverall.percentage}%`} width={65} />
            <div className='names'>
              {biomeOverall.names?.map((names) =>
                <p className='name-tag'>{names}</p>
              )}
            </div>
          </div>
        </div>
        <div className='overall-main'>
          <div className='overall-head'>
            <h4>DFS</h4>
            <p>Overall Percentage</p>
          </div>
          <div className='overall-body-content'>
            <CircularProgress percentage={`${dfspercent}%`} width={65} />
            <div className='names'>
              {dfsnames?.map((name, index) =>
                <p className='name-tag'>{name}</p>
              )}
            </div>
          </div>
        </div>
        <div className='overall-main'>
          <div className='overall-head'>
            <h4>ORG</h4>
            <p>Overall Percentage</p>
          </div>
          <div className='overall-body-content'>
            <CircularProgress percentage={`${orgpercent}%`} width={65} />
            <div className='names'>
              {orgnames?.map((name, index) =>
                <p className='name-tag'>{name}</p>
              )}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
