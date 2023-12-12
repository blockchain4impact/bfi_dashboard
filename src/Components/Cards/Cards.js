import React from "react";
import "../Cards/Cards.css";
import Vector from "../../Assets/images/Vector.png";

function determineCardColor(percentage) {
  const numericPercentage = parseInt(percentage, 10);
  if (numericPercentage === 100) {
    return "#EBF8EE"; // Green for 100%
  } else if (numericPercentage === 0) {
    return "#FFC4C3"; // Red for 0%
  } else {
    return "#FDF5EC"; // Original color
  }
}

export default function Cards({ data }) {
  if (!data || !data.items) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cards">
      <div className="card-header">
        <div className="rectangle">
          <img src={Vector} alt="vector-img" />
        </div>
      </div>
      <div className="card-body">
        <div className="card-head">{data.title}</div>
        <div className="card-container">
          {data.items.map((item) => {
            const cardColor = determineCardColor(item.percentage);
            let titleColor, detailColor;
            if (item.percentage === "100%") {
              titleColor = "#389C39"; // Green for 100%
              detailColor = "#389C39"; // Green for 100%
            } else if (item.percentage === "0%") {
              titleColor = "#E94944"; // Red for 0%
              detailColor = "#E94944"; // Red for 0%
            } else {
              titleColor = "#F0984C"; // Default title color
              detailColor = "#C4A387"; // Default detail color
            }

            return (
              <div
                className="card-content"
                key={item.id}
                style={{ backgroundColor: cardColor }}
              >
                <div className="card-percentage">
                  <p>{item.percentage}</p>
                </div>
                <div className="card-body-content">
                  <div className="card-details">
                    <p style={{ color: titleColor }}>{item.title}</p>
                    <p style={{ color: detailColor }}>{item.detail}</p>
                  </div>
                  <div className="names-container">
                    {item.names.map((name, nameIndex) => (
                      <div className="rounded-name" key={nameIndex}>
                        <p>{name}</p>
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
