import React from "react";
import { Pie, PieChart, Tooltip } from "recharts";
import "./Statistics.css";
import BgBanner from "../BgBanner/BgBanner";

const Statistics = () => {
  const assignment = [{ name: "Assignment", value: 480 }];

  const assignmentMarks = [
    { id: 1, name: "Assignment 1", number: 58 },
    { id: 2, name: "Assignment 2", number: 58 },
    { id: 3, name: "Assignment 3", number: 58 },
    { id: 4, name: "Assignment 4", number: 54 },
    { id: 5, name: "Assignment 5", number: 53 },
    { id: 6, name: "Assignment 6", number: 58 },
    { id: 7, name: "Assignment 7", number: 60 },
    { id: 8, name: "Assignment 8", number: 58 },
  ];

  const title = "Pie Chart";

  return (
    <div>
      <BgBanner title={title}></BgBanner>
      <div className="chart-container">
        <PieChart width={400} height={400}>
          <Pie data={assignment} dataKey="value" cx={200} cy={200} outerRadius={60} fill="#8884d8" />
          <Pie
            data={assignmentMarks}
            dataKey="number"
            cx={200}
            cy={200}
            innerRadius={70}
            outerRadius={90}
            fill="#82ca9d"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Statistics;
