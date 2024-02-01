import axios from "axios";

export default async function getTimeline(params){
  let timelineData = await axios.get(`http://localhost:8080/${params}`)
  return timelineData.data
}