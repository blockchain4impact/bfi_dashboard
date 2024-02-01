import React, { useState, useEffect } from "react";
import "../AddData/AddData.css";
import { PlusCircleOutlined } from "@ant-design/icons";
import CustomInput from "../../Components/Input/CustomInput";
import { Button } from "antd";
import axios from "axios";
import { useLocation } from "react-router-dom";

function EditData() {
  const id = useLocation();
  const [data, setData] = useState({});
  const [count, setCount] = useState(1);
  const [dataset, setDataSet] = useState({
    overall_progress: "",
    endDate: "",
    objective: "",
    startDate: "",
    title: "",
    dashboardItems: [
      {
        BFI: "",
        DFS: "",
        Initiatives: "",
        Key_Results: "",
        Priority: "",
        Status: "",
        progress: "",
      },
    ],
  });
  const [updatedData, setUpdatedData] = useState({
    overall_progress: "",
    endDate: "",
    objective: "",
    startDate: "",
    title: "",
    dashboardItems: [
      {
        BFI: "",
        DFS: "",
        Initiatives: "",
        Key_Results: "",
        Priority: "",
        Status: "",
        progress: "",
      },
    ],
  });
  const [dashboardItems, setDashboardItems] = useState([]);
  const fetchData = async () => {
    await axios
      .get(`http://localhost:8080/getpost/${id.state}`)
      .then((res) => setData(res.data));
  };
  useEffect(() => {
    // fetchData();
  }, []);
  const handleChange = (e) => {
    setDataSet({ ...dataset, [e.target.name]: e.target.value });
  };
  const handleDashItemsChange = (e, index) => {
    setDashboardItems((prevData) => {
      const updatedData = [...prevData];
      updatedData[index] = {
        ...updatedData[index],
        [e.target.name]: e.target.value,
      };
      return updatedData;
    });
  };
  const handleSubmit = () => {
    console.log(dataset);
    setUpdatedData({
      [updatedData.overall_progress]: "data.Overallprogress",
      [updatedData.objective]: dataset.objective
        ? dataset.objective
        : data.objective,
      [updatedData.objective]: dataset.objective
        ? dataset.objective
        : data.objective,
      [updatedData.title]: dataset.title ? dataset.title : data.title,
      [updatedData.startDate]: dataset.startDate
        ? dataset.startDate
        : data.startDate,
      [updatedData.endDate]: dataset.endDate ? dataset.endDate : data.endDate,
      [updatedData.dashboardItems?.BFI]: dataset.dashboardItems?.BFI
        ? dataset.dashboardItems?.BFI
        : data.dashboardItems?.BFI,
      [updatedData.dashboardItems?.DFS]: dataset.dashboardItems?.DFS
        ? dataset.dashboardItems?.DFS
        : data.dashboardItems?.DFS,
      [updatedData.dashboardItems?.Initiatives]: dataset?.dashboardItems
        ?.Initiatives
        ? dataset.dashboardItems?.Initiatives
        : data.dashboardItems?.Initiatives,
      [updatedData.dashboardItems?.Key_Results]: dataset.dashboardItems
        ?.Key_Results
        ? dataset.dashboardItems?.Key_Results
        : data.dashboardItems?.Key_Results,
      [updatedData.dashboardItems?.Priority]: dataset.dashboardItems?.Priority
        ? dataset.dashboardItems?.Priority
        : data.dashboardItems?.Priority,
      [updatedData.dashboardItems?.Status]: dataset.dashboardItems?.Status
        ? dataset.dashboardItems?.Status
        : data.dashboardItems?.Status,
      [updatedData.dashboardItems?.progress]: dataset.dashboardItems?.progress
        ? dataset.dashboardItems?.progress
        : data.dashboardItems?.progress,
    });
    const combinedData = {
      [dataset.Overallprogress]: dataset.Overallprogress
        ? dataset.Overallprogress
        : data.Overallprogress,
    };
    // setTimeout(function () {
    //   console.log(updatedData);
    // }, 2000);
    console.log(id);
    console.log(updatedData);
    axios
      .put(`http://localhost:8080/updatepost/${id.state}`, dataset)
      .then((res) => console.log("success"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="addData">
        <div className="addData-head">
          <h1>Edit Data</h1>
          <div className="addData-btn">
            <Button type="primary" onClick={handleSubmit}>
              Update
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button
              onClick={() => (window.location.pathname = `/${data.title}`)}
            >
              Cancel
            </Button>
          </div>
        </div>
        <div className="addData-body">
          <div className="form-data">
            <div className="addform">
              <label htmlFor="Title">Title</label>
              <input
                className="input"
                type={"text"}
                placeholder={data.title}
                name={"title"}
                onChange={handleChange}
              />
            </div>
            <div className="addform">
              <label htmlFor="Objective">Objective</label>
              <textarea
                className="input"
                type={"text"}
                placeholder={data.objective}
                rows="5"
                cols="33"
                name={"objective"}
                onChange={handleChange}
              />
            </div>
            <div className="addform">
              <label htmlFor="Start_Date">Start Date</label>
              <input
                className="input"
                type={"text"}
                placeholder={data.startDate}
                name={"startDate"}
                onChange={handleChange}
              />
            </div>
            <div className="addform">
              <label htmlFor="End_Date">End Date</label>
              <input
                className="input"
                type={"text"}
                placeholder={data.endDate}
                name={"endDate"}
                onChange={handleChange}
              />
            </div>
            <div className="addform">
              <label htmlFor="Overall_progress">Overall progress</label>
              <input
                className="input"
                type={"text"}
                placeholder={data.Overallprogress}
                name={"overall_progress"}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="dashboard-form">
            <div className="dashboard-form-head">
              <p style={{ visibility: "hidden" }}>{`Sl.No: 1.${count}`}</p>
              <p className="add-btn" onClick={() => setCount(count + 1)}>
                Add
                <PlusCircleOutlined className="bellicon" />
              </p>
            </div>
            <div className="dashboard-body">
              {data.dashboardItems?.map((value, i) => (
                <div key={i} className="dashboardItems">
                  <p>{`Sl.No: 1.${i + 1}`}</p>
                  <div className="addform">
                    <label htmlFor="Key_Results">Key Results</label>
                    <textarea
                      className="input"
                      type={"text"}
                      value={value.Key_Results}
                      rows="5"
                      cols="33"
                      placeholder={"Enter Key Results"}
                      name={"Key_Results"}
                      onChange={(e) => handleDashItemsChange(e, i)}
                    />
                  </div>

                  <div className="addform">
                    <label htmlFor="Initiatives">Initiatives</label>
                    <textarea
                      className="input"
                      type={"text"}
                      value={value.Initiatives}
                      rows="5"
                      cols="33"
                      placeholder={"Enter Initiatives"}
                      name={"Initiatives"}
                      onChange={(e) => handleDashItemsChange(e, i)}
                    />
                  </div>
                  <div className="addform">
                    <label htmlFor="DFS">DFS</label>
                    <input
                      className="input"
                      type={"text"}
                      value={value.DFS}
                      placeholder={"Enter DFS"}
                      name={"DFS"}
                      onChange={(e) => handleDashItemsChange(e, i)}
                    />
                  </div>
                  <div className="addform">
                    <label htmlFor="BFI">BFI</label>
                    <input
                      className="input"
                      type={"text"}
                      value={value.BFI}
                      placeholder={"Enter BFI"}
                      name={"BFI"}
                      onChange={(e) => handleDashItemsChange(e, i)}
                    />
                  </div>
                  <div className="addform">
                    <label htmlFor="Priority">Priority</label>
                    <input
                      className="input"
                      type={"text"}
                      value={value.Priority}
                      placeholder={"Enter Priority"}
                      name={"Priority"}
                      onChange={(e) => handleDashItemsChange(e, i)}
                    />
                  </div>
                  <div className="addform">
                    <label htmlFor="Status">Status</label>
                    <input
                      className="input"
                      type={"text"}
                      value={value.Status}
                      placeholder={"Enter Status"}
                      name={"Status"}
                      onChange={(e) => handleDashItemsChange(e, i)}
                    />
                  </div>
                  <div className="addform">
                    <label htmlFor="progress">progress</label>
                    <input
                      className="input"
                      type={"text"}
                      value={value.progress}
                      placeholder={"Enter progress"}
                      name={"progress"}
                      onChange={(e) => handleDashItemsChange(e, i)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditData;
