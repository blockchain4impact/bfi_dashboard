import "../Cards/Cards.css"
import React from 'react'
import Vector from "../../Assets/images/Vector.png"

export default function Cards(props) {
  return (
    <div className="cards">
        <div className="card-header">
            <div className="rectangle">
                <img src={Vector} alt="vector-img" />
            </div>
        </div>
        <div className="card-body">
            <div className="card-head">
                DFS
            </div>
            <div className="card-content">
                <div className="card-percentage">
                    <p>50%</p>
                </div>
                <div className="card-body-content">
                    <p>1. Hire core IDFS team</p>
                    <p>Complete interviews and Finalise Candidates</p>
                </div>
            </div>

            <div className="card-content">
                <div className="card-percentage">
                    <p>20%</p>
                </div>
                <div className="card-body-content">
                    <p>1. Hire core IDFS team</p>
                    <p>Complete Onboarding</p>
                </div>
            </div>

            <div className="card-content">
                <div className="card-percentage">
                    <p>0%</p>
                </div>
                <div className="card-body-content">
                    <p>2. Launch HCD Fellowship</p>
                    <p>Onboarding the Partners Process</p>
                </div>
            </div>
        </div>
    </div>
  )
}
