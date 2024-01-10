import React from "react";
import "../Cards/Cards.css";
import { Progress } from 'antd';
import { useNavigate } from 'react-router-dom';

function determineCardColor(percentage) {

  const numericPercentage = parseInt(percentage, 10);
  if (numericPercentage >= 75 && numericPercentage < 100) {
    return "#FFF8E5"; // Light green for 75% to 99%
  } else if (numericPercentage === 100) {
    return "#E8FFC6"; // Green for 100%
  } else if (numericPercentage < 75) {
    return "#FDD4D4"; // Red for 0%
  } 
}

export default function Cards({ data }) {
  const navigate = useNavigate();
  if (!data || !data.items) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cards">
      <div className="card-header">
        <div className="card-head">{data.title}</div>
        <Progress percent={30} showInfo={false} />
        <div className="card-percent">30%</div>
      </div>
      <div className="card-body">
        <div className="card-container">
          {data.items.map((item, i) => {
            const cardColor = determineCardColor(item.percentage);
            let titleColor, detailColor, percentColor;
            if (item.percentage === "100%") {
              titleColor = "#97C354"; // Green for 100%
              detailColor = "#C7FFC7"; // Green for 100%
              percentColor = "#FFFF"; //white % for 100%
            } else if (item.percentage < "75%") {
              titleColor = "#F45757"; // Red for 0%
              detailColor = "#E94944"; // Red for 0%
            } else if (item.percentage >= "75%") {
              titleColor = "#FFD659"; // Light green for above 75%
              detailColor = "#389C39";
              percentColor = "#976F00"; // Light green for above 75%
            } else {
              titleColor = "#F0984C"; // Default title color
              detailColor = "#C4A387"; // Default detail color
            }

            return (
              <div
                className="card-content"
                key={item.id}
                style={{ backgroundColor: cardColor }}
                onClick={() => navigate('/' + data.title.toLowerCase())}
              >
                <div className="card-percentage" style={{ backgroundColor: titleColor, color: "white" }}>
                  <p style={{ color: percentColor }}>{item.percentage}</p>
                </div>
                <div className="card-body-content">
                  <div className="card-details">
                    <p style={{color: '#3D3D3D'}}>{item.title}</p>
                    <p style={{color: 'rgba(0,0,0,0.5)'}}>{item.detail}</p>
                  </div>
                  <div className="names-container">
                    {item.names.map((name, nameIndex) => (
                      <div className="rounded-name" key={nameIndex}>
                        <p>{name.substr(0,1)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
