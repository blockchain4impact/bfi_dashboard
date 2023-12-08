import React from "react";
import Cards from "../Cards/Cards";
import "../Home/Home.css";

const cardData = [
  {
    id: 1,
    title: "BRI",
    items: [
      {
        id: 1,
        percentage: "25%",
        title:
          "To be recognized as an Indian Biomedical Innovation Ecosystem enabler",
        detail: "BFI is recognized as a key catalyst supporter for Biome",
        names: ["Name 1", "Name 2"],
      },
      {
        id: 2,
        percentage: "100%",
        title:
          "Launch BFI-BIOME Network and discussions with Institutes and Incubators",
        detail: "Successful launch with 10+ EoI received",
        names: ["Name 1", "Name 2"],
      },
      {
        id: 3,
        percentage: "75%",
        title: "Signing MoU with Insitutes and Incubators for BFI-BIOME",
        detail: "Signing of MoU(s) with 5+ Institute/Incubators",
        names: ["Name 1", "Name 2"],
      },
    ],
  },
  {
    id: 2,
    title: "BIOME",
    items: [
      {
        id: 1,
        percentage: "25%",
        title: "Successful launch with 10+ Eol recieved",
        detail: "Discussions with Inst./Incubators",
        names: ["Name 1", "Name 2"],
      },
      {
        id: 2,
        percentage: "75%",
        title: "Signing of MoU(s) with 5+ Institute/Incubators",
        detail: "Finalize the list of Institutes/Incubators",
        names: ["Name 1", "Name 2"],
      },
      {
        id: 2,
        percentage: "0%",
        title: "Commencement of Projects/programs",
        detail: "Shortlisting of projects/finalization of program",
        names: ["Name 1", "Name 2"],
      },
    ],
  },
  {
    id: 3,
    title: "ORG",
    items: [
      {
        id: 1,
        percentage: "75%",
        title: "Hiring: 3 members in BRI, 7 in IDFS and 2 in BFI Support roles",
        detail: "Complete interviews and Finalise Candidates - BRI",
        names: ["Name 1", "Name 2"],
      },
      {
        id: 2,
        percentage: "100%",
        title: "Clean audit with PWC",
        detail: "Interium Audit Report",
        names: ["Name 1", "Name 2"],
      },
      {
        id: 3,
        percentage: "100%",
        title: "Infrastructure",
        detail: "Öffice space",
        names: ["Name 1", "Name 2"],
      },
    ],
  },
  {
    id: 4,
    title: "DFS",
    percentage: "75%",
    items: [
      {
        id: 1,
        percentage: "50%",
        title: "Hire core IDFS team",
        detail: "Complete interviews and Finalise Candidates",
        names: ["Name 1", "Name 2"],
      },
      {
        id: 2,
        percentage: "20%",
        title: "Hire core IDFS team",
        detail: "Complete Onboarding",
        names: ["Name 1", "Name 2"],
      },
      {
        id: 3,
        percentage: "0%",
        title: "Launch HCD Fellowship",
        detail: "Onboarding the Partners Process",
        names: ["Name 1", "Name 2"],
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="home">
      {cardData.map((card) => (
        <Cards key={card.id} data={card} />
      ))}
    </div>
  );
}
