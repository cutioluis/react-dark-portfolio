import { useState } from "react";
import { BioDetails } from "../BioDetails/BioDetails";
import "./Bio.css";

export const Bio = () => {
  const bios = [
    {
      year: "2005",
      description: "I Work at Seplom with tech like Reactjs",
    },
    {
      year: "2007",
      description: "Trabaje creando user inferfaces usando figma",
    },
    {
      year: "2016",
      description: "Work as freelancer",
    },
  ];

  return (
    <section className="container container-lines">
      <div className="line"></div>
      {bios.map((e) => (
        <div className="lines-items">
          <span className="gray-text text-bio">{e.description}</span>
          <div className="line"></div>
        </div>
      ))}
    </section>
  );
};
