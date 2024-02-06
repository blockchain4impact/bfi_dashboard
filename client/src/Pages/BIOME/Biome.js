import React, {useEffect, useState} from 'react'
import { cardData } from '../Home/Home';
import "../BIOME/Biome.css"
import axios from 'axios'
import Collapse from '../../Components/Collapse/Collapse';
import TimelineHeader from '../../Components/TimlineHeader/TimelineHeader';
export const data = [
    {
        id: 1,
        badge: "Institute",
        InstituteName: "BITS",
        Institute: "Institute",
        EOLStatus: "Received",
        InDiss: "Done",
        FormalDiss: "Done",
        MoUr: "Shared",
        Mous: "Yet to Start",
        Funds: "Yet to Start",
        ProjectsShortlist: "Yet to Start",
        ProjectsStarted: "Yet to Start"
    },
    {
        id: 2,
        InstituteName: "CCMB",
        badge: "Institute",
        Institute: "Institute",
        EOLStatus: "Received",
        InDiss: "Done",
        FormalDiss: "Done",
        MoUr: "Shared",
        Mous: "Yet to Start",
        Funds: "Yet to Start",
        ProjectsShortlist: "Yet to Start",
        ProjectsStarted: "Yet to Start"
    },
    {
        id: 3,
        badge: "Institute",
        InstituteName: "FNDR",
        Institute: "Institute",
        EOLStatus: "Received",
        InDiss: "Done",
        FormalDiss: "Done",
        MoUr: "Shared",
        Mous: "Yet to Start",
        Funds: "Yet to Start",
        ProjectsShortlist: "Yet to Start",
        ProjectsStarted: "Yet to Start"
    },
    {
        id: 4,
        badge: "Institute",
        InstituteName: "IISc",
        Institute: "Institute",
        EOLStatus: "Received",
        InDiss: "Done",
        FormalDiss: "Done",
        MoUr: "Shared",
        Mous: "Completed",
        Funds: "On Going",
        ProjectsShortlist: "Yet to Start",
        ProjectsStarted: "Yet to Start"
    },
    {
        id: 5,
        badge: "Institute",
        InstituteName: "IIT-B",
        Institute: "Institute",
        EOLStatus: "Received",
        InDiss: "Done",
        FormalDiss: "Done",
        MoUr: "Shared",
        Mous: "Yet to Start",
        Funds: "Yet to Start",
        ProjectsShortlist: "Yet to Start",
        ProjectsStarted: "Yet to Start"
    },
    {
        id: 6,
        badge: "Institute",
        InstituteName: "TCG Crest",
        Institute: "Institute",
        EOLStatus: "Received",
        InDiss: "Done",
        FormalDiss: "Done",
        MoUr: "Yet to share",
        Mous: "Yet to Start",
        Funds: "Yet to Start",
        ProjectsShortlist: "Yet to Start",
        ProjectsStarted: "Yet to Start"
    },
    {
        id: 7,
        badge: "Institute",
        InstituteName: "CDRI",
        Institute: "Institute",
        EOLStatus: "Received",
        InDiss: "Done",
        FormalDiss: "Not Done",
        MoUr: "Yet to share",
        Mous: "Yet to Start",
        Funds: "Yet to Start",
        ProjectsShortlist: "Yet to Start",
        ProjectsStarted: "Yet to Start"
    },
    {
        id: 8,
        badge: "Incubator",
        InstituteName: "AIC CCMB",
        Institute: "Institute",
        EOLStatus: "Received",
        InDiss: "Done",
        FormalDiss: "Not Done",
        MoUr: "in Discussion",
        Mous: "Yet to Start",
        Funds: "Yet to Start",
        ProjectsShortlist: "Yet to Start",
        ProjectsStarted: "Yet to Start"
    },
    {
        id: 9,
        badge: "Incubator",
        InstituteName: "AIC CCMB",
        Institute: "Institute",
        EOLStatus: "Received",
        InDiss: "Done",
        FormalDiss: "Not Done",
        MoUr: "in Discussion",
        Mous: "Yet to Start",
        Funds: "Yet to Start",
        ProjectsShortlist: "Yet to Start",
        ProjectsStarted: "Yet to Start"
    },
    {
        id: 10,
        badge: "Incubator",
        InstituteName: "CCAMP",
        Institute: "Institute",
        EOLStatus: "Received",
        InDiss: "Done",
        FormalDiss: "Not Done",
        MoUr: "Yet to Share",
        Mous: "Yet to Start",
        Funds: "Yet to Start",
        ProjectsShortlist: "Yet to Start",
        ProjectsStarted: "Yet to Start"
    },
    {
        id: 11,
        badge: "Incubator",
        InstituteName: "IKP EDEN",
        Institute: "Institute",
        EOLStatus: "Received",
        InDiss: "Done",
        FormalDiss: "Done",
        MoUr: "In Disscussion",
        Mous: "Yet to Start",
        Funds: "Yet to Start",
        ProjectsShortlist: "Yet to Start",
        ProjectsStarted: "Yet to Start"
    },
    {
        id: 12,
        badge: "Incubator",
        InstituteName: "SIIC, IIT-Kanpur",
        Institute: "Institute",
        EOLStatus: "Received",
        InDiss: "Done",
        FormalDiss: "Done",
        MoUr: "Yet to share",
        Mous: "Yet to Start",
        Funds: "Yet to Start",
        ProjectsShortlist: "Yet to Start",
        ProjectsStarted: "Yet to Start"
    },
    {
        id: 13,
        badge: "Incubator",
        InstituteName: "SINE, IIT-B",
        Institute: "Institute",
        EOLStatus: "Received",
        InDiss: "Done",
        FormalDiss: "Done",
        MoUr: "In Discussion",
        Mous: "Yet to Start",
        Funds: "Yet to Start",
        ProjectsShortlist: "Yet to Start",
        ProjectsStarted: "Yet to Start"
    },
    {
        id: 14,
        badge: "Incubator",
        InstituteName: "Venture Centre",
        Institute: "Institute",
        EOLStatus: "Received",
        InDiss: "Done",
        FormalDiss: "Done",
        MoUr: "In Discussion",
        Mous: "Yet to Start",
        Funds: "Yet to Start",
        ProjectsShortlist: "Yet to Start",
        ProjectsStarted: "Yet to Start"
    },
    

]

export default function Biome() {
    const [data1, setData] = useState([])
    const fetchData = async () => {
      await axios.get('http://localhost:8080/biome').then((res) => setData(res.data))
    }
    useEffect(() => {
      fetchData()
    }, []);
    // console.log(data1)
    return (
        <div className='biome'>
            <TimelineHeader />
            {data1?.map((val) =>
                <Collapse items={val} />
            )}
        </div>
    )
}
