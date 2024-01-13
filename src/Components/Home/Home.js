
import React from "react";
import Cards from "../Cards/Cards";
import "../Home/Home.css";
import Overall from "../Overall/Overall";

export const cardData = [
  {
    id: 1,
    title: "BRI",
    pathname: '/bri',
    items: [
      {
        id: 1,
        percentage: "25%",
        title:
          "BFI-BIOME(Virtual Network)",
        detail: "BFI is recognized as a key catalyst supporter for Biome",
        names: ["Pooja", "Gaurav"],
        bgcolor: 'rgb(138,43,226)',
        lightbgcolor: 'rgba(138,43,226,0.2)',
      },
      {
        id: 2,
        percentage: "0%",
        title:
          "National Conferences 2024",
        detail: "Successful launch with 10+ EoI received",
        names: ["Pooja", "Gaurav"],
        bgcolor: 'rgb(255,140,0)',
        lightbgcolor: 'rgba(255,140,0,0.2)',
      },
      {
        id: 3,
        percentage: "58%",
        title: "Signing MoU with Insitutes and Incubators for BFI-BIOME",
        detail: "Signing of MoU(s) with 5+ Institute/Incubators",
        names: ["Pooja", "Gaurav"],
        bgcolor: 'rgb(50,205,50)',
        lightbgcolor: 'rgba(50,205,50,0.2)',
      },
      {
        id: 4,
        percentage: "0%",
        title: "Finalizing projects/programs and commencement of the projects/programs",
        detail: "Commencement of Projects/programs",
        names: ["Pooja", "Gaurav"],
      },
      {
        id: 5,
        percentage: "0%",
        title: "Periodic project/program review/evaluation",
        detail: "Review reports/results",
        names: ["Pooja", "Gaurav"],
      },
      {
        id: 6,
        percentage: "0%",
        title: "Annual Project/Program Review",
        detail: "Impact report",
        names: ["Pooja", "Gaurav"],
      },
    ],
    overall: [
      {
        percentage: "50%",
        names: ["Pooja", "Gaurav"]
      }
    ]
  },
  {
    id: 2,
    title: "BIOME",
    pathname: '/biome',
    items: [
      {
        id: 1,
        percentage: "25%",
        title: "BITS",
        detail: "Discussions with Inst./Incubators",
        names: ["Girish", "Gaurav"],
        bgcolor: 'rgb(138,43,226)',
        lightbgcolor: 'rgba(138,43,226,0.2)',
        badge: "Institute"
      },
      {
        id: 2,
        percentage: "75%",
        title: "CDRI",
        detail: "Finalize the list of Institutes/Incubators",
        names: ["Faraz", "Naga"],
        bgcolor: 'rgb(255,140,0)',
        lightbgcolor: 'rgba(255,140,0,0.2)',
        badge: "Institute"
      },
      {
        id: 3,
        percentage: "0%",
        title: "FNDR",
        detail: "Shortlisting of projects/finalization of program",
        names: ["Girish", "Gaurav"],
        bgcolor: 'rgb(50,205,50)',
        lightbgcolor: 'rgba(50,205,50,0.2)',
        badge: "Institute"
      },
      {
        id: 4,
        percentage: "0%",
        title: "IlSc",
        detail: "Shortlisting of projects/finalization of program",
        names: ["Girish", "Gaurav"],
        bgcolor: 'rgb(50,205,50)',
        lightbgcolor: 'rgba(50,205,50,0.2)',
        badge: "Institute"
      },
      {
        id: 5,
        percentage: "0%",
        title: "AIC CCMB",
        detail: "Shortlisting of projects/finalization of program",
        names: ["Girish", "Gaurav"],
        bgcolor: 'rgb(50,205,50)',
        lightbgcolor: 'rgba(50,205,50,0.2)',
        badge: "Incubator"
      },
    ],
    Dashboarditems: [
      {
        id: 1,
        InstituteName: "BITS",
        Institute: "Institute",
        EOLStatus: "Received",
        InDiss: "Done"
      },
      {
        id: 2,
        InstituteName: "CCMB",
        Institute: "Institute",
        EOLStatus: "Received",
        InDiss: "Done"
      },
      {
        id: 3,
        InstituteName: "FNDR",
        Institute: "Institute",
        EOLStatus: "Received",
        InDiss: "Done"
      },
      {
        id: 4,
        InstituteName: "IISc",
        Institute: "Institute",
        EOLStatus: "Received",
        InDiss: "Done"
      },
    ],
    overall: [
      {
        percentage: "25%",
        names: ["Ramnath", "Naga", "VSR", "HCD", "Girish"]
      }
    ]
  },
  {
    id: 3,
    title: "ORG",
    pathname: '/org',
    items: [
      {
        id: 1,
        percentage: "75%",
        title: "Interviews and Finalization",
        detail: "Complete interviews and Finalise Candidates - BRI",
        names: ["Pooja and Faraz", "Gaurav"],
        bgcolor: 'rgb(138,43,226)',
        lightbgcolor: 'rgba(138,43,226,0.2)',
        taskcard: ["Interviews and Finalization", "Contract signing with BVT", ""]
      },
      {
        id: 2,
        percentage: "60%",
        title: "Clean audit with PWC",
        detail: "Interium Audit Report",
        names: ["Girish", "Gaurav"],
        bgcolor: 'rgb(255,140,0)',
        lightbgcolor: 'rgba(255,140,0,0.2)',
      },
      {
        id: 3,
        percentage: "75%",
        title: "Infrastructure",
        detail: "Öffice space",
        names: ["Team BFI", "Naga"],
        bgcolor: 'rgb(50,205,50)',
        lightbgcolor: 'rgba(50,205,50,0.2)',
      },
      {
        id: 4,
        percentage: "100%",
        title: "Hiring External Partners",
        detail: "The Madras Branding Company",
        names: ["Faraz", "Gaurav"],
      },
      {
        id: 5,
        percentage: "90%",
        title: "PR and Social Media Promotions",
        detail: "Brand Building",
        names: ["Faraz", "Naga"],
      },
      {
        id: 6,
        percentage: "50%",
        title: "Website updation",
        detail: "Visibility and Brand Building",
        names: ["Girish", "Naga"],
      },
      {
        id: 7,
        percentage: "25%",
        title: "Print Media Activities and PR",
        detail: "Goals and Milestones setting",
        names: ["Faraz", "Naga"],
      },
      {
        id: 8,
        percentage: "75%",
        title: "Dashboard creation",
        detail: "Goals and Milestones setting",
        names: ["Faraz", "Naga"],
      },
      {
        id: 9,
        percentage: "75%",
        title: "Procurements and Vendor Payments",
        detail: "Smooth operations",
        names: ["Faraz", "Naga"],
      },
      {
        id: 10,
        percentage: "16%",
        title: "Onboarding a Grant/ Project management platform",
        detail: "Streamlined Process and Documentation",
        names: ["Divyarth", "Naga"],
      },
      {
        id: 11,
        percentage: "75%",
        title: "Closure of projects under Crypto Relief",
        detail: "All relief projects are closed and audit is completed",
        names: ["Divyarth", "Naga"],
      },
    ],
    overall: [
      {
        percentage: "75%",
        names: ["Pooja", "Faraz", "Gaurav", "Ramnath", "Naga"]
      }
    ]
  },
  {
    id: 4,
    title: "DFS",
    pathname: '/dfs',
    percentage: "75%",
    subtasks: 'Contract signing with BVT',
    taskslist: ['BFI-BIOME(Virtual Network)', 'National Conferences 2024'],
    items: [
      {
        id: 1,
        percentage: "50%",
        title: "Interviews and finalization",
        detail: "Complete interviews and Finalise Candidates",
        names: ["Ramnath", "Naga"],
        bgcolor: 'rgb(138,43,226)',
        lightbgcolor: 'rgba(138,43,226,0.2)',
        width: '66%'
      },
      {
        id: 2,
        percentage: "25%",
        title: "Contract signing with BVT",
        detail: "Complete Onboarding",
        names: ["Ramnath", "Naga"],
        bgcolor: 'rgb(255,140,0)',
        lightbgcolor: 'rgba(255,140,0,0.2)',
        width: '99%'
      },
      {
        id: 3,
        percentage: "20%",
        title: "Launch IHCR Fund",
        detail: "Onboarding the Partners Process",
        names: ["Ramnath", "Naga"],
        bgcolor: 'rgb(50,205,50)',
        lightbgcolor: 'rgba(50,205,50,0.2)',
        width: '80%'
      },
      {
        id: 4,
        percentage: "45%",
        title: "Regular Program Monitoring + Team Governance",
        detail: "Onboarding the Partners Process",
        names: ["Ramnath", "Naga"],
      },
    ],
    overall: [
      {
        percentage: "40%",
        names: ["Ramnath", "Naga", "VSR", "HCD", "Girish"]
      }
    ]
  },
];

export default function Home() {
  return (
    <div className="home-main">
      <div className="home">
        {cardData.map((card) => (
          <Cards key={card.id} data={card} />
        ))}

      </div>

      <div className="overall">
        {cardData.map((card) => (
            <Overall data={card} />
        ))}
      </div>
    </div>
  );
}
