import React from "react";
import "../TaskCards/TaskCards.css";
import { MoreOutlined } from "@ant-design/icons";

export default function TaskCards() {
  const progressPercentage = 55; 

  return (
    <div className="task-cards">
      <div className="task-cards-header">
        <h3 style={{ margin: 0 }}>Interviews and Finalizationre</h3>
        <MoreOutlined />
      </div>
      <div className="task-cards-body">
        <div className="task-card-data">
          <div className="user-avatar">M</div>
          <span>Magna aliqua enim</span>
        </div>
        <div className="task-card-data">
          <div className="user-avatar">M</div>
          <span>Magna aliqua enim</span>
        </div>
      </div>

      <div className="task-card-progress-bar">
        <div className="progress-title">Progress <span> {progressPercentage} %</span></div>
        <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
      </div>
    </div>
  );
}


// import React from 'react'
// import "../TaskCards/TaskCards.css"
// import { MoreOutlined, UserOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons"

// export default function TaskCards() {
//     return (
//         <div className='task-cards'>
//             <div className='task-cards-header'>
//                 <h3 style={{ margin: 0 }}>Interviews and Finalization</h3>
//                 <MoreOutlined />
//             </div>

//             <div className='task-cards-body'>
//                 <div className='task-card-data'>
//                     <UserOutlined />
//                     <span>Magna aliqua enim</span>
//                 </div>
//                 <div className='task-card-data'>
//                     <UserOutlined />
//                     <span>Magna aliqua enim</span> 
//                 </div>
//             </div>

//             <div className='task-cards-footer'>
//                 <div>
//                     <MessageOutlined />&nbsp;
//                     <span>3</span> 
//                 </div>
//                 <StarOutlined />
//             </div>
//         </div>
//     )
// }
