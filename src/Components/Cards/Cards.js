import React from "react";
import "../Cards/Cards.css";
import { Progress } from 'antd';
import { useNavigate } from 'react-router-dom';
import CircularProgress from "../CircularPB/CircularProgress";

export default function Cards({ data }) {
  const navigate = useNavigate();
  if (!data || !data.items) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cards">
      <div className="card-head">
        <h2>{data.title}</h2>
      </div>
      <div className={data.title !== 'BIOME' ? "card-container" : "card-container-biome"}>
        {data.title !== 'BIOME' ?
          <>
            {data?.items.map((value, index) => (
              <div className="card-body">
                <div className="card-body-content">
                  <div className="card-body-percentage">
                    <CircularProgress percentage={value.percentage} />
                  </div>
                  <div className="card-body-data card-style">
                    <p className="title">{value.title}</p>
                    <p className="detail" style={{ color: 'gray' }}>{value.detail}</p>
                  </div>
                </div>
                <div className="card-body-details">
                  <p className="card-date card-style">31st Mar, 2027</p>
                  <div className="card-status">
                    <p className="card-style status" style={{ color: 'rgba(18, 80, 120, 1)' }}>Ongoing</p>
                    <p className="card-style status">High</p>
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
              {data?.Dashboarditems?.map((value, index) => (
                <tr>
                  <td>{value.InstituteName}</td>
                  <td>{value.Institute}</td>
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
