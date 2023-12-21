import React from "react";
import "../TaskCards/TaskCards.css";
import { MoreOutlined } from "@ant-design/icons";
export default function TaskCards(props) {

  const cardColors = ['#0072BC', '#FCBE04'];

  return (
    <div className="task-cards">
      <div className="task-cards-header">
        <p style={{ margin: 0 }}>{props.title}</p>
        <MoreOutlined />
      </div>
      {props.task.map((data, index) => (
        <div className="task-cards-body" key={index}>
          <div className="task-card-data" style={{ borderColor: cardColors[index] }}>
            <div className="user-avatar" style={{ background: cardColors[index] }}>
              {data.slice(0, 1)}
            </div>
            <span>{data}</span>
          </div>
        </div>
      ))}

      <div className="task-card-progress-bar">
        <div className="progress-title">Progress <span> {props.percentage} </span></div>
        <div className="progress-bar" style={{ width: props.percentage }}></div>
      </div>
    </div>
  );
}

// import React from "react";
// import "../TaskCards/TaskCards.css";
// import { MoreOutlined } from "@ant-design/icons";


// export default function TaskCards(props) {
//   return (
//     <div className="task-cards">
//       <div className="task-cards-header">
//         <p style={{ margin: 0 }}>{props.title}</p>
//         <MoreOutlined />
//       </div>
//       {props.task.map(data => (
//         <>
//           <div className="task-cards-body">
//             <div className="task-card-data">
//               <div className="user-avatar">{data.slice(0,1)}</div>
//               <span>{data}</span>
//             </div>
            
//           </div>
//         </>
//       ))}

//       <div className="task-card-progress-bar">
//         <div className="progress-title">Progress <span> {props.percentage} </span></div>
//         <div className="progress-bar" style={{ width: props.percentage }}></div>
//       </div>
//     </div>


//   );
// }
