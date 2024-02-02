import axios from "axios";

export default async function getTimeline(params){
  let timelineData = await axios.get(`https://bfi-server.vercel.app/${params}`)
  return timelineData.data
}