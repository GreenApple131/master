import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Bar, Line } from "react-chartjs-2";

export default function Sidebar(props) {
  const RenderItems = () => {
    const {data} = props;
    console.log("data", data);
    return data.map((item) => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span className={`todo-title mr-2}`} title={item.device.id}>
          Dev number - {item.device.number}
        </span>
        <span> 
          Status - {item.common_status}
        </span>
      </li>
    ));
  };

  function getCommonStatusCode() {
    return {
      status: "GOOD",
    };
  }

  function optionsLine(text) {
    return {
      plugins: {
        title: {
          display: true,
          text: (ctx) => text,
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Day",
          },
        },
        y: {
          title: {
            display: true,
            text: "Value",
          },
        },
      },
      interaction: {
        mode: "nearest",
        axis: "x",
        intersect: false,
      },
      responsive: true,
    };
  }

  const data = {
    labels: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    datasets: [
      {
        label: "Temperature",
        data: [12, 11, 8, 10, 15, 14, 13],
        borderColor: "#E25435",
        backgroundColor: "#E25435",
        fill: false,
      },
      {
        label: "Turbidity",
        data: [8, 8.12, 8.1, 8, 8.1, 8.3, 8.2],
        borderColor: "#4F6FAE",
        backgroundColor: "#4F6FAE",
      },
      {
        label: "pH",
        data: [7, 6.9, 6.9, 7.1, 7, 7.1, 7],
        borderColor: "#70CAD1",
        backgroundColor: "#70CAD1",
      },
      {
        label: "TDS",
        data: [5, 4.8, 5, 5.1, 5.2, 4.9, 5],
        borderColor: "green",
        backgroundColor: "green",
      },
    ],
  };

  const detailedData = {
    labels: [
      "Mo 00:00",
      "Mo 06:00",
      "Mo 12:00",
      "Mo 18:00",
      "Tu 00:00",
      "Tu 06:00",
      "Tu 12:00",
      "Tu 18:00",
      "We 00:00",
      "We 06:00",
      "We 12:00",
      "We 18:00",
      "Th 00:00",
      "Th 06:00",
      "Th 12:00",
      "Th 18:00",
      "Fr 00:00",
      "Fr 06:00",
      "Fr 12:00",
      "Fr 18:00",
      "Sa 00:00",
      "Sa 06:00",
      "Sa 12:00",
      "Sa 18:00",
      "Su 00:00",
      "Su 06:00",
      "Su 12:00",
      "Su 18:00",
    ],
    datasets: [
      {
        label: "Temperature",
        data: [
          9, 7, 11, 16, 11, 9, 7, 11, 16, 11, 9, 7, 11, 16, 11, 9, 7, 11, 20,
          11, 9, 7, 11, 16, 11, 9, 7, 11, 16, 11,
        ],
        borderColor: "#E25435",
        backgroundColor: "#E25435",
        fill: false,
      },
      {
        label: "Turbidity",
        data: [
          8.5, 8.4, 8.6, 8.4, 8.5, 8.6, 8.5, 8.4, 8.6, 8.2, 8.8, 8.6, 8.5, 8.4, 8.6,
          8.2, 8.8, 8.6, 8.5, 8.4, 8.6, 8.1, 8.8, 8.6, 8.5, 8.4, 8.6, 8.5, 8.8, 8.6,
        ],
        borderColor: "#4F6FAE",
        backgroundColor: "#4F6FAE",
      },
      {
        label: "pH",
        data: [
          7, 6.9, 6.9, 7.1, 7, 7.1, 7, 6.9, 6.9, 7.1, 7, 7.1, 7, 6.9, 6.9, 7.1,
          7, 7.1, 7, 6.9, 6.9, 7.1, 7, 7.1, 7, 6.9, 6.9, 7.1, 7, 7.1,
        ],
        borderColor: "#70CAD1",
        backgroundColor: "#70CAD1",
      },
      {
        label: "TDS",
        data: [
          1.5, 1.4, 1.6, 1.4, 1.5, 1.6, 1.5, 1.4, 1.6, 1.2, 1.8, 1.6, 1.5, 1.4, 1.6,
          1.2, 1.8, 1.6, 1.5, 1.4, 1.6, 1.1, 1.8, 1.6, 1.5, 1.4, 1.6, 1.5, 1.8, 1.6,
        ],
        borderColor: "green",
        backgroundColor: "green",
      },
    ],
  };

  const temperature_data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Temperature',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(220,100,100,0.4)',
        borderColor: '#E25435',
        borderCapStyle: 'round',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#E25435',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#E25435',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [12, 11, 8, 10, 15, 14, 13]
      }
    ]
  };

  const turbidity_data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Turbidity',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,75,192,0.4)',
        borderColor: '#4F6FAE',
        borderCapStyle: 'round',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#4F6FAE',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#4F6FAE',
        pointHoverBorderColor: '#4F6FAE',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [8, 8.12, 8.1, 8, 8.1, 8.3, 8.2]
      }
    ]
  };

  const ph_data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'pH',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: '#70CAD1',
        borderCapStyle: 'round',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#70CAD1',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#70CAD1',
        pointHoverBorderColor: '#70CAD1',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [7, 6.9, 6.9, 7.1, 7, 7.1, 7]
      }
    ]
  };

  const tds_data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'TDS',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,75,0.4)',
        borderColor: 'green',
        borderCapStyle: 'round',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'green',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'green',
        pointHoverBorderColor: 'green',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [145, 150, 143, 170, 210, 190, 200]
      }
    ]
  };
  
  return (
    <div className="side overflow-auto">
      <Button variant="success" size="lg" disabled style={{ marginTop: "5px" }}>
        Device: 6fa459ea-ee8a-3ca4-894e-db77e160355e
      </Button>

      
      <div style={{ marginTop: "50px" }}>
        <Bar
          data={data}
          options={optionsLine('Last data')}
          style={{ marginTop: "10px" }}
        />
        <br />
        <Line data={detailedData} options={optionsLine('Detailed data')} />
        <RenderItems />

        <Line data={temperature_data} options={optionsLine('Temperature')} />
        <Line data={turbidity_data} options={optionsLine('Turbidity')} />
        <Line data={ph_data} options={optionsLine('pH')} />
        <Line data={tds_data} options={optionsLine('TDS')} />

      </div>
    </div>
  );
}
