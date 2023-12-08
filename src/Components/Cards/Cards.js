import React from 'react';
import "../Cards/Cards.css";
import Vector from "../../Assets/images/Vector.png";

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
            <div className="card-head">
                {data.title}
            </div>
            {data.items.map(item => (
              <div className="card-content" key={item.id}>
                  <div className="card-percentage">
                      <p>{item.percentage}</p>
                  </div>
                  <div className="card-body-content">
                      <p>{item.title}</p>
                      <p>{item.detail}</p>
                  </div>
                  <div className="names-container">
                    <div className="rounded-name">
                        <p>{item.names}</p>
                    </div>
                  </div>
              </div>
            ))}
        </div>
    </div>
  );
}
