import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

const state = {
  labels: ["Used Leave", "Remaining Leave"],
  datasets: [
    {
      label: "Total Leave",
      backgroundColor: ["#855CF8", "#E289F2"],
      data: [10, 5],
    },
  ],
};

export default class PieChart extends Component {
  render() {
    return (
      <div>
        <Pie
          data={state}
          options={{
            legend: {
              display: false,
              position: "bottom",
            },
          }}
        />
      </div>
    );
  }
}
