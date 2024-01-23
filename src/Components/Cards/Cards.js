import React from "react";
import "../Cards/Cards.css";
import { Progress } from 'antd';
import { useNavigate } from 'react-router-dom';
import CircularProgress from "../CircularPB/CircularProgress";
import { data } from "../../Pages/BIOME/Biome";

export default function Cards({ dataItems }) {
  const navigate = useNavigate();
  if (!dataItems || !dataItems.items) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cards">
      <div className="card-head">
        <h2>{dataItems.title}</h2>
      </div>
      <div className={dataItems.title !== 'BIOME' ? "card-container" : "card-container-biome"}>
        {dataItems.title !== 'BIOME' ?
          <>
            {dataItems?.items.map((value, index) => (
              <div className="card-body">
                <div className="card-body-content">
                  <div className="card-body-percentage">
                    <CircularProgress percentage={value.percentage} width={45} />
                  </div>
                  <div className="card-body-data card-style">
                    <p className="title">{value.title}</p>
                    <p className="detail" style={{ color: 'gray' }}>{value.detail}</p>
                  </div>
                </div>
                <div className="card-body-details">
                  <p className="card-date card-style">31st Mar, 2027</p>
                  <div className="card-status">
                    <p className="card-style status" style={{ color: value.percentage === '100%'? 'rgba(56, 156, 57, 1)' : 'rgba(210, 150, 0, 1)', backgroundColor: value.percentage === '100%'? 'rgba(250, 255, 247, 1)': 'rgba(255, 251, 241, 1)' }}>
                      {value.percentage === '100%'? 'Completed' : 'Ongoing'}
                    </p>
                    {/* <p className="card-style status">High</p> */}
                  </div>
                </div>
              </div>
            ))
            }
          </>
          :
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
              {data?.map((value, index) => (
                <tr>
                  <td>{value.InstituteName}</td>
                  <td >{value.Institute}</td>
                  <td className="biome-status">{value.EOLStatus}</td>
                  <td className="biome-status">{value.InDiss}</td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      </div>
    </div>
  );
}
